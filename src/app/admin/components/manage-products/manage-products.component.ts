import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

import {ProductModel} from '../../../products/models/product.model';
import {ProductsService} from '../../../products/services/products.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {
  products$: Observable<ProductModel[]>;

  constructor(private productsService: ProductsService) {
  }

  ngOnInit() {
    this.products$ = this.productsService.getProducts();
  }

}
