"use client";

import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-[100px]" />

      <div className="container px-4 md:px-6 z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for freelance work
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
            Building the <span className="text-gradient">future</span> of
            digital experiences.
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
            {portfolioData.hero.subheading}
          </p>

          <div className="flex flex-wrap gap-4">
            <ScrollLink
              to="projects"
              smooth={true}
              offset={-100}
              duration={500}>
              <Button size="lg" className="group">
                {portfolioData.hero.ctaPrimary}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </ScrollLink>
            <ScrollLink to="about" smooth={true} offset={-100} duration={500}>
              <Button variant="outline" size="lg">
                {portfolioData.hero.ctaSecondary}
              </Button>
            </ScrollLink>
          </div>
        </motion.div>

        {/* Right: Visual/Code Snippet */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative lg:h-[500px] flex items-center justify-center">
          <div className="relative w-full max-w-md bg-card/50 backdrop-blur-xl border border-border rounded-xl shadow-2xl overflow-hidden group hover:border-primary/50 transition-colors duration-500">
            {/* Window Controls */}
            <div className="h-8 bg-muted/20 border-b border-border flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>

            {/* Code Content */}
            <div className="p-6 font-mono text-sm overflow-hidden">
              <div className="text-muted-foreground mb-2">
                import <span className="text-primary">React</span> from 'react';
              </div>
              <div className="text-muted-foreground mb-4">
                import <span className="text-secondary">{"{ Future }"}</span>{" "}
                from 'universe';
              </div>

              <div className="pl-4 border-l-2 border-border mb-4">
                <span className="text-secondary">const</span>{" "}
                <span className="text-yellow-400">Architect</span> = () ={">"}{" "}
                {"{"}
                <br />
                &nbsp;&nbsp;<span className="text-secondary">return</span> (
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;
                <span className="text-primary">DigitalReality</span>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="text-purple-400">performance</span>={"{{"}{" "}
                <span className="text-green-400">speed: '100%'</span> {"}}"}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="text-purple-400">design</span>={"{{"}{" "}
                <span className="text-green-400">vision: 'infinite'</span>{" "}
                {"}}"}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;/&gt;
                <br />
                &nbsp;&nbsp;);
                <br />
                {"}"}
              </div>

              <div className="mt-4 flex gap-2">
                <span className="text-muted-foreground">
                  {"//"} Always shipping
                </span>
                <span className="inline-block w-2 h-4 bg-primary animate-pulse" />
              </div>
            </div>

            {/* Glowing orb behind */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 blur-[80px]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
