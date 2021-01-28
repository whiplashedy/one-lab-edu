import { CategoryModel } from '@core/model/category.model';

export interface ProductModel {
  id: string;
  name: string;
  barcode: string;
  categories?: CategoryModel[];
}
