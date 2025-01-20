"use client";

import { useTranslations } from "next-intl";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const TypeWriterText = () => {
  const t = useTranslations();
  return (
    <p
      className="flex items-center text-2xl font-bold mt-2"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {
        <Typewriter
          words={[`${t("frontDev")}`, `${t("mobileDev")}`]}
          loop={false}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      }
    </p>
  );
};

export default TypeWriterText;
