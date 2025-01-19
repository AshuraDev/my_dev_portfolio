import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function Home() {
const t = useTranslations();

  return (
    <main className=" flex flex-col items-center justify-center gap-4 h-screen w-screen">
  <div className="flex items-center justify-center gap-4">
  <Button variant="default">Primary</Button>
  <Button variant="secondary">Secondary</Button>
  </div>
      <p>
       {t("greeting")}
      </p>
    </main>
  );
}
