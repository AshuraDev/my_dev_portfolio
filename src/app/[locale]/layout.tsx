import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "../globals.css";
// import ScrollProgressBar from "@/components/scroll-progress-bar";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Portfolio - Donald AKOGBETO",
  description: "Frontend and mobile Developer Portfolio",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={`${roboto.className} dark`}>
        <NextIntlClientProvider messages={messages}>
          {/* navBar */}
          {/* <ScrollProgressBar/> */}
          <div className="w-screen h-full relative">
            <div className="mesh_animation1 w-[500px] h-[200px] blur-[90px] fixed bg-opacity-50  bg-sky-800 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "></div>
            <div className="mesh_animation2 w-[300px] h-[200px] blur-[90px] fixed bg-opacity-50  bg-pink-400 rounded-full top-0 right-0 "></div>
            <div className="mesh_animation3 w-[300px] h-[200px] blur-[90px] fixed bg-opacity-50  bg-green-400 rounded-full "></div>
            {children}
          </div>
        </NextIntlClientProvider>
        {/* Footer */}
      </body>
    </html>
  );
}
