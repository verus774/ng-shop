import {Component, OnInit} from '@angular/core';

import {CategoryModel} from '../../models/category.model';
import {ProductModel} from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product = new ProductModel(
    1,
    'Product 1',
    'some product description',
    CategoryModel.ebooks,
    100,
    false,
    ['tag1', 'tag2', 'tag3'],
  );

  constructor() {
  }

  ngOnInit() {
  }

  onBuy() {
    console.log('product was added');
  }
}
