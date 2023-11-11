export class LoginDto {
  private constructor(
    public readonly email: string,
    public readonly password: string
  ) {}

  static login(props: {
    email: string;
    password: string;
  }): [string?, LoginDto?] {
    const { email, password } = props;

    if (!email || !password) {
      throw new Error("Missing fields");
    }

    if (!email) {
      throw new Error("Missing email");
    }
    if (!password) {
      throw new Error("Missing password");
    }

    return [undefined, new LoginDto(email, password)];
  }
}
