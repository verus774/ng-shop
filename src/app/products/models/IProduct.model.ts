import {CategoryModel} from './category.model';

export interface IProductModel {
  id: number;
  name: string;
  description: string;
  category: CategoryModel;
  price: number;
  isAvailable?: boolean;
  tags?: string[];
}
