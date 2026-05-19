"use client";

import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import {
  Brain,
  Calendar,
  Cloud,
  Code2,
  Coffee,
  Database,
  Rocket,
  Users,
  type LucideIcon
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Calendar,
  Cloud,
  Code2,
  Coffee,
  Database,
  Brain,
  Rocket,
  Users
};

// Feature icon colors: Backend First = cyan, Full-Stack = cyan, AI & Automation = purple, Cloud Ready = purple
const featureIconColors = [
  "text-primary", // Backend First - cyan
  "text-primary", // Full-Stack - cyan
  "text-purple-400", // AI & Automation - purple
  "text-purple-400" // Cloud Ready - purple
];

// Stats: 5+ (cyan), 10+ (purple), ∞ (cyan), 1k+ (purple)
const statColors = [
  {
    accent: "text-primary",
    border: "border-primary/10",
    bg: "bg-primary/5",
    hoverBorder: "hover:border-primary/30"
  },
  {
    accent: "text-purple-400",
    border: "border-purple-400/10",
    bg: "bg-purple-400/5",
    hoverBorder: "hover:border-purple-400/30"
  },
  {
    accent: "text-primary",
    border: "border-primary/10",
    bg: "bg-primary/5",
    hoverBorder: "hover:border-primary/30"
  },
  {
    accent: "text-purple-400",
    border: "border-purple-400/10",
    bg: "bg-purple-400/5",
    hoverBorder: "hover:border-purple-400/30"
  }
];

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/5 relative overflow-hidden">
      {/* Slanted divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      {/* Background gradient orbs */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="container px-4 md:px-6 relative z-10">
        <SectionHeader
          title="About Me."
          subtitle="The engineer behind the systems."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Backend-focused. Full-stack capable.
            </div>

            {/* Heading */}
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 leading-tight">
              Building <span className="text-gradient">robust</span> backend
              systems
              <br />
              and{" "}
              <span className="text-gradient">scalable web applications.</span>
            </h3>

            {/* Bio paragraphs */}
            {portfolioData.about.bio.map((paragraph, index) => (
              <p
                key={index}
                className="text-muted-foreground leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}

            {/* Gradient divider */}
            <div className="h-2 w-24 bg-gradient-to-r from-primary to-secondary rounded-full mt-2 mb-8" />

            {/* Features Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
              {portfolioData.about.features.map((feature, index) => {
                const Icon = iconMap[feature.icon];
                const iconColor =
                  featureIconColors[index] ?? "text-muted-foreground";
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex flex-col items-start gap-2">
                    {Icon && <Icon className={`w-7 h-7 ${iconColor}`} />}
                    <div>
                      <div className="text-sm font-semibold text-foreground">
                        {feature.title}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {feature.description}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {portfolioData.about.stats.map((stat, index) => {
              const Icon = iconMap[stat.icon];
              const colors = statColors[index] ?? statColors[0];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}>
                  <Card
                    className={`${colors.border} ${colors.bg} ${colors.hoverBorder} transition-colors h-full`}>
                    <CardContent className="p-6">
                      {Icon && (
                        <Icon className={`w-5 h-5 ${colors.accent} mb-3`} />
                      )}
                      <div
                        className={`text-3xl md:text-4xl font-bold ${colors.accent} mb-2 font-mono`}>
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-2">
                        {stat.label}
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {stat.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
