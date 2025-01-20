"use client";

import React from "react";
import { Button } from "../ui/button";
import { LucideGlobe } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const LanguageButton = ({ locale }: { locale: string }) => {
  const pathname = usePathname();
  const router = useRouter();

  // Fonction pour basculer la langue entre "fr" et "en"
  const toggleLanguage = () => {
    const newLanguage = locale === "fr" ? "en" : "fr";
    const path = pathname.split("/").slice(2).join("/");
    router.push(`/${newLanguage}/${path}`);
  };

  return (
    <Button onClick={toggleLanguage}>
      <LucideGlobe className="w-4 h-4" />
      {locale}
    </Button>
  );
};

export default LanguageButton;
