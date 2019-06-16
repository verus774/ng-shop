import {CategoryModel} from './category.model';
import {IProductModel} from './iproduct.model';

export class ProductModel implements IProductModel {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public category: CategoryModel,
    public price: number,
    public isAvailable: boolean,
    public updated?: string,
    public tags?: string[],
  ) {
    this.updated = updated || new Date().toISOString();
    this.tags = tags || [];
  }
}
