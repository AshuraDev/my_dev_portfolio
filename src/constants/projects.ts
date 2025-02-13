import { useTranslations } from "next-intl";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const useProjects = (): Project[] => {
  const t = useTranslations();

  return [
    {
      title: t("projectsList.nft_landing_page.title"),
      description: t("projectsList.nft_landing_page.description"),
      image: "/images/mon_projet_1.webp",
      technologies: ["Next.js", "Tailwind CSS", "Shadcn UI"],
      githubUrl: "https://github.com/AshuraDev/-figma-to-code-ed2-week1",
      liveUrl: "https://figma-to-code-ed2-week1-five.vercel.app/",
    },
    {
      title: t("projectsList.clothing_brand_ecommerce.title"),
      description: t("projectsList.clothing_brand_ecommerce.description"),
      image: "/images/mon_projet_2.webp",
      technologies: ["Next.js", "Typescript", "Tailwind CSS", "Shadcn UI"],
      githubUrl: "https://github.com/AshuraDev/figma-to-code-ed2-week2",
      liveUrl: "https://figma-to-code-ed2-week2-nu.vercel.app/",
    },
    {
      title: t("projectsList.doctor_booking_platform.title"),
      description: t("projectsList.doctor_booking_platform.description"),
      image: "/images/mon_projet_3.webp",
      technologies: ["Next.js", "Typescript", "Tailwind CSS"],
      githubUrl: "", //https://github.com/SergeCodeur/figma-to-code-ed2-week4
      liveUrl: "https://doc-appointment-platform.vercel.app/",
    },
    {
      title: t("projectsList.authentification_with_nextauth.title"),
      description: t("projectsList.authentification_with_nextauth.description"),
      image: "/images/mon_projet_5.webp",
      technologies: [
        "Next.js",
        "Typescript",
        "Prisma",
        "AuthJs",
        "Tailwind CSS",
        "Shadcn UI",
      ],
      githubUrl: "https://github.com/AshuraDev/next-auth",
      liveUrl: "https://auth-system-mocha-three.vercel.app/",
    },
    {
      title: t("projectsList.project_5_store_pilot.title"),
      description: t("projectsList.project_5_store_pilot.description"),
      image: "/images/dash-ecommerce.webp",
      technologies: [
        "Next.js",
        "Typescript",
        "Tailwind CSS",
        "Shadcn UI",
        "Prisma",
        "Mysql",
        "Stripe",
      ],
      githubUrl: "",
      liveUrl: "https://admin-store-pilot.vercel.app/",
    },
    {
      title: t("projectsList.project_6_my_store.title"),
      description: t("projectsList.project_6_my_store.description"),
      image: "/images/my-store.webp",
      technologies: ["Next.js", "Typescript", "Tailwind CSS", "Stripe"],
      githubUrl: "https://github.com/AshuraDev/ecommerce-store",
      liveUrl: "https://my-store-demo-coral.vercel.app/",
    },
  ];
};
