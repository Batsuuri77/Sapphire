"use client";

import Footer from "@/app/components/footer";
import FormInput from "@/app/components/form/inputs/FormInput";
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
            <div className="text-xl font-semibold text-gray-800 mb-4">
              Add a new merchant
            </div>
          )}
          <form className="gap-4 max-w-full grid grid-cols-2">
            <FormInput
              label={"Insert merchant's email"}
              placeholder={"email"}
              type="email"
              name={"MerchantEmail"}
              value={email}
              onChange={handleInputChange}
            />
            <FormInput
              label={"Insert merchant's email"}
              placeholder={"email"}
              type="email"
              name={"MerchantEmail"}
              value={email}
              onChange={handleInputChange}
            />
            <FormInput
              label={"Insert merchant's email"}
              placeholder={"email"}
              type="email"
              name={"MerchantEmail"}
              value={email}
              onChange={handleInputChange}
            />
          </form>
        </main>
      </div>

      <Footer />
    </MainWrapper>
  );
}
