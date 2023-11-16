import { prisma } from "../../data/mongo";
import { ProductEntity } from "../../domain/entities/shop/product.entity";
import { CustomError } from "../../domain/errors/custom.error";
import { ShopRepository } from "../../domain/repositories/shop.repository";

export class ShopRepositoryImpl implements ShopRepository {
  async getProducts(): Promise<ProductEntity[]> {
    const products = await prisma.product.findMany();
    return products;
  }
  async getProductById(id: string): Promise<ProductEntity> {
    const product = await prisma.product.findUnique({
      where: { id },
    });
    if (!product) throw new CustomError(`Product with id ${id} not found`, 404);
    return product;
  }
}
