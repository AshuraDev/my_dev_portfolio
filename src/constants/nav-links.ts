import { useTranslations } from "next-intl";

export const useNavLinks = () => {
    const  t  = useTranslations();
  
    return [
      {
        name: t('home'),
        href: "#home",
      },
      {
        name: t('services'),
        href: "#services",
      },
      {
        name: t('portfolio'),
        href: "#portfolio",
      },
      {
        name: t('contact'),
        href: "#contact",
      },
    ];
  };