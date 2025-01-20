import { Button } from "@/components/ui/button";
import { LucideArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import TypeWriterText from "./typeWriter-text";
import SocialLinks from "@/components/social-links";

const Intro = () => {
  const t = useTranslations();
  return (
    <div
      id="home"
      className="w-full flex flex-col items-center md:flex-row justify-center py-4 gap-5 default-padding"
    >
      {/* Introduction info */}
      <div className="flex flex-col justify-center w-full">
        <span className="flex items-center text-3xl font-bold">
          {t("greeting")}
        </span>
        <h1 className="text-5xl font-extrabold mt-4">
          {t("intro")} <span className="gradient-text">{t("name")}</span>,
        </h1>
        <TypeWriterText />
        <p className="mt-6 text-sm md:text-base">{t("headline")}</p>
        <div className="mt-6">
          <SocialLinks />
        </div>
        <div className="flex space-x-4 mt-7">
          <Link href="#about">
            <Button variant={"default"}>
              {t("discover_more")} <LucideArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Button variant={"secondary"}>
            <Link href="#portfolio">{t("view_portfolio")}</Link>
          </Button>
        </div>
      </div>
      {/* Coding illustration image */}
      <div className="h-[350px] md:h-[450px] lg:h-[550px] w-full relative">
        <Image
          src={"/images/code3.webp"}
          alt={"Illustration"}
          fill
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Intro;
