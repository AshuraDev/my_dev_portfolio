import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();

  return (
    <main className=" flex flex-col items-center justify-center gap-4">
      <div className="flex items-center justify-center gap-4 w-full min-h-screen">
        <Button variant="default">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <p>{t("greeting")}</p>
      </div>

      <section>1</section>
      <section>2</section>
      <section>3</section>
      <section id="portfolio">P</section>
      <section>
        4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente est
        explicabo possimus eveniet? At tenetur laborum sit error doloribus a
        natus, sunt aut quis omnis tempora blanditiis excepturi temporibus
        magni.
      </section>
      <section>5</section>
      <section>6</section>
      <section id="contact">C</section>
    </main>
  );
}
