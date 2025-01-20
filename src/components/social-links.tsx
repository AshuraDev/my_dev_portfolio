"use client";

import { socialLinks } from "@/constants/social-links";

const SocialLinks = () => {
  return (
    <div className="flex gap-4">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
        >
          <div className={`flex items-center justify-center w-10 h-10 bg-card rounded-sm shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1`}>
            <div className="text-foreground group-hover:text-primary transition-colors duration-300">
              <link.icon className="w-5 h-5" />
            </div>
          </div>
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            <p className="text-xs font-medium text-foreground/10">{link.label}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
