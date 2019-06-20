import {Injectable} from '@angular/core';

import {Observable, of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';

import {ProductsService} from '../../../products/services/products.service';
import * as ProductsActions from './products.actions';

@Injectable()
export class ProductsEffects {

  constructor(
    private actions$: Actions,
    private productsService: ProductsService,
  ) {
  }

  @Effect()
  getProducts$: Observable<Action> = this.actions$.pipe(
    ofType<ProductsActions.GetProducts>(ProductsActions.ProductsActionTypes.GET_PRODUCTS),
    switchMap((action: ProductsActions.GetProducts) =>
      this.productsService
        .getProducts()
        .pipe(
          map(products => new ProductsActions.GetProductsSuccess(products)),
          catchError(err => of(new ProductsActions.GetProductsError(err)))
        )
    )
  );

}
