import {ICartItemModel} from './icart-item.model';
import {CategoryModel} from '../../products/models/category.model';

export class CartItemModel implements ICartItemModel {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public category: CategoryModel,
    public price: number,
    public isAvailable: boolean,
    public quantity?: number,
    public tags?: string[],
  ) {
    this.tags = tags || [];
    this.quantity = quantity || 1;
  }
}
