import { ProductModel } from '@core/model/product.model';
import { RoleModel } from '@core/model/role.model';

export interface UserModel {
  id: string;
  role: RoleModel;
  fullName?: string | null;
  username?: string | null;
  phoneNumber?: string | null;
  shopName?: string | null;
  status: boolean;
  products?: ProductModel[];
}


