import { ShopDataSource } from "../../domain/datasources/shop/shop.datasource";
import { ProductEntity } from "../../domain/entities/shop/product.entity";
import { ShopRepository } from "../../domain/repositories/shop.repository";

export class ShopRepositoryImpl implements ShopRepository {
  constructor(private readonly shopDataSource: ShopDataSource) {}
  getProducts(): Promise<ProductEntity[]> {
    return this.shopDataSource.getProducts();
  }
  getProductById(id: string): Promise<ProductEntity> {
    return this.shopDataSource.getProductById(id);
  }
}
