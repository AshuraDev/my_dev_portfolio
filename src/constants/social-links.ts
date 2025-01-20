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
    icon: Instagram,
    color: "#E4405F",
    href: "link",
    label: "Instagram",
    username: "username",
  },
  {
    icon: Linkedin,
    color: "#0077B5",
    href: "link",
    label: "LinkedIn",
    username: "username",
  },
  {
    icon: Facebook,
    color: "#1877F2",
    href: "link",
    label: "Facebook",
    username: "username",
  },
  {
    icon: Github,
    color: "#E4405F",
    href: "link",
    label: "GitHub",
    username: "username",
  },
];
