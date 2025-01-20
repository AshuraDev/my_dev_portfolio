import HomeSection from "@/components/sections/home/home-section";
import Portfolio from "@/components/sections/portfolio/portfolio-section";
import Services from "@/components/sections/services/services-section";

export default function Home() {
  return (
    <main className="">
      <HomeSection />
      <Services />
      <Portfolio />
    </main>
  );
}
