"use client";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useMerchantStore } from "@/app/stores/useMerchantStore";

const useSyncMerchantWithUrl = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { merchantId, setMerchantId } = useMerchantStore();

  const urlMerchantId = searchParams.get("merchantId");

  // Sync URL -> Zustand
  useEffect(() => {
    if (urlMerchantId && urlMerchantId !== merchantId) {
      setMerchantId(urlMerchantId);
    }
  }, [urlMerchantId, merchantId, setMerchantId]);

  // Sync Zustand -> URL
  useEffect(() => {
    if (!merchantId) return;
    const newUrl = new URL(window.location.href);
    newUrl.searchParams.set("merchantId", merchantId);
    router.push(newUrl.toString());
  }, [merchantId, router]);
};

export default useSyncMerchantWithUrl;
