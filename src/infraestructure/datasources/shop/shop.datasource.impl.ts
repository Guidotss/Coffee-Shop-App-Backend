import { ShopDataSource } from "../../../domain/datasources/shop/shop.datasource";
import { ProductEntity } from "../../../domain/entities/shop/product.entity";
import { ShopRepository } from "../../../domain/repositories/shop.repository";

export class ShopDataSourceImpl implements ShopDataSource {
  constructor(private readonly shopRepository: ShopRepository) {}

  getProducts(): Promise<ProductEntity[]> {
    return this.shopRepository.getProducts();
  }
  getProductById(id: string): Promise<ProductEntity> {
    return this.shopRepository.getProductById(id);
  }
}
