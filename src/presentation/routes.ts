import { Router } from "express";
import { AuthRoutes } from "./auth/routes";
import { SeedRoutes } from "./seed/routes";

export class AppRoutes {
  static get routes() {
    const router = Router();

    router.use("/api/v1/auth", AuthRoutes.routes);
    router.use("/api/v1/seed", SeedRoutes.routes);

    return router;
  }
}
