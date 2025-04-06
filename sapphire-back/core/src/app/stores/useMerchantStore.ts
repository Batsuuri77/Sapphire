import { create } from "zustand";

type MerchantStore = {
  merchantId: string | null;
  setMerchantId: (id: string) => void;
};

export const useMerchantStore = create<MerchantStore>((set) => ({
  merchantId: null,
  setMerchantId: (id) => set({ merchantId: id }),
}));
