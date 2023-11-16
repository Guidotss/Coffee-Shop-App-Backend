import { Router } from "express";
import { SeedControllers } from './constrollers';
import { SeedService } from '../../services/seedService';


export class SeedRoutes{    
    static get routes(){
        const router = Router(); 
        const seedService = new SeedService(); 
        const seedControllers = new SeedControllers(seedService);
        router.get("/",seedControllers.seed);

        return router;
    }
}