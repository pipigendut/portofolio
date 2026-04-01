"use client";

import { useState } from "react";
import { experience } from "@/lib/portfolio-data";
import { Briefcase, MapPin, Calendar, Award, Info } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ExperienceDetailDialog from "@/components/ExperienceDetailDialog";

export default function Experience() {
  const [selectedExperience, setSelectedExperience] = useState<typeof experience[0] | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleViewDetails = (exp: typeof experience[0]) => {
    setSelectedExperience(exp);
    setDialogOpen(true);
  };

  return (
    <>
      <section id="experience" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Work Experience</h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            </div>

            <div className="relative">
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

              <div className="space-y-12">
                {experience.map((job, index) => (
                  <div
                    key={job.id}
                    className={`relative ${index % 2 === 0 ? "md:ml-auto md:pl-12" : "md:mr-auto md:pr-12"
                      } md:w-1/2`}
                  >
                    <div className="absolute left-0 md:left-auto md:right-auto top-6 w-4 h-4 rounded-full bg-primary border-4 border-background transform -translate-x-1.5 md:translate-x-0 md:left-1/2 md:-translate-x-1/2" />

                    <Card className="border-primary/20 bg-card/50 backdrop-blur hover:border-primary/40 transition-all ml-6 md:ml-0">
                      <CardHeader>
                        <div className="space-y-2">
                          <div className="flex items-start justify-between gap-2">
                            <CardTitle className="text-xl">{job.position}</CardTitle>
                            <div className="flex items-center gap-2 shrink-0">
                              {job.award && (
                                <Badge className="bg-primary/20 text-primary border-primary/40">
                                  <Award className="h-3 w-3 mr-1" />
                                  {job.award}
                                </Badge>
                              )}
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleViewDetails(job)}
                                className="h-8 w-8 p-0"
                              >
                                <Info className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Briefcase className="h-4 w-4" />
                            <span className="font-medium">{job.company}</span>
                          </div>
                          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              <span>{job.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              <span>{job.period}</span>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {job.achievements.map((achievement, achIndex) => (
                            <li
                              key={achIndex}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <span className="text-primary mt-1 shrink-0">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ExperienceDetailDialog
        experience={selectedExperience}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </>
  );
}
