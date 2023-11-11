export class UpdateUserDto {
  private constructor(
    public readonly id: string,
    public readonly name?: string,
    public readonly email?: string,
    public readonly password?: string
  ) {}

  static update(props: {
    id: string;
    name?: string;
    email?: string;
    password?: string;
  }): [string?, UpdateUserDto?] {
    const { id, name, email, password } = props;

    if (!id) {
      throw new Error("Missing id");
    }
    if (!name && !email && !password) {
      return ["Nothing to update", undefined];
    }

    return [undefined, new UpdateUserDto(id, name, email, password)];
  }
}
