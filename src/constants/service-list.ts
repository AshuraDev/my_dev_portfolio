import { useTranslations } from "next-intl";


interface Service {
  title: string;
  image: string;
  description: string;
}

export const useServices = (): Service[] => {
  const t  = useTranslations();

  return [
    {
      title: t("servicesList.frontend_development.title"),
      image: "/images/code1.webp",
      description: t("servicesList.frontend_development.description"),
    },
    {
      title: t("servicesList.mobile_development.title"),
      image: "/images/mobile.webp",
      description: t("servicesList.mobile_development.description"),
    },
  ];
};