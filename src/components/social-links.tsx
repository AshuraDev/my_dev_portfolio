"use client";

import { socialLinks } from "@/constants/social-links";

const SocialLinks = () => {
  return (
    <div className="flex gap-4">
      {socialLinks.map((link, index) => (
        <div
          key={index}
          className="flex items-center justify-center text-primary p-1 border-primary border-2 hover:border-1 hover:border-gray-100 hover:text-foreground bg-transparent rounded-sm cursor-pointer"
          style={{
            transition: "background-color 0.3s",
          }}
          onMouseEnter={(e) => {
            (
              e.currentTarget as HTMLElement
            ).style.backgroundColor = `${link.color}`;
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor =
              "transparent";
          }}
        >
          <link.icon className="w-5 h-5" />
        </div>
      ))}
    </div>
  );
};

export default SocialLinks;
