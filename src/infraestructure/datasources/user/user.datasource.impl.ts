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
  async register(registerDto: RegisterDto): Promise<UserEntity> {
    const { email, password, name } = registerDto;
    const checkUser = await prisma.user.findFirst({ where: { email } });
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
  login(loginDto: LoginDto): Promise<UserEntity> {
    throw new Error("Method not implemented.");
  }
  getUserById(id: string): Promise<UserEntity> {
    throw new Error("Method not implemented.");
  }
  getUserByEmail(email: string): Promise<UserEntity> {
    throw new Error("Method not implemented.");
  }
}
