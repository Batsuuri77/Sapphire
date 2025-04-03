// /c:/Users/kaluu/OneDrive/Code/Projects/Sapphire/sapphire-back/core/src/models/User/Admin.ts

export enum AdminRole {
  SUPER_ADMIN = "super_admin",
  MERCHANT = "merchant",
}

export interface Admin {
  id: string;
  name: string;
  email: string;
  password: string;
  role: AdminRole;
  createdAt: Date;
  updatedAt: Date;
}
