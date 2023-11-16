import { Response, Request } from "express";
import { SeedService } from "../../services/seedService";
import { envs } from '../../config/envs'

export class SeedControllers {
  constructor(private readonly seedService: SeedService) {}

  public seed = async (_: Request, res: Response) => {
    if (envs.node_env == "development")
      return res.status(403).header("Content-Type", "application/json").json({
        ok: false,
        message: "Forbidden",
      });
    try {
      await this.seedService.seed();
      res.status(200).header("Content-Type", "application/json").json({
        ok: true,
        message: "Seeded",
      });
    } catch (error) {
      return res.status(500).header("Content-Type", "application/json").json({
        ok: false,
        message: "Internal Server Error",
      });
    }
  };
}
