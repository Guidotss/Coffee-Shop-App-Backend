import { Router } from "express";
import { AuthController } from "./controllers";
import { UserDataSourceImpl } from "../../infraestructure/datasources/user/user.datasource.impl";
import { UserRepositoryImpl } from "../../infraestructure/repositories/user.repository.impl";


export class AuthRoutes {
  static get routes() {
    const router = Router();
    const datasouce = new UserDataSourceImpl();
    const userRepository = new UserRepositoryImpl(datasouce);
    const authController = new AuthController(userRepository);

    

    router.get("/login", (req, res) => {
      res.json({ ok: true, message: "Auth routes" });
    });

    router.post("/register", authController.register);

    return router;
  }
}
