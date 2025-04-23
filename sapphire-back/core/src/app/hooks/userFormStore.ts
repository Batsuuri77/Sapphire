// app/stores/useFormStore.ts or wherever you keep your Zustand stores
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import {
  AdminFormData,
  CompanyFormData,
  MerchFormData,
} from "@/types/formInputs";

interface FormStore {
  step: number;
  companyData: CompanyFormData;
  merchantData: MerchFormData;
  adminData: AdminFormData;
  setStep: (step: number) => void;
  setCompanyData: (data: CompanyFormData) => void;
  setMerchantData: (data: MerchFormData) => void;
  setAdminData: (data: AdminFormData) => void;
}

const defaultCompanyData: CompanyFormData = {
  name: "",
  email: "",
  taxId: "",
  phoneNumber: "",
  mobileNumber: "",
  country: "",
  state: "",
  city: "",
  strAddress: "",
  zipCode: "",
  createdAt: new Date(),
  updatedAt: new Date(),
};

const defaultMerchantData: MerchFormData = {
  logoImage: [],
  merchantName: "",
  merchantDomain: "",
  merchantType: "",
  merchantBio: "",
  merchantAddress: "",
  merchantPhoneNumber: "",
  merchantDescription: "",
  createdAt: new Date(),
  updatedAt: new Date(),
};

const defaultAdminData: AdminFormData = {
  firstName: "",
  lastName: "",
  email: "",
  userName: "",
  phoneNumber: "",
  password: "",
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const useFormStore = create<FormStore>()(
  persist(
    (set) => ({
      step: 0,
      companyData: defaultCompanyData,
      merchantData: defaultMerchantData,
      adminData: defaultAdminData,
      setStep: (step) => set({ step }),
      setCompanyData: (data) => set({ companyData: data }),
      setMerchantData: (data) => set({ merchantData: data }),
      setAdminData: (data) => set({ adminData: data }),
    }),
    {
      name: "form-storage", // LocalStorage key
      storage: createJSONStorage(() => localStorage), // Wrap localStorage with createJSONStorage
    }
  )
);
