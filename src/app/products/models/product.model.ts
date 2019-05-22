import {CategoryModel} from './category.model';
import {IProductModel} from './IProduct.model';

export class ProductModel implements IProductModel {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public category: CategoryModel,
    public price: number,
    public isAvailable?: boolean,
    public tags?: string[],
  ) {
    this.isAvailable = isAvailable || true;
    this.tags = tags || [];
  }
}
