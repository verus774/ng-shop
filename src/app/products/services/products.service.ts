import {Injectable} from '@angular/core';

import {Observable, of} from 'rxjs';

import {ProductModel} from '../models/product.model';
import {CategoryModel} from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products = [
    new ProductModel(
      1,
      'Product 1',
      'some product description',
      CategoryModel.ebooks,
      100,
      true,
      ['tag1', 'tag2', 'tag3']
    ),
    new ProductModel(
      2,
      'Product 2',
      'some product description',
      CategoryModel.laptops,
      200,
      true,
      ['tag1', 'tag2', 'tag3']
    ),
    new ProductModel(
      3,
      'Product 3',
      'some product description',
      CategoryModel.mobile,
      500,
      false,
      ['tag1', 'tag2', 'tag3']
    )
  ];

  getProducts(): Observable<ProductModel[]> {
    return of(this.products);
  }
}
