"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Code as Code2, Rocket, CircleCheck as CheckCircle2, Smartphone, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Project } from "@/lib/portfolio-data";


interface ProjectDetailDialogProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ProjectDetailDialog({ project, open, onOpenChange }: ProjectDetailDialogProps) {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center gap-2">
            <Rocket className="h-6 w-6 text-primary" />
            {project.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 pt-4">
          {project.longDescription && (
            <p className="text-muted-foreground leading-relaxed">
              {project.longDescription}
            </p>
          )}

          {project.images && project.images.length > 0 && (
            <div className="space-y-3">
              <h4 className="font-semibold">Project Images</h4>
              <Carousel className="">
                <CarouselContent>
                  {project.images.map((image, idx) => (
                    <CarouselItem key={idx}>
                      <div className="p-1">
                        <img
                          src={image}
                          alt={`${project.title} screenshot ${idx + 1}`}
                          className="rounded-lg border border-border w-full h-auto object-contain aspect-video"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            </div>
          )}

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <Code2 className="h-4 w-4 text-primary" />
              Tech Stack
            </div>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, techIndex) => (
                <Badge
                  key={techIndex}
                  variant="outline"
                  className="border-primary/30"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {project.features && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Key Features
              </div>
              <ul className="grid md:grid-cols-2 gap-2">
                {project.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="text-primary mt-0.5">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.deployment && (
            <div className="pt-4 border-t border-border/50">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Deployment:</span>{" "}
                {project.deployment}
              </p>
            </div>
          )}

          {(project.linkWeb || project.linkApps || project.linkProject) && (
            <div className="flex flex-wrap justify-end gap-3 pt-6 border-t border-border/50">
              {project.linkWeb && (
                <Button asChild variant="outline" size="sm" className="border-primary/30 hover:border-primary/50">
                  <a href={project.linkWeb} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Website
                  </a>
                </Button>
              )}
              {project.linkApps && (
                <Button asChild variant="outline" size="sm" className="border-primary/30 hover:border-primary/50">
                  <a href={project.linkApps} target="_blank" rel="noopener noreferrer">
                    <Smartphone className="mr-2 h-4 w-4" />
                    Apps
                  </a>
                </Button>
              )}
              {project.linkProject && (
                <Button asChild variant="outline" size="sm" className="border-primary/30 hover:border-primary/50">
                  <a href={project.linkProject} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Repository
                  </a>
                </Button>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
