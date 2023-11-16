import { LoginDto } from "../../dtos/auth";
import { UserEntity } from "../../entities/user/user.entity";
import { UserRepository } from "../../repositories/user.repository";

interface LoginUseCases {
  execute(loginUser: LoginDto): Promise<UserEntity>;
}

export class Login implements LoginUseCases {
  constructor(private readonly userRepository: UserRepository) {}

  execute(loginUser: LoginDto): Promise<UserEntity> {
    return this.userRepository.login(loginUser);
  }
}
