"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Boxes,
  CheckCircle2,
  Cpu,
  Database,
  Layers,
  Server,
  Workflow,
  Zap,
  type LucideIcon
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Boxes,
  Workflow,
  Zap,
  Database,
  Layers,
  Cpu,
  Server
};

const pillarColors = [
  {
    border: "border-primary/20",
    hoverBorder: "hover:border-primary/60",
    bg: "bg-primary/5",
    iconBg: "bg-primary/10 text-primary",
    badge: "border-primary/30 text-primary bg-primary/10"
  },
  {
    border: "border-purple-500/20",
    hoverBorder: "hover:border-purple-500/60",
    bg: "bg-purple-500/5",
    iconBg: "bg-purple-500/10 text-purple-400",
    badge: "border-purple-500/30 text-purple-400 bg-purple-500/10"
  },
  {
    border: "border-cyan-500/20",
    hoverBorder: "hover:border-cyan-500/60",
    bg: "bg-cyan-500/5",
    iconBg: "bg-cyan-500/10 text-cyan-400",
    badge: "border-cyan-500/30 text-cyan-400 bg-cyan-500/10"
  },
  {
    border: "border-amber-500/20",
    hoverBorder: "hover:border-amber-500/60",
    bg: "bg-amber-500/5",
    iconBg: "bg-amber-500/10 text-amber-400",
    badge: "border-amber-500/30 text-amber-400 bg-amber-500/10"
  }
];

export function Architecture() {
  const { architecture } = portfolioData;

  return (
    <section id="architecture" className="py-24 relative overflow-hidden bg-muted/5">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container px-4 md:px-6 relative z-10">
        <SectionHeader
          title={architecture.title}
          subtitle={architecture.subtitle}
        />

        {/* Philosophy Intro Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 p-6 md:p-8 rounded-2xl bg-card/60 backdrop-blur-md border border-border/80 shadow-xl shadow-primary/5">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
                <Cpu className="w-3.5 h-3.5" />
                Architectural Philosophy
              </div>
              <p className="text-foreground/90 text-base md:text-lg leading-relaxed">
                {architecture.summary}
              </p>
            </div>
            <div className="flex flex-wrap md:flex-col gap-2 shrink-0">
              <Badge variant="outline" className="border-primary/30 text-primary bg-primary/5 px-3 py-1 font-mono text-xs">
                Zero IPC Latency
              </Badge>
              <Badge variant="outline" className="border-purple-500/30 text-purple-400 bg-purple-500/5 px-3 py-1 font-mono text-xs">
                Strict Boundaries
              </Badge>
              <Badge variant="outline" className="border-cyan-500/30 text-cyan-400 bg-cyan-500/5 px-3 py-1 font-mono text-xs">
                Sub-ms Cache Hits
              </Badge>
            </div>
          </div>
        </motion.div>

        {/* 4 Architectural Pillars Grid */}
        <div className="grid gap-6 md:grid-cols-2 mb-16">
          {architecture.pillars.map((pillar, index) => {
            const Icon = iconMap[pillar.icon] || Boxes;
            const theme = pillarColors[index % pillarColors.length];

            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="h-full">
                <Card
                  className={`h-full flex flex-col border ${theme.border} ${theme.bg} ${theme.hoverBorder} transition-all duration-300 backdrop-blur-sm group hover:shadow-xl hover:shadow-primary/5`}>
                  <CardContent className="p-6 md:p-8 flex flex-col h-full">
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <div className={`p-3 rounded-xl ${theme.iconBg} transition-transform duration-300 group-hover:scale-110`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <Badge variant="outline" className={`${theme.badge} text-xs font-mono`}>
                        {pillar.badge}
                      </Badge>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-4">
                      {pillar.tagline}
                    </p>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {pillar.description}
                    </p>

                    <div className="mt-auto pt-4 border-t border-border/50 space-y-2.5">
                      {pillar.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2.5 text-xs text-foreground/80">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Live Architecture Flow Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-border/80 bg-card/40 backdrop-blur-md p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
            <div>
              <h4 className="text-lg font-bold text-foreground flex items-center gap-2">
                <Workflow className="w-5 h-5 text-primary" />
                End-to-End System Flow Blueprint
              </h4>
              <p className="text-xs text-muted-foreground mt-1">
                Visualizing data flow across client portals, typed contract packages, NestJS modular core, and dual-layer caching.
              </p>
            </div>
            <div className="font-mono text-xs text-primary/80 bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-lg">
              Turborepo + NestJS + Multi-Tier Cache
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
            {/* Step 1: Client Layer */}
            <div className="p-4 rounded-xl bg-background/60 border border-border/60 hover:border-primary/40 transition-colors">
              <div className="text-[11px] font-mono uppercase text-muted-foreground mb-1">Layer 01: Client Portals</div>
              <div className="font-bold text-sm text-foreground mb-1">Next.js 15 (App Router)</div>
              <p className="text-xs text-muted-foreground">
                Buyer Marketplace &amp; Admin Operations console consuming TanStack Query hooks.
              </p>
            </div>

            <div className="hidden md:flex justify-center">
              <div className="flex items-center gap-1 text-primary/60 font-mono text-xs">
                <span>Contracts</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* Step 2: Shared & Backend Core */}
            <div className="p-4 rounded-xl bg-background/60 border border-border/60 hover:border-primary/40 transition-colors">
              <div className="text-[11px] font-mono uppercase text-muted-foreground mb-1">Layer 02: Core Engine</div>
              <div className="font-bold text-sm text-foreground mb-1">NestJS Modular Monolith</div>
              <p className="text-xs text-muted-foreground">
                Domain modules (Auth, Catalog, Orders, Logistics) strictly validated via Zod contracts.
              </p>
            </div>

            <div className="hidden md:flex justify-center">
              <div className="flex items-center gap-1 text-primary/60 font-mono text-xs">
                <span>Cache &amp; DB</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {/* Step 3: Caching System */}
            <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono uppercase text-primary font-semibold">Tier 1 &amp; 2 Caching System</span>
                <Badge variant="outline" className="border-primary/30 text-primary text-[10px]">Redis + Memcached</Badge>
              </div>
              <p className="text-xs text-foreground/80 leading-relaxed">
                <strong className="text-primary font-medium">Redis:</strong> Distributed session tokens, refresh-token rotation blacklist, and rate-limiting.<br />
                <strong className="text-primary font-medium">Memcached / In-Memory:</strong> Transient high-frequency query caching for sub-millisecond response times.
              </p>
            </div>

            {/* Step 4: Storage */}
            <div className="p-4 rounded-xl bg-card/60 border border-border/60">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono uppercase text-muted-foreground font-semibold">Persistence Layer</span>
                <Badge variant="outline" className="text-[10px]">Prisma + Postgres</Badge>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Relational schema with ACID compliance, atomic order state-machine updates, connection pooling, and Cloudflare R2 signed asset storage.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
