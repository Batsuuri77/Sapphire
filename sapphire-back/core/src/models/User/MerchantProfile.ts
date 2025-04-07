export interface MerchantProfile {
  id: string;
  adminId: string;
  companyName: string;
  logoUrl: string;
  domain: string;
  description?: string;
  address: string;
  phoneNumber: string;
  mobileNumber?: string;
  createdAt: Date;
  updatedAt: Date;
}
