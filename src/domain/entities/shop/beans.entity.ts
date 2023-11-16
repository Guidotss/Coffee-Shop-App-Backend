import { Price } from "@prisma/client";

export class BeansEntity { 
    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly description: string,
        public readonly roasted: string,
        public readonly imagelink_square: string,
        public readonly imagelink_portrait: string,
        public readonly ingredients: string,
        public readonly special_ingredient: string,
        public readonly prices: Price[] ,
        public readonly average_rating: number,
        public readonly ratings_count: number,
        public readonly favourite: boolean,
        public readonly type: string,
        public readonly orders: string ,
    ){}
}