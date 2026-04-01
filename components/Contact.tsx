"use client";

import { personalInfo } from "@/lib/portfolio-data";
import { Mail, Phone, MapPin, Github, Linkedin, Globe, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: Phone,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/\s/g, '')}`,
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: MapPin,
      label: "Location",
      value: personalInfo.location,
      href: null,
      color: "from-orange-500/20 to-amber-500/20"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      value: personalInfo.github,
      href: `https://github.com/${personalInfo.github}`
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: personalInfo.linkedin,
      href: `https://linkedin.com/in/${personalInfo.linkedin}`
    },
    {
      icon: Globe,
      label: "Website",
      value: personalInfo.website,
      href: `https://${personalInfo.website}`
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Let's discuss how I can help bring your project to life
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card
                  key={index}
                  className="border-primary/20 bg-card/50 backdrop-blur hover:border-primary/40 transition-all hover:scale-105 duration-300"
                >
                  <CardContent className="p-6 text-center space-y-4">
                    <div className={`w-12 h-12 mx-auto rounded-lg bg-gradient-to-br ${method.color} flex items-center justify-center`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">{method.label}</p>
                      {method.href ? (
                        <a
                          href={method.href}
                          className="block font-medium hover:text-primary transition-colors break-all"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <p className="font-medium">{method.value}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="border-primary/20 bg-card/50 backdrop-blur">
            <CardContent className="p-8 space-y-6">
              <div className="text-center space-y-2">
                <h3 className="text-xl font-semibold">Connect on Social Media</h3>
                <p className="text-sm text-muted-foreground">
                  Follow me on these platforms to see my latest work
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <Button
                      key={index}
                      variant="outline"
                      size="lg"
                      asChild
                      className="group"
                    >
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                        {social.label}
                      </a>
                    </Button>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <div className="text-center pt-8">
            <Button size="lg" asChild className="group">
              <a href={`mailto:${personalInfo.email}`}>
                Send me an email
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
