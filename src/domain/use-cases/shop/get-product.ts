import { ProductEntity } from "../../entities/shop/product.entity";
import { ShopRepository } from "../../repositories/shop.repository";

interface GetProductsUseCase {
  execute(): Promise<ProductEntity[]>;
}

export class GetProduct implements GetProductsUseCase {
  constructor(private readonly shopRepository: ShopRepository) {}
  async execute(): Promise<ProductEntity[]> {
    return this.shopRepository.getProducts();
  }
}
