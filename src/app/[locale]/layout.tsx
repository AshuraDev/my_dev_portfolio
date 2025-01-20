import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "../globals.css";
import Navigation from "@/components/navigation/navbar";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
// import ScrollProgressBar from "@/components/scroll-progress-bar";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Portfolio | Donald AKOGBETO",
  description: "Front-end and mobile Developer Portfolio",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const header = headers();
  const localeHeader = (await header).get("x-next-intl-locale");
  if (localeHeader === null) {
    notFound();
  }
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={`${roboto.className} dark`}>
        <NextIntlClientProvider messages={messages}>
          {/* navBar */}
          <Navigation locale={locale} />
          {/* <ScrollProgressBar/> */}
          <div className="w-full bg-fixed h-full pt-16 relative">
            {children}
          </div>
        </NextIntlClientProvider>
        {/* Footer */}
      </body>
    </html>
  );
}
