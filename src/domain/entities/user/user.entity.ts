export class UserEntity {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly email: string,
    public readonly password: string,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
    public readonly orders?: any[]
  ) {}

  public static fromObject(obj: { [key: string]: any }): UserEntity {
    const { id, name, email, password, createdAt, updatedAt, orders } = obj;

    if (!id || !name || !email || !password || !createdAt || !updatedAt) {
      throw new Error("Missing fields");
    }
    if (!id) {
      throw new Error("Missing id");
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
    if (!createdAt) {
      throw new Error("Missing createdAt");
    }
    if (!updatedAt) {
      throw new Error("Missing updatedAt");
    }

    return new UserEntity(
      id,
      name,
      email,
      password,
      createdAt,
      updatedAt,
      orders
    );
  }
}
