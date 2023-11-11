import { Router } from "express";

export class AuthRoutes {
  static get routes() {
    const router = Router();

    router.get("/login", (req, res) => {
      res.json({ ok: true, message: "Auth routes" });
    });

    router.get("/register", (req, res) => {
      res.json({ ok: true, message: "Auth routes" });
    });

    return router;
  }
}
