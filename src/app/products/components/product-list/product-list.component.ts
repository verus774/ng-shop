import {Component, OnInit} from '@angular/core';

import {Observable} from 'rxjs';

import {ProductsService} from '../../products.service';
import {ProductModel} from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products$: Observable<ProductModel[]>;

  constructor(private productsService: ProductsService) {
  }

  ngOnInit() {
    this.products$ = this.productsService.getProducts();
  }

}
