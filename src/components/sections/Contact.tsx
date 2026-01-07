"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Mail, Send, Terminal } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

// Styled Input Component
function CustomInput({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "flex h-12 w-full rounded-lg border border-primary/20 bg-background/50 px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary/50 focus-visible:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50 backdrop-blur-sm",
        className
      )}
      {...props}
    />
  );
}

// Styled Textarea
function CustomTextarea({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "flex min-h-[120px] w-full rounded-lg border border-primary/20 bg-background/50 px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary/50 focus-visible:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50 backdrop-blur-sm resize-y font-mono",
        className
      )}
      {...props}
    />
  );
}

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add real submission logic here (e.g., Formspree, EmailJS)
    alert("Message simulation sent! Check console.");
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10" />

      <div className="container px-4 md:px-6">
        <SectionHeader
          title="Initialize Handshake"
          subtitle="Ready to collaborate?"
        />

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}>
            <h3 className="text-2xl font-bold mb-6">Transmission Channels</h3>
            <p className="text-muted-foreground mb-8 text-lg">
              Whether you have a question, a project proposal, or just want to
              discuss the latest in tech, my inbox is always open.
            </p>

            <div className="space-y-6">
              <a
                href={`mailto:${portfolioData.identity.email}`}
                className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">
                    Email Frequency
                  </div>
                  <div className="text-lg font-mono font-bold group-hover:text-primary transition-colors">
                    {portfolioData.identity.email}
                  </div>
                </div>
              </a>

              <div className="p-6 rounded-2xl bg-muted/5 border border-border/50 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-4 text-primary">
                  <Terminal className="w-5 h-5" />
                  <span className="font-mono font-bold">Terminal Status</span>
                </div>
                <div className="font-mono text-sm space-y-2 text-muted-foreground">
                  <p>
                    <span className="text-green-500">➜</span> Current Location:{" "}
                    <span className="text-foreground">Remote / Global</span>
                  </p>
                  <p>
                    <span className="text-green-500">➜</span> Availability:{" "}
                    <span className="text-foreground">
                      Open for new projects
                    </span>
                  </p>
                  <p>
                    <span className="text-green-500">➜</span> Response Time:{" "}
                    <span className="text-foreground">~24 Hours</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}>
            <Card className="border-primary/20 shadow-[0_0_30px_rgba(0,0,0,0.2)]">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Identity
                    </label>
                    <CustomInput
                      id="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Signal Frequency (Email)
                    </label>
                    <CustomInput
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Data Payload
                    </label>
                    <CustomTextarea
                      id="message"
                      placeholder="Project details or just saying hello..."
                      className="min-h-[150px]"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full group" variant="neon">
                    Send Transmission
                    <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
