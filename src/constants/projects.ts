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
      technologies: ["React", "Tailwind CSS", "Next.js"],
      githubUrl: "https://github.com/AshuraDev/-figma-to-code-ed2-week1",
      liveUrl: "https://figma-to-code-ed2-week1-five.vercel.app/",
    },
    {
      title: t("projectsList.clothing_brand_ecommerce.title"),
      description: t("projectsList.clothing_brand_ecommerce.description"),
      image: "/images/mon_projet_2.webp",
      technologies: ["React", "Redux", "Node.js"],
      githubUrl: "https://github.com/AshuraDev/figma-to-code-ed2-week2",
      liveUrl: "https://figma-to-code-ed2-week2-nu.vercel.app/",
    },
    {
      title: t("projectsList.doctor_booking_platform.title"),
      description: t("projectsList.doctor_booking_platform.description"),
      image: "/images/mon_projet_3.webp",
      technologies: ["Vue.js", "Vuetify", "Firebase"],
      githubUrl: "", //https://github.com/SergeCodeur/figma-to-code-ed2-week4
      liveUrl: "https://doc-appointment-platform.vercel.app/",
    },
    {
      title: t("projectsList.equipment_ecommerce.title"),
      description: t("projectsList.equipment_ecommerce.description"),
      image: "/images/mon_projet_4.webp",
      technologies: ["Angular", "TypeScript", "Express"],
      githubUrl: "",
      liveUrl: "https://www.planetechsarlbenin.com/",
    },
  ];
};
