"use client";

import { useState } from "react";
import { projects } from "@/lib/portfolio-data";
import { Info, Code as Code2, Rocket, CircleCheck as CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ProjectDetailDialog from "@/components/ProjectDetailDialog";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  const handleViewDetails = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setDialogOpen(true);
  };

  return (
    <>
      <section id="projects" className="py-20 bg-background/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Showcasing scalable applications built with modern technologies
              </p>
            </div>

            <div className="space-y-8">
              {featuredProjects.map((project, index) => (
                <Card
                  key={project.id}
                  className="border-primary/30 bg-card/50 backdrop-blur overflow-hidden hover:border-primary/50 transition-all"
                >
                  <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-2">
                          {index === 0 && (
                            <Badge className="bg-primary/20 text-primary border-primary/40">
                              Project Owner
                            </Badge>
                          )}
                        </div>
                        <CardTitle className="text-2xl flex items-center gap-2">
                          <Rocket className="h-6 w-6 text-primary" />
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-base">
                          {project.description}
                        </CardDescription>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleViewDetails(project)}
                        className="shrink-0"
                      >
                        <Info className="h-4 w-4 mr-2" />
                        Details
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-6">
                    {project.longDescription && (
                      <p className="text-muted-foreground leading-relaxed">
                        {project.longDescription}
                      </p>
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
                  </CardContent>
                </Card>
              ))}

              {otherProjects.length > 0 && (
                <>
                  <div className="pt-8">
                    <h3 className="text-2xl font-bold mb-6">Other Projects</h3>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {otherProjects.map((project) => (
                      <Card
                        key={project.id}
                        className="border-primary/20 bg-card/50 backdrop-blur hover:border-primary/40 transition-all hover:scale-105 duration-300"
                      >
                        <CardHeader>
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex-1 space-y-1.5">
                              <CardTitle className="text-lg">{project.title}</CardTitle>
                              <CardDescription>{project.description}</CardDescription>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleViewDetails(project)}
                              className="shrink-0 h-8 w-8 p-0"
                            >
                              <Info className="h-4 w-4" />
                            </Button>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.slice(0, 3).map((tech, techIndex) => (
                              <Badge
                                key={techIndex}
                                variant="secondary"
                                className="text-xs"
                              >
                                {tech}
                              </Badge>
                            ))}
                            {project.techStack.length > 3 && (
                              <Badge variant="secondary" className="text-xs">
                                +{project.techStack.length - 3}
                              </Badge>
                            )}
                          </div>
                          {project.features && project.features.length > 0 && (
                            <ul className="space-y-1">
                              {project.features.slice(0, 3).map((feature, idx) => (
                                <li
                                  key={idx}
                                  className="text-xs text-muted-foreground flex items-start gap-1"
                                >
                                  <span className="text-primary mt-0.5">•</span>
                                  <span className="line-clamp-1">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <ProjectDetailDialog
        project={selectedProject}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </>
  );
}
