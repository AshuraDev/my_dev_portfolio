import SocialLinks from "@/components/social-links";
import { contactInfo } from "@/constants/my-contacts-infos";
import React from "react";

const ContactInfos = () => {
  return (
    <div
      className="w-full mx-auto  blur-effect p-8 rounded-lg max-w-lg shadow-lg"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="space-y-4">
        {contactInfo.map((info, index) => (
          <div key={index} className="flex items-center space-x-4">
            <info.icon className="text-primary" size={24} />
            <div>
              <h3 className="font-semibold">{info.type}</h3>
              <p className="text-muted-foreground text-sm md:text-base">
                {info.value}
              </p>
            </div>
          </div>
        ))}
        <SocialLinks />
      </div>
    </div>
  );
};

export default ContactInfos;
