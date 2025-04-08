"use client";

import DefaultButton from "@/app/components/buttons/DefaultButton";
import Footer from "@/app/components/footer";
import FormInput from "@/app/components/form/inputs/FormInput";
import ImageInput from "@/app/components/form/inputs/ImageInput";
import Header from "@/app/components/header";
import MainWrapper from "@/app/components/mian/MainWrapper";
import Sidebar from "@/app/components/Sidebar";
import useSyncMerchantWithUrl from "@/app/hooks/useSyncMerchantWithUrl"; // Hook to sync merchant with URL
import { useMerchantStore } from "@/app/stores/useMerchantStore";
import { PAGES } from "@/app/utils/linkPaths";
import {
  ArrowsRightLeftIcon,
  BuildingStorefrontIcon,
  Cog8ToothIcon,
  ShoppingBagIcon,
  TruckIcon,
} from "@heroicons/react/24/solid";
import React, { useState } from "react";

export default function Dashboard() {
  const { merchantId } = useMerchantStore();
  const [email, setEmail] = useState("");
  // Sync Zustand state with URL and vice versa
  useSyncMerchantWithUrl();

  const navLinks = [
    { name: "Merchants", href: PAGES.merchants },
    { name: "Products", href: `${PAGES.products}?merchantId=${merchantId}` },
    { name: "Orders", href: `${PAGES.orders}?merchantId=${merchantId}` },
    {
      name: "Transactions",
      href: `${PAGES.transactions}?merchantId=${merchantId}`,
    },
  ];

  const navIcons = [
    { name: "Merchants", atr: <BuildingStorefrontIcon /> },
    { name: "Products", atr: <ShoppingBagIcon /> },
    { name: "Orders", atr: <TruckIcon /> },
    { name: "Transactions", atr: <ArrowsRightLeftIcon /> },
    { name: "Settings", atr: <Cog8ToothIcon /> },
  ];

  const handleInputChange = (e: { target: { value: unknown } }) => {
    setEmail(e.target.value as string);
    console.log(e.target.value);
  };

  return (
    <MainWrapper>
      <Header />

      <div className="flex flex-1 flex-row mt-17">
        <Sidebar links={navLinks} icons={navIcons} />
        <main className="flex-1 p-8">
          {merchantId ? (
            <div>
              <h1>Merchant ID: {merchantId}</h1>
              {/* Render merchant-specific data here */}
            </div>
          ) : (
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Add a new merchant
            </h2>
          )}
          <div className="flex flex-row gap-20 justify-between items-center">
            <div className="flex flex-col gap-4 max-w-full justify-center items-start">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Merchant details
              </h3>
              <ImageInput label={"Merchant logo"} url={""} images={[]} />
              <form className="gap-4 max-w-full grid grid-cols-2">
                <FormInput
                  label={"Company name"}
                  type="text"
                  name={"MerchantName"}
                  value={email}
                  onChange={handleInputChange}
                />
                <FormInput
                  label={"Email"}
                  placeholder={""}
                  type="email"
                  name={"MerchantEmail"}
                  value={email}
                  onChange={handleInputChange}
                />
                <FormInput
                  label={"Domain"}
                  type="url"
                  name={"MerchantEmail"}
                  value={email}
                  onChange={handleInputChange}
                />
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor={"MerchantDescription"}
                    className="text-sm font-bold text-gray-700 "
                  >
                    Description
                  </label>
                  <textarea
                    className="text-sm rounded-md py-1 px-2 shadow-2xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full h-30"
                    name={"MerchantDescription"}
                    value={email}
                    onChange={handleInputChange}
                  />
                </div>
                <FormInput
                  label={"Address"}
                  type="text"
                  name={"MerchantAddress"}
                  value={email}
                  onChange={handleInputChange}
                />
                <FormInput
                  label={"PhoneNumber"}
                  type="number"
                  name={"MerchantPhoneNumber"}
                  value={email}
                  onChange={handleInputChange}
                />
                <FormInput
                  label={"MobileNumber"}
                  type="number"
                  name={"MerchantMobileNumber"}
                  value={email}
                  onChange={handleInputChange}
                />
                <DefaultButton title={"Submit"} />
              </form>
            </div>
            <div className="flex flex-col gap-4 max-w-full justify-center items-start">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Merchant&apos;s admin details
              </h3>
              <ImageInput label={"Merchant logo"} url={""} images={[]} />
              <form className="gap-4 max-w-full grid grid-cols-2">
                <FormInput
                  label={"Company name"}
                  type="text"
                  name={"MerchantName"}
                  value={email}
                  onChange={handleInputChange}
                />
                <FormInput
                  label={"Email"}
                  placeholder={""}
                  type="email"
                  name={"MerchantEmail"}
                  value={email}
                  onChange={handleInputChange}
                />
                <FormInput
                  label={"Domain"}
                  type="url"
                  name={"MerchantEmail"}
                  value={email}
                  onChange={handleInputChange}
                />
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor={"MerchantDescription"}
                    className="text-sm font-bold text-gray-700 "
                  >
                    Description
                  </label>
                  <textarea
                    className="text-sm rounded-md py-1 px-2 shadow-2xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full h-30"
                    name={"MerchantDescription"}
                    value={email}
                    onChange={handleInputChange}
                  />
                </div>
                <FormInput
                  label={"Address"}
                  type="text"
                  name={"MerchantAddress"}
                  value={email}
                  onChange={handleInputChange}
                />
                <FormInput
                  label={"PhoneNumber"}
                  type="number"
                  name={"MerchantPhoneNumber"}
                  value={email}
                  onChange={handleInputChange}
                />
                <FormInput
                  label={"MobileNumber"}
                  type="number"
                  name={"MerchantMobileNumber"}
                  value={email}
                  onChange={handleInputChange}
                />
                <DefaultButton title={"Submit"} />
              </form>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </MainWrapper>
  );
}
