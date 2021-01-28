interface Role {
  id: string;
  roleName: string;
  status: boolean;
}

interface Product {
  id: string;
  displayName: string;
  barcode: string;
  // categories?: Category[];
}

export interface UserModel {
  id?: string | null;
  role: Role;
  fullName?: string | null;
  username?: string | null;
  phoneNumber?: string | null;
  shopName?: string | null;
  status: boolean;
  products?: Product[]
}


