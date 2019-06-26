import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

import {ProductModel} from '../../models/product.model';
import {IProductQuantity} from '../../models/iproduct-quantity.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {
  @Input() product: ProductModel;

  @Output() buyProduct = new EventEmitter<IProductQuantity>();
  @Output() goDetails = new EventEmitter<ProductModel>();

  quantity = 1;

  onBuyProduct(product: ProductModel, quantity: number): void {
    this.buyProduct.emit({product, quantity});
    this.quantity = 1;
  }

  onQuantityChange(evt: any): void {
    this.quantity = parseInt(evt.target.value, 10);
  }

  onGoDetailsClick(evt: Event, product: ProductModel): void {
    evt.preventDefault();
    this.goDetails.emit(product);
  }
}
