import { LoginDto, RegisterDto } from "../../../infraestructure/dtos/auth";
import { UserEntity } from "../../../infraestructure/entities/user/user.entity";

export abstract class UserDataSource {
  abstract register(registerDto: RegisterDto): Promise<UserEntity>;
  abstract login(loginDto: LoginDto): Promise<UserEntity>;
  abstract getUserById(id: string): Promise<UserEntity>;
  abstract getUserByEmail(email: string): Promise<UserEntity>;
}
