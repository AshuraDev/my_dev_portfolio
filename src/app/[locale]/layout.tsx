import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import "../globals.css";
import Navigation from "@/components/navigation/navbar";
import AOSProvider from "@/components/aos-provider";
import ScrollProgressBar from "@/components/scroll-progress-bar";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Portfolio | Donald AKOGBETO",
  description: "Front-end and mobile Developer Portfolio",
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "fr" }];
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = await getMessages({ locale });
  } catch {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={`${roboto.className} dark`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <AOSProvider>
            {/* navBar */}
            <Navigation locale={locale} />
            <ScrollProgressBar/>
            <div className="w-full bg-fixed h-full pt-16 relative">
              {children}
            </div>
          </AOSProvider>
        </NextIntlClientProvider>
        {/* Footer */}
      </body>
    </html>
  );
}
