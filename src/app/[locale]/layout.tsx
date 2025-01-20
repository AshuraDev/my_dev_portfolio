import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "../globals.css";
import Navigation from "@/components/navigation/navbar";
// import ScrollProgressBar from "@/components/scroll-progress-bar";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Portfolio | Donald AKOGBETO",
  description: "Front-end and mobile Developer Portfolio",
};

type paramsType = Promise<{ locale: string }>;

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: paramsType;
}>) {
  const { locale } = await params;
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
