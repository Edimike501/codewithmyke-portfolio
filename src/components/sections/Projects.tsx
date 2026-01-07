"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { portfolioData, ProjectCategory } from "@/data/portfolio";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Github, Layers } from "lucide-react";
import { useState } from "react";

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<"All" | ProjectCategory>(
    "All"
  );

  const categories: ("All" | ProjectCategory)[] = [
    "All",
    "Web App",
    "Mobile App",
    "Software",
    "SaaS",
    "Startup"
  ];

  const filteredProjects =
    activeCategory === "All"
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 relative">
      {/* Background Grid Pattern specifically for this section */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 z-0 mask-image:linear-gradient(to bottom, transparent, black, transparent)" />

      <div className="container px-4 md:px-6 z-10 relative">
        <SectionHeader title="Selected Works" subtitle="Pixels with purpose." />

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeCategory === category
                  ? "bg-primary/10 border-primary text-primary shadow-[0_0_10px_rgba(0,240,255,0.3)]"
                  : "bg-background/50 border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}>
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}>
                <Card className="h-full flex flex-col group hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 bg-card/40 backdrop-blur-sm">
                  {/* Image Area placeholder since we don't have real images yet, sticking to a colored block or icon */}
                  <div className="relative w-full h-48 bg-muted/30 overflow-hidden border-b border-border/50 group-hover:border-primary/20 transition-colors">
                    {/*
                         In a real scenario, use next/image here.
                         For now, we use a pattern or gradient.
                     */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 group-hover:scale-105 transition-transform duration-700" />

                    <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-100 transition-opacity duration-500">
                      <Layers className="w-16 h-16 text-primary/50" />
                    </div>

                    {/* Category Badge overlay */}
                    <div className="absolute top-4 left-4">
                      <Badge
                        variant="secondary"
                        className="backdrop-blur-md bg-background/50">
                        {project.category}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors">
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                    <CardDescription className="line-clamp-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-xs text-muted-foreground border-border/50">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="pt-0">
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full">
                        <Button variant="neon" className="w-full group/btn">
                          View Project
                          <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </a>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
