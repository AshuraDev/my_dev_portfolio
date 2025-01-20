import React from "react";
import { useTranslations } from "next-intl";
import { ProjectCard } from "./project-card";
import { useProjects } from "@/constants/projects";

const Portfolio = () => {
  //
  const projects = useProjects();
  const t = useTranslations();
  //
  return (
    <section id="portfolio" className="relative">
        {/* <div className="absolute inset-0 w-full bg-primary h-[400px] -z-10"></div> */}
      {/* title and sub title */}
      <div className="flex items-start flex-col gap-2">
        <h2>{t("projectsList.title")}</h2>
        <p className="sub-title">🚀{t("projectsList.description")}🚀</p>
      </div>
      {/* Project List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            technologies={project.technologies}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
