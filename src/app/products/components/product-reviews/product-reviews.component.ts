import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {ProductsService} from '../../services/products.service';
import {ProductModel} from '../../models/product.model';

@Component({
  selector: 'app-product-reviews',
  templateUrl: './product-reviews.component.html',
  styleUrls: ['./product-reviews.component.css']
})
export class ProductReviewsComponent implements OnInit {
  product: ProductModel;

  constructor(private route: ActivatedRoute, private productsService: ProductsService) {
  }

  ngOnInit() {
    const id = +this.route.parent.snapshot.paramMap.get('productID');
    // без отписки?
    this.productsService.getProduct(id)
      .subscribe(product => this.product = product);
  }

}
