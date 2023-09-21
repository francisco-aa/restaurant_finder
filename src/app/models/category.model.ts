import {CategoryService} from "../services/category.service";

export class CategoryModel {

  public static fromJson(json: any): CategoryModel {
    return new CategoryModel(
      json['name'],
      json['id']
    );
  }
  constructor(
    public name: string = "",
    public id?: number
  ) {
  }
}
