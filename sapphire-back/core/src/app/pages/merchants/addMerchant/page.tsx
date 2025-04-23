"use client";

import DefaultButton from "@/app/components/buttons/DefaultButton";
import Footer from "@/app/components/footer";
import AdminForm from "@/app/components/form/AdminForm";
import CompanyForm from "@/app/components/form/CompanyForm";
import MerchantForm from "@/app/components/form/MerchantForm";
import Header from "@/app/components/header";
import MainWrapper from "@/app/components/main/MainWrapper";
import Sidebar from "@/app/components/Sidebar";
import useSyncMerchantWithUrl from "@/app/hooks/useSyncMerchantWithUrl"; // Hook to sync merchant with URL
import { useMerchantStore } from "@/app/stores/useMerchantStore";
import {
  AdminFormData,
  CompanyFormData,
  MerchFormData,
} from "@/types/formInputs";
import { PAGES } from "@/utils/linkPaths";
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
  const [step, setStep] = useState<0 | 1 | 2>(0); // 0: Company, 1: Merchant, 2: Admin
  const [merchantData, setMerchantData] = useState({
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
  });
  const [companyData, setCompanyData] = useState({
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
  });

  const [adminData, setAdminData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    userName: "",
    phoneNumber: "",
    password: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  });

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

  const handleNext = () => {
    if (step < 2) {
      const nextStep = (step + 1) as 0 | 1 | 2;
      setStep(nextStep);
      window.history.pushState({ step: nextStep }, "step", `#step-${nextStep}`);
    }
  };

  // React.useEffect(() => {
  //   const handlePopState = (event: PopStateEvent) => {
  //     const stepFromUrl = Number(window.location.hash.replace("#step-", ""));
  //     if (!isNaN(stepFromUrl)) {
  //       setStep(stepFromUrl as 0 | 1 | 2);
  //     }
  //   };

  //   window.addEventListener("popstate", handlePopState);
  //   return () => window.removeEventListener("popstate", handlePopState);
  // }, []);

  const handleBack = () => {
    if (step > 0) setStep((prev) => (prev - 1) as 0 | 1 | 2);
  };

  const handleSubmitAll = () => {
    const finalData = {
      company: companyData,
      merchant: merchantData,
      admin: adminData,
    };

    console.log("Submitting full data:", finalData);
  };

  const handleSubmitCompany = () => {
    console.log("Submitting company data:", companyData);
  };
  const handleSubmitMerchant = () => {
    console.log("Submitting merchant data:", merchantData);
  };
  const handleSubmitAdmin = () => {
    console.log("Submitting admin data:", adminData);
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
          <div className="flex flex-col gap-6">
            {step === 0 && (
              <>
                <CompanyForm
                  companyformLabel={"Company details"}
                  companyformdata={companyData}
                  setCompanyFormData={
                    setCompanyData as (data: CompanyFormData) => void
                  }
                />
                <DefaultButton title="Next" onClick={handleNext} />
                <DefaultButton title="Back" onClick={handleSubmitCompany} />
              </>
            )}

            {step === 1 && (
              <>
                <MerchantForm
                  merchformLabel="Merchant details"
                  merchformdata={merchantData}
                  setMerchFormData={
                    setMerchantData as (data: MerchFormData) => void
                  }
                />
                <div className="flex flex-row justify-between items-center">
                  <DefaultButton title="Back" onClick={handleBack} />
                  <DefaultButton title="Back" onClick={handleSubmitMerchant} />
                  <DefaultButton title="Next" onClick={handleNext} />
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <AdminForm
                  adminformLabel="Admin details"
                  adminformdata={adminData}
                  setAdminFormData={
                    setAdminData as (data: AdminFormData) => void
                  }
                />
                <div className="flex flex-row justify-between items-center">
                  <DefaultButton title="Back" onClick={handleBack} />
                  <DefaultButton title="Back" onClick={handleSubmitAdmin} />
                  <DefaultButton title="Submit" onClick={handleSubmitAll} />
                </div>
              </>
            )}
          </div>
        </main>
      </div>

      <Footer />
    </MainWrapper>
  );
}
