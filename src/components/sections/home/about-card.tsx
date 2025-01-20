"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";
import { MySkills } from "@/constants/my-skills";
import SocialLinks from "@/components/social-links";
const AboutCard = () => {
  //
  const t = useTranslations();

  //
  return (
    <Card className="max-w-4xl mx-auto backdrop-blur-lg bg-black/25 border-none shadow-lg">
      <CardContent className="p-6 sm:p-10">
        <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start">
          <div className="w-60 h-60 relative bg-gray-300 rounded-full overflow-hidden shadow-lg ">      
            <Image
              src="/images/1.webp"
              alt="Donald AKOGBETO"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <span className="text-3xl font-bold mb-2">
                {t("name")}
                </span>
            <p className="text-xl text-primary mb-4">
              {t("my_title")}
            </p>
            <p className="text-foreground/20 text-justify mb-6">
              {t("my_description")}
            </p>
            <div className="mb-6">
              <h3 className="text-xl underline font-normale mb-2">
              {t("skills_title")}
              </h3>
              <div className="flex flex-wrap gap-2">
                {MySkills.map((skill, i) => (
                  <Badge
                    key={i}
                    variant="secondary"
                    className="flex items-center justify-center gap-1"
                  >
                    <Image
                      src={skill.image}
                      width={20}
                      height={20}
                      alt={skill.name}
                    />
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="w-full justify-center items-center">
              <SocialLinks />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AboutCard;
