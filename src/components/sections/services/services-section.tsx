import { useServices } from "@/constants/service-list";
import { useTranslations } from "next-intl";
import React from "react";
import ServiceCard from "./services-card";

const Services = () => {
  const services = useServices();
  const t = useTranslations();
  return (
    <section id="services">
      {/* title and subtitle */}
      <div className="flex items-start flex-col gap-2">
        <h2>{t("services_section.title")}</h2>
        <p className="sub-title">✨{t("services_section.subtitle")}✨</p>
      </div>
      {/* service list */}
      <div className="w-full mt-16 flex items-center justify-center flex-col md:flex-row gap-10">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            imageUrl={service.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
