"use strict";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  title,
  subtitle,
  align = "center"
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">
        {title}
        <span className="text-primary">.</span>
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-muted-foreground text-lg max-w-2xl mx-auto">
          {subtitle}
        </motion.p>
      )}
      <div
        className={`h-1 w-20 bg-primary mt-6 rounded-full ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}
