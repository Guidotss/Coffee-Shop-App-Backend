import { Router } from "express";
import { AuthController } from "./controllers";
import { UserDataSourceImpl } from "../../infraestructure/datasources/user/user.datasource.impl";
import { UserRepositoryImpl } from "../../infraestructure/repositories/user.repository.impl";

export class AuthRoutes {
  static get routes() {
    const router = Router();
    const datasource = new UserDataSourceImpl();
    const userRepository = new UserRepositoryImpl(datasource);
    const authController = new AuthController(userRepository);

    router.post("/register", authController.register);
    router.post("/login", authController.login);
    router.get("/renew", authController.renew); 

    return router;
  }
}
