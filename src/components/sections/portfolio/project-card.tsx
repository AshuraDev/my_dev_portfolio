import React from "react";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export function ProjectCard({
  title,
  description,
  image,
  technologies,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <div className="bg-card text-foreground rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl h-full flex flex-col">
      <div className="relative h-48 w-full overflow-hidden bg-slate-300">
        <Image
          src={image}
          alt={title}
          fill
          objectFit="cover"
          // className="transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-base md:text-lg lg:text-xl font-bold mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-sm md:text-base text-muted-foreground mb-4 line-clamp-3">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="flex items-center justify-center gap-1"
            >
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex gap-4 mt-auto">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-secondary-foreground hover:text-foreground transition-colors"
            >
              <Github size={20} />
              <span className="text-xs md:text-sm lg:text-base">Code</span>
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-secondary-foreground hover:text-foreground transition-colors"
            >
              <ExternalLink size={20} />
              <span className="text-xs md:text-sm lg:text-base">Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
