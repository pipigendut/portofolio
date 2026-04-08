import { personalInfo, education, certificates } from "@/lib/portfolio-data";
import { GraduationCap, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="space-y-8">
            <Card className="border-primary/20 bg-card/50 backdrop-blur">
              <CardContent className="p-6 md:p-8">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {personalInfo.about}
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-primary/20 bg-card/50 backdrop-blur hover:border-primary/40 transition-colors">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Education</h3>
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium">{education.degree}</p>
                    <p className="text-sm text-muted-foreground">{education.university}</p>
                    <p className="text-sm text-muted-foreground">{education.period}</p>
                    <p className="text-sm text-primary font-medium">GPA: {education.gpa}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-card/50 backdrop-blur hover:border-primary/40 transition-colors">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Certificates</h3>
                  </div>
                  <ul className="space-y-2">
                    {certificates.map((cert, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">{cert}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
