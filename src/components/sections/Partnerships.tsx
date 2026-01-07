"use client";

import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

export function Partnerships() {
  return (
    <section id="partners" className="py-20">
      <div className="container px-4 md:px-6">
        <SectionHeader
          title="Strategic Alliances"
          subtitle="Collaborating with visionaries."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {portfolioData.partnerships.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}>
              <a
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full group">
                <Card className="h-full bg-card/30 border-primary/5 hover:border-primary/20 hover:bg-card/50 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.1)]">
                  <CardContent className="flex flex-col items-center justify-center p-8 h-full">
                    {/* Placeholder for real logo - using icon for now */}
                    <div className="w-16 h-16 mb-4 rounded-full bg-muted/20 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500">
                      <Building2 className="w-8 h-8 text-primary" />
                    </div>

                    <h4 className="text-xl font-bold mb-1 font-mono tracking-tight group-hover:text-primary transition-colors">
                      {partner.companyName}
                    </h4>
                    <p className="text-sm text-muted-foreground font-medium bg-primary/10 px-3 py-1 rounded-full">
                      {partner.role}
                    </p>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
