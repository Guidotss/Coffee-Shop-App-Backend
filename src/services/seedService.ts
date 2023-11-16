import fs from "fs";
import { prisma } from "../data/mongo";

export class SeedService {
  async seed() {
    const coffeeData = JSON.parse(
      fs.readFileSync("./src/data/mocks/coffees.json", "utf8")
    );
    const beansData = JSON.parse(
      fs.readFileSync("./src/data/mocks/beans.json", "utf8")
    );
    const products = [...coffeeData, ...beansData];
    try {
      await prisma.$connect();
      await prisma.product.deleteMany();
      await prisma.product.createMany({
        data: products,
      });
      await prisma.$disconnect();
    } catch (error) {
      console.log(error);
    }
  }
}
