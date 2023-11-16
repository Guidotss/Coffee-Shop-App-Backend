import { Router } from "express";
import { ShopDataSourceImpl } from "../../infraestructure/datasources/shop/shop.datasource.impl";
import { ShopRepositoryImpl } from "../../infraestructure/repositories/shop.repository.impl";
import { ShopControllers } from "./controllers";

export class ShopRoutes { 
    static get routes() { 
        const router = Router(); 
        const datasource = new ShopDataSourceImpl(); 
        const shopRepository = new ShopRepositoryImpl(datasource);
        const shopController = new ShopControllers(shopRepository);

        router.get("/", shopController.getAll);

        return router;
    }
}