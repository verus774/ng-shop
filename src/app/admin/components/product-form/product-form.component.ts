import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {ProductModel} from '../../../products/models/product.model';
import {ProductsService} from '../../../products/services/products.service';
import {pluck} from 'rxjs/operators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product: ProductModel;

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.route.data.pipe(pluck('product')).subscribe((product: ProductModel) => {
      this.product = {...product};
    });
  }

  onSaveProduct() {
    const product = { ...this.product };
    const method = product.id ? 'updateProduct' : 'addProduct';

    this.productsService[method](product).subscribe(
        () => this.onGoBack()
      );
  }

  onGoBack(): void {
    this.router.navigate(['admin/products']);
  }
}
