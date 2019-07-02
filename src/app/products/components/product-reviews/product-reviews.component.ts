import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Subscription} from 'rxjs';

import {ProductsService} from '../../services/products.service';
import {ProductModel} from '../../models/product.model';

@Component({
  selector: 'app-product-reviews',
  templateUrl: './product-reviews.component.html',
  styleUrls: ['./product-reviews.component.css']
})
export class ProductReviewsComponent implements OnInit, OnDestroy {
  product: ProductModel;
  private sub: Subscription;

  constructor(private route: ActivatedRoute, private productsService: ProductsService) {
  }

  ngOnInit() {
    const id = +this.route.parent.snapshot.paramMap.get('productID');
    this.productsService.getProduct(id)
      .subscribe(product => this.product = product);
  }

  ngOnDestroy() {
    // а где же создается подписка? В коде выше ее надо сохранить.
    this.sub.unsubscribe();
  }

}
