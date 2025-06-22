"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import {
  SiLaravel,
  SiNextdotjs,
  SiReact,
  SiExpress,
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";

const Hero = () => {
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "Haekal";

  const techStack = [
    { name: "Laravel", icon: SiLaravel },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "React", icon: SiReact },
    { name: "Express.js", icon: SiExpress },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "MySQL", icon: SiMysql },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "MongoDB", icon: SiMongodb },
  ];

  // Smoother typing animation effect
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setCurrentText(fullText.slice(0, i + 1));
        i++;
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, 500); // Faster typing for smoother feel

    return () => clearInterval(timer);
  }, []);

  // Smooth scroll function
  const scrollToNextSection = () => {
    const nextSection = document.querySelector("#about");
    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      // Fallback: scroll by viewport height
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Faster stagger
        delayChildren: 0.2, // Shorter delay
        ease: [0.16, 1, 0.3, 1], // Better easing
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8, // Slightly longer for smoothness
        ease: [0.16, 1, 0.3, 1], // Smooth spring-like easing
      },
    },
  };

  const nameVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.3,
      },
    },
  };

  return (
    <>
      {/* Modern Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <div className="relative min-h-[100dvh] bg-black overflow-hidden flex items-center">
        {/* Enhanced Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:60px_60px]" />

        {/* Multiple Enhanced Glow Layers */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-white/[0.06] rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-white/[0.04] rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-[800px] h-[400px] bg-white/[0.05] rounded-full blur-3xl" />
        <div className="absolute center w-[400px] h-[400px] bg-white/[0.03] rounded-full blur-xl" />

        {/* Fixed Scanning Lines */}
        <motion.div
          className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/60 to-transparent"
          animate={{ y: [0, "100dvh"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-transparent via-white/40 to-transparent"
          animate={{ x: ["0vw", "-100vw"] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
            delay: 3,
          }}
        />

        {/* Main Content Container with adjusted padding */}
        <motion.div
          className="relative z-10 w-full flex flex-col justify-center items-center px-3 sm:px-4 md:px-6 max-w-6xl mx-auto py-20 sm:py-24 md:py-32"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Content */}
          <div className="text-center space-y-4 sm:space-y-6 md:space-y-10 w-full">
            {/* Name with Enhanced Typing Effect */}
            <motion.div
              variants={nameVariants}
              className="relative space-y-4 sm:space-y-6"
            >
              <h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-black tracking-[-0.04em] text-white leading-[0.85]"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: "800",
                  textShadow:
                    "0 0 60px rgba(255, 255, 255, 0.4), 0 0 120px rgba(255, 255, 255, 0.2)",
                  filter: "drop-shadow(0 0 40px rgba(255, 255, 255, 0.3))",
                }}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  {currentText}
                </motion.span>
                {isTyping && (
                  <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="text-white/90"
                    style={{ textShadow: "0 0 40px rgba(255, 255, 255, 0.8)" }}
                  >
                    |
                  </motion.span>
                )}
                {/* Enhanced glow backdrop */}
                <div className="absolute inset-0 text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-black tracking-[-0.04em] text-white/20 blur-lg -z-10">
                  {currentText}
                </div>
              </h1>

              {/* Futuristic underline with enhanced glow */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{
                  duration: 1.5,
                  delay: 1.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative mx-auto w-32 sm:w-40 md:w-60"
              >
                <div className="h-[2px] bg-gradient-to-r from-transparent via-white/80 to-transparent shadow-[0_0_30px_rgba(255,255,255,0.6)]" />
              </motion.div>
            </motion.div>

            {/* Title */}
            <motion.h2
              className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium text-white/80 tracking-[0.15em] uppercase"
              variants={itemVariants}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: "500",
                textShadow: "0 0 25px rgba(255, 255, 255, 0.3)",
              }}
            >
              Fullstack Web Developer
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-xs sm:text-sm md:text-base text-white/60 max-w-xs sm:max-w-md md:max-w-xl mx-auto leading-relaxed font-light px-2"
              variants={itemVariants}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: "400",
              }}
            >
              Crafting exceptional digital experiences with cutting-edge
              technologies.
              <br className="hidden sm:block" />
              Building fast, scalable, and elegant web applications.
            </motion.p>

            {/* Tech Stack - Enhanced Icons */}
            <motion.div
              className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto"
              variants={itemVariants}
            >
              {techStack.map((tech, index) => {
                const IconComponent = tech.icon;
                return (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.6, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                      delay: index * 0.08 + 1.8,
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    whileHover={{
                      scale: 1.15,
                      y: -6,
                      filter: "drop-shadow(0 0 25px rgba(255,255,255,0.6))",
                      transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
                    }}
                    className="group relative"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl border border-white/15 hover:border-white/50 bg-white/[0.03] hover:bg-white/[0.08] flex items-center justify-center transition-all duration-300 backdrop-blur-sm hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                      <IconComponent
                        className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white/70 group-hover:text-white transition-colors duration-300"
                        style={{
                          filter: "drop-shadow(0 0 10px rgba(255,255,255,0.4))",
                        }}
                      />
                    </div>

                    {/* Enhanced Tooltip */}
                    <div className="absolute -bottom-8 sm:-bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                      <div
                        className="bg-black/90 border border-white/30 px-2 py-1 text-xs text-white/90 whitespace-nowrap rounded-lg backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontWeight: "500",
                        }}
                      >
                        {tech.name}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 justify-center items-center pt-4 sm:pt-6"
              variants={itemVariants}
            >
              <Button
                size="lg"
                className="group bg-white hover:bg-white/95 text-black font-semibold px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-xl md:rounded-2xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] border-0 min-w-[140px] sm:min-w-[160px] md:min-w-[180px] relative overflow-hidden"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: "600",
                }}
              >
                <span className="relative z-10 flex items-center text-sm sm:text-base">
                  View Projects
                  <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="group border-2 border-white/30 hover:border-white/70 bg-transparent hover:bg-white/10 text-white font-semibold px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-xl md:rounded-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] min-w-[140px] sm:min-w-[160px] md:min-w-[180px] backdrop-blur-sm relative overflow-hidden"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: "600",
                }}
              >
                <span className="relative z-10 flex items-center text-sm sm:text-base">
                  <Download className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:animate-pulse" />
                  Resume
                </span>
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </motion.div>
          </div>

          {/* Enhanced Functional Scroll Indicator */}
          <motion.div
            className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center group cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 3.5,
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            onClick={scrollToNextSection}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "loop",
              }}
              className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 group-hover:border-white/70 rounded-xl md:rounded-2xl flex justify-center pt-1.5 sm:pt-2 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] group-hover:bg-white/5"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatType: "loop",
                }}
                className="w-0.5 h-2 sm:h-3 bg-white/60 group-hover:bg-white/90 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.7)] transition-colors duration-300"
              />
            </motion.div>
            <motion.p
              className="text-[10px] sm:text-xs text-white/40 group-hover:text-white/80 mt-2 sm:mt-3 font-medium tracking-[0.2em] uppercase transition-colors duration-300"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: "500",
              }}
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Scroll
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
