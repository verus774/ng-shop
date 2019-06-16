import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';

import {Observable, of} from 'rxjs';
import {catchError, map, take} from 'rxjs/operators';

import {ProductModel} from '../../products/models/product.model';
import {ProductsService} from '../../products/services/products.service';

@Injectable()
export class ProductResolveGuard implements Resolve<ProductModel> {
  constructor(
    private productsService: ProductsService,
    private router: Router,
  ) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<ProductModel | null> {
    const id = +route.paramMap.get('productID');

    return this.productsService.getProduct(id).pipe(
      map((product: ProductModel) => {
        if (product) {
          return product;
        } else {
          this.router.navigate(['admin/products']);
          return null;
        }
      }),
      take(1),
      catchError(() => {
        this.router.navigate(['admin/products']);
        return of(null);
      })
    );
  }
}
