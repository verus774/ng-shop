import {CartItemModel} from '../../cart/models/cart-item.model';

export class OrderModel {
  constructor(
    public id: number = null,
    public products: CartItemModel[],
    public sum: number,
    public quantity: number,
  ) {
  }
}
