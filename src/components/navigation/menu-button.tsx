"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

interface menuProps {
  status: boolean;
  action: () => void;
}

const MenuButton = ({ status, action }: menuProps) => {
  //
  const t = useTranslations();

  //
  return (
    <div className="p-0 min-h-10 min-w-10 lg:hidden">
      <Image
        src={status ? "/icons/cross.svg" : "/icons/menu.svg"}
        alt={status ? t("close_menu") : t("open_menu")}
        height={40}
        width={40}
        style={{ objectFit: "contain" }}
        onClick={action}
      />
    </div>
  );
};

export default MenuButton;
