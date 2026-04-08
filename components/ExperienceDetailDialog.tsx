"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Briefcase, ExternalLink, ChevronDown, ChevronUp, Smartphone, Github } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { projects } from "@/lib/portfolio-data";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface Experience {
  id: number;
  position: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  award?: string;
  achievements: string[];
}

interface ExperienceDetailDialogProps {
  experience: Experience | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ExperienceDetailDialog({ experience, open, onOpenChange }: ExperienceDetailDialogProps) {
  const [expandedProjects, setExpandedProjects] = useState<number[]>([]);

  if (!experience) return null;

  const relatedProjects = projects.filter(p => p.experienceId === experience.id);

  const toggleFeatures = (id: number) => {
    setExpandedProjects(prev =>
      prev.includes(id) ? prev.filter(pId => pId !== id) : [...prev, id]
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center gap-2">
            <Briefcase className="h-6 w-6 text-primary" />
            {experience.position} - {experience.company}
          </DialogTitle>
          <p className="text-sm text-muted-foreground">{experience.period}</p>
        </DialogHeader>

        <div className="space-y-6 pt-4">
          <div>
            <h4 className="font-semibold mb-3">Key Achievements</h4>
            <ul className="space-y-2">
              {experience.achievements.map((achievement, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-primary mt-1 shrink-0">•</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          {relatedProjects.length > 0 && (
            <div className="space-y-4">
              <h4 className="font-semibold">Projects Worked On</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {relatedProjects.map((project) => (
                  <Card key={project.id} className="border-primary/20">
                    <CardHeader>
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        {project.description}
                      </p>

                      {project.images && project.images.length > 0 && (
                        <Carousel className="w-full">
                          <CarouselContent>
                            {project.images.map((image, imgIdx) => (
                              <CarouselItem key={imgIdx}>
                                <div className="p-1">
                                  <img
                                    src={image}
                                    alt={`${project.title} screenshot ${imgIdx + 1}`}
                                    className="rounded-lg border border-border w-full h-auto object-contain aspect-video"
                                    referrerPolicy="no-referrer"
                                  />
                                </div>
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          {project.images.length > 1 && (
                            <>
                              <CarouselPrevious className="left-2" />
                              <CarouselNext className="right-2" />
                            </>
                          )}
                        </Carousel>
                      )}

                      <div className="flex flex-wrap gap-2">
                        {project.techStack.slice(0, 4).map((tech, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.techStack.length > 4 && (
                          <Badge variant="secondary" className="text-xs">
                            +{project.techStack.length - 4}
                          </Badge>
                        )}
                      </div>

                      {project.features && project.features.length > 0 && (
                        <div className="pt-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="p-0 h-auto font-medium text-foreground hover:bg-transparent"
                            onClick={() => toggleFeatures(project.id)}
                          >
                            Features
                            {expandedProjects.includes(project.id) ? (
                              <ChevronUp className="ml-1 h-3 w-3" />
                            ) : (
                              <ChevronDown className="ml-1 h-3 w-3" />
                            )}
                          </Button>

                          {expandedProjects.includes(project.id) && (
                            <ul className="space-y-1.5 pt-3">
                              {project.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                  <span className="text-primary mt-1 shrink-0">•</span>
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      )}

                      {(project.linkWeb || project.linkApps || project.linkProject) && (
                        <div className="flex flex-col gap-2 pt-2">
                          {project.linkWeb && (
                            <Button size="sm" variant="outline" asChild className="w-full border-primary/30">
                              <a href={project.linkWeb} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-2 h-3 w-3" />
                                Website
                              </a>
                            </Button>
                          )}
                          {project.linkApps && (
                            <Button size="sm" variant="outline" asChild className="w-full border-primary/30">
                              <a href={project.linkApps} target="_blank" rel="noopener noreferrer">
                                <Smartphone className="mr-2 h-3 w-3" />
                                Apps
                              </a>
                            </Button>
                          )}
                          {project.linkProject && (
                            <Button size="sm" variant="outline" asChild className="w-full border-primary/30">
                              <a href={project.linkProject} target="_blank" rel="noopener noreferrer">
                                <Github className="mr-2 h-3 w-3" />
                                Repository
                              </a>
                            </Button>
                          )}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
