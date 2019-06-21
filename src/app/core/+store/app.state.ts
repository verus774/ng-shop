import {ProductsState} from './products';
import {OrdersState} from './orders';


export interface AppState {
  products: ProductsState;
  orders: OrdersState;
}
