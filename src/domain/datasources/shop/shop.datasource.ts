import { ProductEntity } from "../../entities/shop/product.entity";

export abstract class ShopDataSource {
  abstract getProducts(): Promise<ProductEntity[]>;
  abstract getProductById(id: string): Promise<ProductEntity>;
}
