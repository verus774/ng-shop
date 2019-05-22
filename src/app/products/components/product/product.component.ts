import {Component, OnInit} from '@angular/core';
import {Categories} from '../../models/categories.enum';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  name = 'Product 1';
  description = 'some product description';
  price = 100;
  isAvailable = false;
  tags: string[] = ['tag1', 'tag2', 'tag3'];
  category: Categories = Categories.ebooks;

  constructor() {
  }

  ngOnInit() {
  }

  onBuy() {
    console.log('product was added');
  }
}
