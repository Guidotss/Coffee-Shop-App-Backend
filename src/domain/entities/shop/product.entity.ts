import { Price } from "@prisma/client";

export class ProductEntity {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly description: string,
    public readonly roasted: string,
    public readonly imagelink_square: string,
    public readonly imagelink_portrait: string,
    public readonly ingredients: string,
    public readonly special_ingredient: string,
    public readonly prices: Price[],
    public readonly average_rating: number,
    public readonly ratings_count: number,
    public readonly favourite: boolean,
    public readonly type: string
  ) {}

  public static fromObject(obj: { [key: string]: any }): ProductEntity {
    const {
      id,
      name,
      description,
      roasted,
      imagelink_square,
      imagelink_portrait,
      ingredients,
      special_ingredient,
      prices,
      average_rating,
      ratings_count,
      favourite,
      type,
    } = obj;

    if (
      !id ||
      !name ||
      !description ||
      !roasted ||
      !imagelink_square ||
      !imagelink_portrait ||
      !ingredients ||
      !special_ingredient ||
      !prices ||
      !average_rating ||
      !ratings_count ||
      !favourite ||
      !type
    ) {
      throw new Error("Missing fields");
    }

    if (!id) {
      throw new Error("Missing id");
    }
    if (!name) {
      throw new Error("Missing name");
    }
    if (!description) {
      throw new Error("Missing description");
    }
    if (!roasted) {
      throw new Error("Missing roasted");
    }
    if (!imagelink_square) {
      throw new Error("Missing imagelink_square");
    }
    if (!imagelink_portrait) {
      throw new Error("Missing imagelink_portrait");
    }
    if (!ingredients) {
      throw new Error("Missing ingredients");
    }
    if (!special_ingredient) {
      throw new Error("Missing special_ingredient");
    }
    if (!prices) {
      throw new Error("Missing prices");
    }
    if (!average_rating) {
      throw new Error("Missing average_rating");
    }
    if (!ratings_count) {
      throw new Error("Missing ratings_count");
    }
    if (!favourite) {
      throw new Error("Missing favourite");
    }
    if (!type) {
      throw new Error("Missing type");
    }

    return new ProductEntity(
      id,
      name,
      description,
      roasted,
      imagelink_square,
      imagelink_portrait,
      ingredients,
      special_ingredient,
      prices,
      average_rating,
      ratings_count,
      favourite,
      type
    );
  }
}
