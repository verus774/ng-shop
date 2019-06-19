import {ProductModel} from '../../../products/models/product.model';
import {CategoryModel} from '../../../products/models/category.model';

export interface ProductsState {
  data: ReadonlyArray<ProductModel>;
}

export const initialProductsState: ProductsState = {
  data: [
    new ProductModel(1, 'Product 1', 'some product description', CategoryModel.mobile, 100, true),
    new ProductModel(2, 'Product 2', 'some product description', CategoryModel.laptops, 200, false),
    new ProductModel(3, 'Product 3', 'some product description', CategoryModel.ebooks, 300, true)
  ]
};
