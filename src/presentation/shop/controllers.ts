import { Request, Response } from "express";
import { ShopRepository } from "../../domain/repositories/shop.repository";
import { CustomError } from "../../domain/errors/custom.error";
import { GetProduct } from "../../domain/use-cases/shop/get-product";

export class ShopControllers {
  constructor(private readonly shopRepository: ShopRepository) {}

  private handleError = (err: unknown, res: Response) => {
    if (err instanceof CustomError) {
      return res
        .header("Content-Type", "application/json")
        .status(err.statusCode)
        .json({ ok: false, message: err.message });
    }
    return res
      .header("Content-Type", "application/json")
      .status(500)
      .json({ ok: false, message: "Internal server error" });
  };

  public getAll = async (_: Request, res: Response) => {
    try {
      const products = await new GetProduct(this.shopRepository).execute();
      return res
        .header("Content-Type", "application/json")
        .status(200)
        .json({ ok: true, message: "Products found", data: products });
    } catch (err) {
      return this.handleError(err, res);
    }
  };
}
