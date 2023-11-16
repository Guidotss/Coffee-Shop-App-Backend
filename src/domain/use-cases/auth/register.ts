import { RegisterDto } from "../../dtos/auth";
import { UserEntity } from "../../entities/user/user.entity";
import { UserRepository } from "../../repositories/user.repository";

export interface RegisterUseCases {
  execute(registerDto: RegisterDto): Promise<UserEntity>;
}

export class Register implements RegisterUseCases {
  constructor(private readonly userRepository: UserRepository) {}

  execute(registerDto: RegisterDto): Promise<UserEntity> {
    return this.userRepository.createUser(registerDto);
  }
}
