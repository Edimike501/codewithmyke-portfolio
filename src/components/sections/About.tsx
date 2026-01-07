"use client";

import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/5 relative">
      {/* Slanted divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container px-4 md:px-6">
        <SectionHeader
          title="About Interface"
          subtitle="The human behind the code."
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Connecting Logic with Creativity.
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {portfolioData.about.bio}
            </p>
            <div className="h-2 w-20 bg-gradient-to-r from-primary to-secondary rounded-full" />
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {portfolioData.about.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}>
                <Card className="border-primary/10 bg-primary/5 hover:border-primary/30 transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-1 font-mono">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wider font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
