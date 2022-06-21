import { ingredient } from './../../shared/ingredient.model';
export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: ingredient[];

  constructor(name:string ,desc:string, imapgePath:string , ingredients: ingredient[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imapgePath;
    this.ingredients = ingredients;
  }
}