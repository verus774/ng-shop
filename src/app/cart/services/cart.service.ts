import {Injectable} from '@angular/core';

import {Subject} from 'rxjs';

import {CartItemModel} from '../models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private channel = new Subject<CartItemModel>();
  private sumChannel = new Subject<number>();
  private quantityChannel = new Subject<number>();

  public channel$ = this.channel.asObservable();
  public sumChannel$ = this.sumChannel.asObservable();
  public quantityChannel$ = this.quantityChannel.asObservable();

  private cartItems: CartItemModel[] = [];
  private totalSum = 0;
  private totalQuantity = 0;

  addProduct(product: CartItemModel) {
    this.cartItems.push(product);
    this.totalSum += product.sum;
    this.totalQuantity += product.quantity;

    this.channel.next(product);
    this.sumChannel.next(this.totalSum);
    this.quantityChannel.next(this.totalQuantity);
  }
}
