import { Response, Request } from "express";
import { UserRepository } from "../../domain/repositories/user.repository";
import { CustomError } from "../../domain/errors/custom.error";
import { Register, Login } from "../../domain/use-cases/auth";
import { RegisterDto, LoginDto } from "../../domain/dtos/auth";
import { JwtAdapter } from "../../config/jwt-adapter";

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

  public register = async (req: Request, res: Response) => {
    const [error, registerDto] = RegisterDto.register(req.body);

    if (error) {
      return res
        .header("Content-Type", "application/json")
        .status(400)
        .json({ ok: false, message: error });
    }
    try {
      const newUser = await new Register(this.userRepository).execute(
        registerDto!
      );
      const token = await JwtAdapter.sign({ id: newUser.id });
      const { name, email } = newUser;

      return res.header("Content-Type", "application/json").status(201).json({
        ok: true,
        message: "User created successfully",
        token,
        data: { name, email },
      });
    } catch (err) {
      return this.handleErrors(err, res);
    }
  };

  public login = async (req: Request, res: Response) => {
    const [error, loginDto] = LoginDto.login(req.body);
    if (error) {
      return res
        .header("Content-Type", "application/json")
        .status(400)
        .json({ ok: false, message: error });
    }

    try {
      const user = await new Login(this.userRepository).execute(loginDto!);
      const token = await JwtAdapter.sign({ id: user.id });
      const { name, email } = user;
      return res.header("Content-Type", "application/json").status(200).json({
        ok: true,
        message: "User logged successfully",
        token,
        data: { name, email },
      });
    } catch (err) {
      return this.handleErrors(err, res);
    }
  };

  public renew = async (req: Request, res: Response) => {
    const token = req.header("Authorization")!.split("Bearer ")[1];
    try {
      if (!token) {
        return res
          .header("Content-Type", "application/json")
          .status(401)
          .json({ ok: false, message: "Unauthorized" });
      }
      const { id } = (await JwtAdapter.verify(token)) as { id: string };
      const user = await this.userRepository.findUserById(id);
      if (!user) {
        return res
          .header("Content-Type", "application/json")
          .status(404)
          .json({ ok: false, message: "User not found" });
      }
      const newToken = await JwtAdapter.sign({ id: user.id });
      const { name, email } = user;
      return res.header("Content-Type", "application/json").status(200).json({
        ok: true,
        message: "User renewed successfully",
        token: newToken,
        data: { name, email },
      });
    } catch (err) {
      return this.handleErrors(err, res);
    }
  };
}
