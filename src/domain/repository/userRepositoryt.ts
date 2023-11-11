import { RegisterDto } from "../dtos/auth";
import { UpdateUserDto } from "../dtos/user/updateUser.dto";
import { UserEntity } from "../entities/user/user.entity";

export abstract class UserRepository {
  abstract findUserById(id: string): Promise<UserEntity>;
  abstract findUserByEmail(email: string): Promise<UserEntity>;
  abstract createUser(user: RegisterDto): Promise<UserEntity>;
  abstract updateUser(user: UpdateUserDto): Promise<UserEntity>;
  abstract deleteUser(id: string): Promise<void>;
}
