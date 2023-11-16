import { ProductEntity } from "../../entities/shop/product.entity";
import { ShopRepository } from "../../repositories/shop.repository";

interface GetProductUseCase {
  execute(id: string): Promise<ProductEntity>;
}

export class GetProduct implements GetProductUseCase {
  constructor(private readonly shopRepository: ShopRepository) {}
  async execute(id: string): Promise<ProductEntity> {
    return this.shopRepository.getProductById(id);
  }
}
