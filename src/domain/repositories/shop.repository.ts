export abstract class ShopRepository {
    abstract getProducts(): Promise<any>;
    abstract getProductById(id: string): Promise<any>;
}