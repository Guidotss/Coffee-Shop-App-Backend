export class RegisterDto {
  private constructor(
    public readonly name: string,
    public readonly email: string,
    public readonly password: string
  ) {}

  static register(props: {
    name: string;
    email: string;
    password: string;
  }): [string?, RegisterDto?] {
    const { name, email, password } = props;

    if (!name || !email || !password) {
      throw new Error("Missing fields");
    }

    if (!name) {
      throw new Error("Missing name");
    }
    if (!email) {
      throw new Error("Missing email");
    }
    if (!password) {
      throw new Error("Missing password");
    }

    return [undefined, new RegisterDto(name, email, password)];
  }
}
