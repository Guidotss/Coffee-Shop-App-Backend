import fs from "fs";
import { prisma } from "../data/mongo";
import { Beans, Coffee } from "@prisma/client";

export class SeedService {
  async seed() {
    const coffeeData: Coffee[] = JSON.parse(
      fs.readFileSync("./src/data/mocks/coffees.json", "utf8")
    );
    const beansData: Beans[] = JSON.parse(
      fs.readFileSync("./src/data/mocks/beans.json", "utf8")
    );
    try {
      await prisma.$connect();
      await prisma.coffee.deleteMany();
      await prisma.beans.deleteMany();
      await prisma.coffee.createMany({ data: coffeeData });
      await prisma.beans.createMany({ data: beansData });
      await prisma.$disconnect();
    } catch (error) {
      console.log(error);
    }
  }
}
