"use client";
import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";

const Navbar = () => {
  const [isClient, setIsClient] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = useMemo(
    () => [
      { name: "Home", href: "#home", id: "home" },
      { name: "Tech Stack", href: "#tech-stack", id: "tech-stack" },
      { name: "About", href: "#about", id: "about" },
      { name: "Projects", href: "#portfolio", id: "portfolio" },
    ],
    []
  );

  useEffect(() => {
    setIsClient(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = [...navItems.map((item) => item.id), "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const smoothScrollTo = (href: string) => {
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - window.innerHeight * 0.1;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    setIsMobileMenuOpen(false);
  };

  if (!isClient) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold text-white">Haekal</h1>
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white/60 hover:text-white"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <>
      {/* Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-black/20 backdrop-blur-2xl border-b border-cyan-400/10"
            : "bg-transparent"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Futuristic glow effect */}
        {isScrolled && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan-500/3 via-transparent to-purple-500/3 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        )}

        <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo - Left */}
            <motion.div
              className="flex items-center group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => smoothScrollTo("#home")}
            >
              <div className="relative">
                <h1
                  className="text-lg md:text-xl font-bold text-white tracking-tight relative z-10"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    textShadow: "0 0 20px rgba(34, 211, 238, 0.4)",
                  }}
                >
                  Haekal
                </h1>
                {/* Logo glow effect */}
                <motion.div
                  className="absolute inset-0 text-lg md:text-xl font-bold bg-gradient-to-r from-cyan-400/40 to-blue-500/40 bg-clip-text text-transparent blur-sm"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  Haekal
                </motion.div>
              </div>
            </motion.div>

            {/* Center Navigation - Desktop Only */}
            <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
              <div className="flex items-center space-x-1 bg-black/30 backdrop-blur-xl rounded-full border border-white/10 px-2 py-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => smoothScrollTo(item.href)}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                      activeSection === item.id
                        ? "text-white bg-cyan-500/20 border border-cyan-400/30"
                        : "text-white/60 hover:text-white hover:bg-white/5"
                    }`}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    <span className="relative z-10">{item.name}</span>

                    {/* Active indicator glow */}
                    {activeSection === item.id && (
                      <motion.div
                        className="absolute inset-0 bg-cyan-400/10 rounded-full"
                        layoutId="activeNav"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Contact Button - Right */}
            <div className="hidden lg:block">
              <motion.button
                onClick={() => smoothScrollTo("#contact")}
                className={`group relative px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 overflow-hidden ${
                  activeSection === "contact"
                    ? "bg-cyan-500 text-white shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                    : "bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-cyan-400/50"
                }`}
                style={{ fontFamily: "'Inter', sans-serif" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                {/* Background gradient animation */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />

                <span className="relative z-10 flex items-center gap-2">
                  Contact
                  <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform duration-300" />
                </span>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <motion.button
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "bg-cyan-400/20 border border-cyan-400/30"
                    : "bg-white/5 border border-white/10 hover:bg-white/10"
                }`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-5 w-5 text-cyan-400" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-5 w-5 text-white/70" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                className="lg:hidden mt-4 p-4 bg-black/30 backdrop-blur-2xl rounded-2xl border border-cyan-400/20"
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {/* Mobile Navigation Links */}
                <div className="space-y-2 mb-6">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      onClick={() => smoothScrollTo(item.href)}
                      className={`w-full text-left flex items-center justify-between p-3 rounded-xl transition-all duration-300 group ${
                        activeSection === item.id
                          ? "bg-cyan-400/20 border border-cyan-400/30 text-cyan-300"
                          : "text-white/70 hover:text-white hover:bg-white/10 border border-transparent"
                      }`}
                      style={{ fontFamily: "'Inter', sans-serif" }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <span className="font-medium">{item.name}</span>
                      <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.button>
                  ))}
                </div>

                {/* Mobile Contact Button */}
                <motion.button
                  onClick={() => smoothScrollTo("#contact")}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Contact Me
                  <ArrowRight className="h-4 w-4" />
                </motion.button>

                {/* Mobile gradient divider */}
                <motion.div
                  className="h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent mt-4"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Enhanced Progress Bar */}
        {isScrolled && (
          <motion.div
            className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
          />
        )}
      </motion.nav>
    </>
  );
};

export default Navbar;
