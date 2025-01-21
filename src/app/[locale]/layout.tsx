import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import "../globals.css";
import Navigation from "@/components/navigation/navbar";
import AOSProvider from "@/components/aos-provider";
import ScrollProgressBar from "@/components/scroll-progress-bar";
import Footer from "@/components/footer/footer";
import { AnimatedBlobs } from "@/components/animated-blobs";
import { Toaster } from "@/components/ui/toaster";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Portfolio | Donald AKOGBETO",
  description: "Front-end and mobile Developer Portfolio",
};

type Params = Promise<{ locale: string }>;

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Params;
}) {
  const { locale } = await params;
  let messages;
  try {
    messages = await getMessages({ locale });
  } catch {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={`${roboto.className} dark relative min-h-screen overflow-x-hidden`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <AOSProvider>
            <AnimatedBlobs />
            <Navigation locale={locale} />
            <ScrollProgressBar />
            <div className="w-full h-full pt-16">{children}</div>
            <Footer />
            <Toaster />
          </AOSProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
