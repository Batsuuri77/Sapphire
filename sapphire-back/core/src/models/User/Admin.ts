export enum AdminRole {
  SUPER_ADMIN = "super_admin",
  MERCHANT = "merchant",
}

export interface AdminLogin {
  id: string;
  firstName: string;
  lastName: string;
  userName: string;
  phoneNumber: number;
  mobileNumber?: number;
  address: string;
  email: string;
  password: string;
  role: AdminRole;
  createdAt: Date;
  updatedAt: Date;
}
