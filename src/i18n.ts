import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

const locales = ["en", "fr"];

export default getRequestConfig(async({locale})=>{
    if (!locales.includes(locale as string)) notFound();

    return {
        locale,
        messages : (await import(`./languages/${locale}.json`)).default,
    }
})