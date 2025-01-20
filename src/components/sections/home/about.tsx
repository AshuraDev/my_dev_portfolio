import { useTranslations } from "next-intl";
import React from "react";
import AboutCard from "./about-card";

const About = () => {
  const t = useTranslations();
  return (
    <section id="about" className="">
      {/* section title */}
      <h2>{t("about_me")}</h2>
      <div className="w-full mt-16">
        <AboutCard />
      </div>
    </section>
  );
};

export default About;
