import { UserDataSource } from "../../domain/datasources/user/user.datasource";
import { LoginDto, RegisterDto } from "../../domain/dtos/auth";
import { UpdateUserDto } from "../../domain/dtos/user/updateUser.dto";
import { UserEntity } from "../../domain/entities/user/user.entity";
import { UserRepository } from "../../domain/repositories/userRepository";

export class UserRepositoryImpl implements UserRepository {
  constructor(private readonly userDatasource: UserDataSource) {}
  findUserById(id: string): Promise<UserEntity> {
    return this.userDatasource.getUserById(id);
  }
  findUserByEmail(email: string): Promise<UserEntity> {
    return this.userDatasource.getUserByEmail(email);
  }
  createUser(user: RegisterDto): Promise<UserEntity> {
    return this.userDatasource.register(user);
  }
  login(user: LoginDto): Promise<UserEntity> {
    return this.userDatasource.login(user);
  }
  updateUser(user: UpdateUserDto): Promise<UserEntity> {
    throw new Error("Method not implemented.");
  }
  deleteUser(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
