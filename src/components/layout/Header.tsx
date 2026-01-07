"use client";

import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/portfolio";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { Menu, Terminal, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navVariants: Variants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" }
    }
  };

  return (
    <motion.header
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-4"
          : "bg-transparent py-6"
      }`}>
      <div className="container px-4 md:px-6 mx-auto flex items-center justify-between">
        {/* Logo */}
        <ScrollLink
          to="hero"
          smooth={true}
          duration={500}
          className="cursor-pointer flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:border-primary/50 transition-colors">
            <Terminal className="w-5 h-5 text-primary" />
          </div>
          <span className="font-mono font-bold text-xl tracking-tighter">
            {portfolioData.identity.name}
            <span className="text-primary blinking-cursor">_</span>
          </span>
        </ScrollLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {portfolioData.navItems.map((item, index) => (
            <ScrollLink
              key={index}
              to={item.link}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer"
              activeClass="text-primary font-semibold">
              <span className="text-primary/50 font-mono mr-1">
                0{index + 1}.
              </span>
              {item.name}
            </ScrollLink>
          ))}
          <Button variant="neon" size="sm" className="ml-4">
            Resume
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border">
            <div className="flex flex-col p-6 space-y-4">
              {portfolioData.navItems.map((item, index) => (
                <ScrollLink
                  key={index}
                  to={item.link}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium py-2 border-b border-border/50 hover:text-primary transition-colors">
                  <span className="text-primary/50 font-mono mr-2">
                    0{index + 1}.
                  </span>
                  {item.name}
                </ScrollLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
