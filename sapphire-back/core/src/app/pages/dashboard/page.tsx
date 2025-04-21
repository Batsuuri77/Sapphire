"use client";

import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import MainWrapper from "@/app/components/main/MainWrapper";
import Sidebar from "@/app/components/Sidebar";
import useSyncMerchantWithUrl from "@/app/hooks/useSyncMerchantWithUrl"; // Hook to sync merchant with URL
import { useMerchantStore } from "@/app/stores/useMerchantStore";
import { PAGES } from "@/utils/linkPaths";
import {
  ArrowsRightLeftIcon,
  BuildingStorefrontIcon,
  Cog8ToothIcon,
  ShoppingBagIcon,
  TruckIcon,
} from "@heroicons/react/24/solid";
import React from "react";

export default function Dashboard() {
  const { merchantId } = useMerchantStore();

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
            <p>Select a merchant</p>
          )}
        </main>
      </div>

      <Footer />
    </MainWrapper>
  );
}
