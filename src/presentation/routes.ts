import { Router } from "express";
import { AuthRoutes } from "./auth/routes";

export class AppRoutes {
  static get routes() {
    const router = Router();
    
    router.use("/api/v1/auth", AuthRoutes.routes);


    return router;
  }
}
