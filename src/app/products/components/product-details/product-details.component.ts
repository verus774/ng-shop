import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

import {switchMap} from 'rxjs/operators';

import {ProductsService} from '../../services/products.service';
import {ProductModel} from '../../models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: ProductModel;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap((params: Params) => this.productsService.getProduct(+params.get('productID'))))
      .subscribe(
        product => this.product = product,
        err => console.log(err)
      );
  }

  onGoBack(): void {
    this.router.navigate(['/products-list']);
  }

}
