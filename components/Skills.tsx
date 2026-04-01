"use client";

import { skills } from "@/lib/portfolio-data";
import { Code, LayoutGrid as Layout, Database, Wrench, Network } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Skills() {
  const skillCategories = [
    {
      title: "Backend",
      icon: Code,
      skills: skills.backend,
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "Frontend",
      icon: Layout,
      skills: skills.frontend,
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Database",
      icon: Database,
      skills: skills.database,
      color: "from-orange-500/20 to-amber-500/20"
    },
    {
      title: "Tools & Infrastructure",
      icon: Wrench,
      skills: skills.tools,
      color: "from-slate-500/20 to-gray-500/20"
    },
    {
      title: "Architecture",
      icon: Network,
      skills: skills.architecture,
      color: "from-red-500/20 to-rose-500/20"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Skills & Technologies</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit built over 7+ years of professional development experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card
                  key={index}
                  className="border-primary/20 bg-card/50 backdrop-blur hover:border-primary/40 transition-all hover:scale-105 duration-300"
                >
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-lg">{category.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="text-xs hover:bg-primary/20 transition-colors cursor-default"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
