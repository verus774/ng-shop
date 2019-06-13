import {Injectable} from '@angular/core';

import {BehaviorSubject, Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

import {CartItemModel} from '../models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSource = new BehaviorSubject<CartItemModel[]>([]);
  private cartItems$ = this.cartItemsSource.asObservable();
  private cartItems: CartItemModel[] = [];

  public getItems(): Observable<CartItemModel[]> {
    return this.cartItems$;
  }

  public getSum(): Observable<number> {
    return this.cartItems$.pipe(
      map((items: CartItemModel[]) => items.reduce((acc, val) => acc + val.sum, 0))
    );
  }

  public getQuantity(): Observable<number> {
    return this.cartItems$.pipe(
      map((items: CartItemModel[]) => items.reduce((acc, val) => acc + val.quantity, 0))
    );
  }

  public addItem(newItem: CartItemModel): Observable<any> {
    const existsItemIdx = this.cartItems.findIndex(item => item.id === newItem.id);

    if (existsItemIdx > -1) {
      newItem.quantity = this.cartItems[existsItemIdx].quantity + 1;
      this.cartItems.splice(existsItemIdx, 1, newItem);
    } else {
      this.cartItems.push(newItem);
    }

    this.cartItemsSource.next(this.cartItems);
    return of({success: true});
  }

  removeItem(cartItem: CartItemModel): Observable<any> {
    const idx = this.cartItems.findIndex(item => item.id === cartItem.id);

    this.cartItems.splice(idx, 1);
    this.cartItemsSource.next(this.cartItems);
    return of({success: true});
  }

  public clearCart(): Observable<any> {
    this.cartItems = [];
    this.cartItemsSource.next(this.cartItems);
    return of({success: true});
  }

  changeQuantity(cartItem: CartItemModel, increase = true): Observable<any> {
    const idx = this.cartItems.findIndex(item => item.id === cartItem.id);

    if (idx > -1) {
      let origQuantity = this.cartItems[idx].quantity;

      if (increase) {
        cartItem.quantity = ++origQuantity;
      } else {
        if (cartItem.quantity > 1) {
          cartItem.quantity = --origQuantity;
        }
      }

      this.cartItems.splice(idx, 1, cartItem);
      this.cartItemsSource.next(this.cartItems);
      return of({success: true});
    }
  }
}
