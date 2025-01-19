import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
// import ScrollProgressBar from "@/components/scroll-progress-bar";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Portfolio - Donald AKOGBETO",
  description: "Frontend and mobile Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} dark`}>
        {/* navBar */}
        {/* <ScrollProgressBar/> */}
        <div className="w-screen h-full relative">
          <div className="mesh_animation w-[500px] h-[200px] blur-[90px] fixed bg-opacity-50  bg-sky-800 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "></div>
        <div className="mesh_animation w-[300px] h-[200px] blur-[90px] fixed bg-opacity-50  bg-pink-400 rounded-full top-0 right-0 "></div>
          {children}</div>
        {/* Footer */}
      </body>
    </html>
  );
}
