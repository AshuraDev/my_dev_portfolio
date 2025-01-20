import {
    LucideIcon,
    Instagram,
    Linkedin,
    Facebook,
    Github,
  } from "lucide-react";
  
  interface SocialLink {
    name: string;
    href: string;
    icon: LucideIcon;
    color: string;
  }
  
  export const socialLinks: SocialLink[] = [
    {
      name: "Instagram",
      href: "",
      icon: Instagram,
      color: "#E4405F",
    },
    {
      name: "LinkedIn",
      href: "",
      icon: Linkedin,
      color: "#0077B5", 
    },
    {
      name: "Facebook",
      href: "",
      icon: Facebook,
      color: "#1877F2",
    },
    {
      name: "GitHub",
      href: "",
      icon: Github,
      color: "#333", 
    },
  ];