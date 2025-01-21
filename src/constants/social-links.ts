import {
  LucideIcon,
  Instagram,
  Linkedin,
  Facebook,
  Github,
} from "lucide-react";

interface SocialLink {
  icon: LucideIcon;
  color: string;
  href: string;
  label: string;
  username: string;
}

export const socialLinks: SocialLink[] = [
  {
    icon: Linkedin,
    color: "#0077B5",
    href: "https://www.linkedin.com/in/donald-akogbeto-aba040321/",
    label: "LinkedIn",
    username: "",
  },
  {
    icon: Github,
    color: "#E4405F",
    href: "https://github.com/AshuraDev/",
    label: "GitHub",
    username: "",
  },
  {
    icon: Instagram,
    color: "#E4405F",
    href: "https://www.instagram.com/donald_akgb",
    label: "Instagram",
    username: "",
  },
  {
    icon: Facebook,
    color: "#1877F2",
    href: "https://www.facebook.com/Donald.AKOGBETO",
    label: "Facebook",
    username: "",
  },
];
