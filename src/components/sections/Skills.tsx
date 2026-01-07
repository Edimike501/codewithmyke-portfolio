"use client";

import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import {
  SiAmazon,
  SiAngular,
  SiDjango,
  SiDocker,
  SiFigma,
  SiFirebase,
  SiGraphql,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiRedis,
  SiRust,
  SiSupabase,
  SiSvelte,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
  SiWebassembly
} from "react-icons/si";

// Map string names to components
const iconMap: Record<string, any> = {
  SiNextdotjs: SiNextdotjs,
  SiReact: SiReact,
  SiTypescript: SiTypescript,
  SiTailwindcss: SiTailwindcss,
  SiNodedotjs: SiNodedotjs,
  SiPostgresql: SiPostgresql,
  SiMysql: SiMysql,
  SiRedis: SiRedis,
  SiAmazonaws: SiAmazon,
  SiDocker: SiDocker,
  SiRust: SiRust,
  SiGraphql: SiGraphql,
  SiWebassembly: SiWebassembly,
  SiFirebase: SiFirebase,
  SiSupabase: SiSupabase,
  SiMongodb: SiMongodb,
  SiPrisma: SiPrisma,
  SiVuejs: SiVuedotjs,
  SiFigma: SiFigma,
  SiSvelte: SiSvelte,
  SiAngular: SiAngular,
  SiReactnative: SiReact,
  SiDjango: SiDjango,
  SiPython: SiPython,
  SiPhp: SiPhp,
  SiJavascript: SiJavascript
};

export function Skills() {
  return (
    <section id="stack" className="py-20 bg-muted/5">
      <div className="container px-4 md:px-6">
        <SectionHeader
          title="Tech Arsenal"
          subtitle="The tools that power the vision."
        />

        <div className="flex flex-col gap-12">
          {portfolioData.skills.map((category, catIndex) => (
            <div key={catIndex}>
              <h3 className="text-xl font-bold mb-6 text-center md:text-left border-l-4 border-primary pl-4">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = iconMap[skill.icon] || SiNodedotjs; // Fallback

                  return (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.05 }}>
                      <Card className="hover:bg-primary/5 hover:border-primary/50 transition-all duration-300 group cursor-default">
                        <CardContent className="p-4 flex flex-col items-center justify-center gap-3">
                          <Icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors duration-300 group-hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]" />
                          <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground">
                            {skill.name}
                          </span>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
