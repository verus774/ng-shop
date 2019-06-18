import {Injectable} from '@angular/core';

import {BehaviorSubject, Observable, of} from 'rxjs';

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
      '2018-10-20T09:05:05.035Z',
      ['tag1', 'tag2', 'tag3']
    ),
    new ProductModel(
      2,
      'Z Product 2',
      'some product description',
      CategoryModel.laptops,
      200,
      true,
      '2018-10-13T09:05:05.035',
      ['tag1', 'tag2', 'tag3']
    ),
    new ProductModel(
      3,
      'Product 3',
      'some product description',
      CategoryModel.mobile,
      500,
      false,
      '2018-06-30T09:05:05.035Z',
      ['tag1', 'tag2', 'tag3']
    ),
    new ProductModel(
      4,
      'A Product 3',
      'some product description',
      CategoryModel.mobile,
      300,
      true,
      '2018-06-30T09:05:05.035Z',
      ['tag1', 'tag2', 'tag3']
    )
  ];
  private id = 100;

  private productsSource = new BehaviorSubject<ProductModel[]>(this.products);
  private products$ = this.productsSource.asObservable();

  getProducts(): Observable<ProductModel[]> {
    return this.products$;
  }

  getProduct(id: number): Observable<ProductModel> {
    return of(this.products.find(product => product.id === id));
  }

  addProduct(product: ProductModel): Observable<any> {
    this.products.push({id: ++this.id, ...product});
    this.productsSource.next(this.products);

    return of({success: true});
  }

  updateProduct(product: ProductModel): Observable<any> {
    this.products = this.products.map((item: ProductModel)  => {
      if (product.id === item.id) {
        return {...item, ...product};
      }
      return item;
    });
    this.productsSource.next(this.products);

    return of({success: true});
  }
}
