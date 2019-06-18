import {Injectable} from '@angular/core';

import {BehaviorSubject, Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

import {CartItemModel} from '../models/cart-item.model';
import {LocalStorageService} from '../../core/services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsKey = 'cartItems';
  private cartItems: CartItemModel[] = JSON.parse(this.localStorageService.getItem(this.cartItemsKey)) || [];
  private cartItemsSource = new BehaviorSubject<CartItemModel[]>(this.cartItems);
  private cartItems$ = this.cartItemsSource.asObservable();

  constructor(private localStorageService: LocalStorageService) {
  }

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
      map((items: CartItemModel[]) => items.reduce((acc, val) => acc + val.quantity, 0)),
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

    this.localStorageService.setItem(this.cartItemsKey, JSON.stringify(this.cartItems));
    this.cartItemsSource.next(this.cartItems);

    return of({success: true});
  }

  removeItem(cartItem: CartItemModel): Observable<any> {
    const idx = this.cartItems.findIndex(item => item.id === cartItem.id);

    this.cartItems.splice(idx, 1);

    this.localStorageService.setItem(this.cartItemsKey, JSON.stringify(this.cartItems));
    this.cartItemsSource.next(this.cartItems);

    return of({success: true});
  }

  public clearCart(): Observable<any> {
    this.cartItems = [];
    this.localStorageService.removeItem(this.cartItemsKey);
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

      this.localStorageService.setItem(this.cartItemsKey, JSON.stringify(this.cartItems));
      this.cartItemsSource.next(this.cartItems);

      return of({success: true});
    }
  }
}
