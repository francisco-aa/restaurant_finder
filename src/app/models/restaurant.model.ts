import {CategoryService} from "../services/category.service";
import {CategoryModel} from "./category.model";

export class RestaurantModel {

    public static fromJson(json: any): RestaurantModel {
        return new RestaurantModel(
            json['name'],
            json['address'],
            json['city'],
            json['categoryId'],
            json['rating'],
            json['id'],
        );
    }

    constructor(
        public name: string = "",
        public address: string = "",
        public city: string = "",
        public categoryId: number | null = null,
        public rating: string = "",
        public id?: number,
    ) {
    }
}
