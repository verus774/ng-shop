import {IProductModel} from '../../products/models/iproduct.model';

export interface ICartItemModel extends IProductModel {
  quantity?: number;
}
