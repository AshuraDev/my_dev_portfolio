import { useTranslations } from "next-intl";
import React from "react";
import ContactForm from "./contact-form";
import ContactInfos from "./contact-infos";

const Contact = () => {
  //
  const t = useTranslations();
  //
  return (
    <section id="contact">
      {/* title and sub title */}
      <div className="flex items-start flex-col gap-2">
        <h2>{t("contact_section.title")}</h2>
        <p className="sub-title">📞{t("contact_section.description")}📞</p>
      </div>
      <div className="mt-16 w-full  flex flex-col lg:flex-row items-center justify-center gap-5">
        {/* informations */}
        <ContactInfos />
        {/* contact form */}
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
