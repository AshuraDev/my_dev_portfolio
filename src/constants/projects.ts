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
      githubUrl: "https://github.com/username/project1",
      liveUrl: "https://project1.com",
    },
    {
      title: t("projectsList.clothing_brand_ecommerce.title"),
      description: t("projectsList.clothing_brand_ecommerce.description"),
      image: "/images/mon_projet_2.webp",
      technologies: ["React", "Redux", "Node.js"],
      githubUrl: "https://github.com/username/project2",
      liveUrl: "https://project2.com",
    },
    {
      title: t("projectsList.doctor_booking_platform.title"),
      description: t("projectsList.doctor_booking_platform.description"),
      image: "/images/mon_projet_3.webp",
      technologies: ["Vue.js", "Vuetify", "Firebase"],
      githubUrl: "https://github.com/username/project3",
      liveUrl: "https://project3.com",
    },
    {
      title: t("projectsList.equipment_ecommerce.title"),
      description: t("projectsList.equipment_ecommerce.description"),
      image: "/images/mon_projet_4.webp",
      technologies: ["Angular", "TypeScript", "Express"],
      githubUrl: "https://github.com/username/project4",
      liveUrl: "https://project4.com",
    },
  ];
};
