import { CategoryModel } from '@core/model/category.model';

export interface ProductModel {
  uid: string;
  name?: string;
  barcode?: string;
  categories?: CategoryModel[];
}
