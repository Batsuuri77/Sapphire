"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useMerchantStore } from "@/app/stores/useMerchantStore";

const useSyncMerchantWithUrl = () => {
  const [isClient, setIsClient] = useState(false);
  const router = typeof window !== "undefined" ? useRouter() : null; // Ensure useRouter is only called on the client
  const { merchantId, setMerchantId } = useMerchantStore();
  console.log("Is window defined?", typeof window !== "undefined");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsClient(true); // Mark as client-side after mount
    }
  }, []);
  useEffect(() => {
    if (!isClient || !router) return;
    // Sync merchantId from URL to Zustand store if it's available in the query
    if (router.query.merchantId && router.query.merchantId !== merchantId) {
      setMerchantId(router.query.merchantId as string);
    }
  }, [isClient, router?.query.merchantId, merchantId, setMerchantId]);

  useEffect(() => {
    // Sync the merchantId in the store with the URL
    if (merchantId && router) {
      router.push(
        {
          pathname: router.pathname,
          query: { merchantId },
        },
        undefined,
        { shallow: true }
      );
    }
  }, [merchantId, router, isClient]);
};

export default useSyncMerchantWithUrl;
