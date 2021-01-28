import { RoleModel } from '@core/model/role.model';

export interface SessionUserModel {
  id?: string | null;
  role?: RoleModel;
}
