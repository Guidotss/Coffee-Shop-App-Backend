import jwt from "jsonwebtoken";
import { envs } from "./envs";

export class JwtAdapter {
  static async sign(payload: any, duration = "2h"): Promise<string | null> {
    return new Promise((resolve) => {
      jwt.sign(
        payload,
        envs.jwtSecret,
        { expiresIn: duration },
        (err, token) => {
          if (err) resolve(null);
          resolve(token!);
        }
      );
    });
  }
  static async verify<T>(token: string): Promise<T | null> {
    return new Promise((resolve) => {
      jwt.verify(token, envs.jwtSecret, (err, decoded) => {
        if (err) resolve(null);
        resolve(decoded as T);
      });
    });
  }
}
