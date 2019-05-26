import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

import {ProductModel} from '../../../products/models/product.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemComponent {
  @Input() product: ProductModel;
  @Output() private removeProduct = new EventEmitter<ProductModel>();

  onRemoveProduct(product: ProductModel): void {
    this.removeProduct.emit(product);
  }
}
