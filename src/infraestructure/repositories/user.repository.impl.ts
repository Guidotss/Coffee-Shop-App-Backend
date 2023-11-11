import { UserDataSource } from "../../domain/datasources/user/user.datasource";
import { RegisterDto } from "../../domain/dtos/auth";
import { UpdateUserDto } from "../../domain/dtos/user/updateUser.dto";
import { UserEntity } from "../../domain/entities/user/user.entity";
import { UserRepository } from "../../domain/repositories/userRepository";

export class UserRepositoryImpl implements UserRepository {
  constructor(private readonly userDatasource: UserDataSource) {}
  findUserById(id: string): Promise<UserEntity> {
    throw new Error("Method not implemented.");
  }
  findUserByEmail(email: string): Promise<UserEntity> {
    throw new Error("Method not implemented.");
  }
  createUser(user: RegisterDto): Promise<UserEntity> {
    return this.userDatasource.register(user);
  }
  updateUser(user: UpdateUserDto): Promise<UserEntity> {
    throw new Error("Method not implemented.");
  }
  deleteUser(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
