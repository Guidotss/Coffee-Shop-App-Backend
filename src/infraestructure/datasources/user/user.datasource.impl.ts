import bcrypt from "bcrypt";
import { prisma } from "../../../data/mongo";
import { UserDataSource } from "../../../domain/datasources/user/user.datasource";
import { LoginDto, RegisterDto } from "../../../domain/dtos/auth";
import { UserEntity } from "../../../domain/entities/user/user.entity";
import { CustomError } from "../../../domain/errors/custom.error";

export class UserDataSourceImpl implements UserDataSource {
  private async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  }
  private async comparePassword(
    password: string,
    passwordFromDb: string
  ): Promise<boolean> {
    return await bcrypt.compare(password, passwordFromDb);
  }
  async register(registerDto: RegisterDto): Promise<UserEntity> {
    const { email, password, name } = registerDto;
    const checkUser = await prisma.user.findUnique({ where: { email } });
    if (checkUser) throw new CustomError("User already exists", 400);

    const hashedPassword = await this.hashPassword(password);
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    return UserEntity.fromObject(user);
  }
  async login(loginDto: LoginDto): Promise<UserEntity> {
    const user = await this.getUserByEmail(loginDto.email);
    if (!user) throw new CustomError("User not found", 404);

    const { password } = loginDto;
    const isMatch = await this.comparePassword(password, user.password);
    if (!isMatch) throw new CustomError("Invalid credentials", 401);

    return user;
  }
  async getUserById(id: string): Promise<UserEntity> {
    const user = await prisma.user.findUnique({ where: { id } });
    if (!user) throw new CustomError("User not found", 404);
    return UserEntity.fromObject(user);
  }
  async getUserByEmail(email: string): Promise<UserEntity> {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) throw new CustomError("User not found", 404);
    return UserEntity.fromObject(user);
  }
}
