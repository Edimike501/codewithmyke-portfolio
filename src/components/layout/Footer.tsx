import { portfolioData } from "@/data/portfolio";
import { Github, Linkedin, Terminal, Twitter, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

export function Footer() {
  const iconMap: Record<string, any> = {
    Github: Github,
    Linkedin: Linkedin,
    Twitter: Twitter,
    X: X,
    Whatsapp: FaWhatsapp
  };

  return (
    <footer className="border-t border-border/50 bg-background/50 backdrop-blur-sm py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-primary" />
            <span className="font-mono font-bold text-lg">
              {portfolioData.identity.name}
            </span>
          </div>

          <div className="text-muted-foreground text-sm text-center md:text-right">
            <p>
              &copy; {new Date().getFullYear()} Designed & Built by{" "}
              {portfolioData.identity.name}
            </p>
            <p className="text-xs mt-1 text-muted-foreground/60">
              Built with Next.js, Tailwind, & Framer Motion
            </p>
          </div>

          <div className="flex gap-4">
            {portfolioData.identity.socials.map((social) => {
              const Icon = iconMap[social.icon] || Terminal;
              return (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-primary/5 text-primary hover:bg-primary/20 transition-colors border border-primary/10">
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
