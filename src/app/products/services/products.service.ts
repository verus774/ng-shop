import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';

import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

import {ProductModel} from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private id = 100;
  private productsUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<ProductModel[]> {
    return this.http
      .get<ProductModel[]>(this.productsUrl)
      .pipe(catchError(this.handleObservableError));
  }

  getProduct(id: number): Observable<ProductModel> {
    const url = `${this.productsUrl}/${id}`;

    return this.http.get<ProductModel>(url)
      .pipe(
        catchError(this.handleObservableError)
      );
  }

  addProduct(product: ProductModel): Promise<ProductModel | any> {
    const body = JSON.stringify({id: ++this.id, ...product});
    const options = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http
      .post(this.productsUrl, body, options)
      .toPromise()
      .then(response => response as ProductModel)
      .catch(this.handlePromiseError);
  }

  updateProduct(product: ProductModel): Promise<ProductModel | any> {
    const url = `${this.productsUrl}/${product.id}`;
    const body = JSON.stringify(product);
    const options = {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
    };

    return this.http
      .put(url, body, options)
      .toPromise()
      .then(response => response as ProductModel)
      .catch(this.handlePromiseError);
  }

  private handlePromiseError(error: HttpErrorResponse): Promise<never> {
    console.error('An error occurred', error);
    return Promise.reject(error.message);
  }

  private handleObservableError(error: HttpErrorResponse): Observable<never> {
    console.error('An error occurred', error);
    return throwError(error);
  }
}
