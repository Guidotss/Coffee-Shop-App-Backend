import { Response, Request } from "express";
import { UserRepository } from "../../domain/repositories/userRepository";
import { CustomError } from "../../domain/errors/custom.error";
import { Register } from "../../domain/use-cases/auth/register";
import { RegisterDto } from "../../domain/dtos/auth/register.dto";

export class AuthController {
  constructor(private readonly userRepository: UserRepository) {}

  private handleErrors(err: unknown, res: Response) {
    if (err instanceof CustomError) {
      return res
        .header("Content-Type", "application/json")
        .status(err.statusCode)
        .json({ ok: false, message: err.message });
    }
    console.log(err);
    return res
      .header("Content-Type", "application/json")
      .status(500)
      .json({ ok: false, message: "Internal server error" });
  }

  public register = (req: Request, res: Response) => {
    const [error, registerDto] = RegisterDto.register(req.body);

    if (error) {
      return res
        .header("Content-Type", "application/json")
        .status(400)
        .json({ ok: false, message: error });
    }
    new Register(this.userRepository)
      .execute(registerDto!)
      .then((user) => {
        const { name, email } = user;
        return res
          .header("Content-Type", "application/json")
          .status(201)
          .json({
            ok: true,
            message: "User created successfully",
            data: { name, email },
          });
      })
      .catch((err) => this.handleErrors(err, res));
  };
}
