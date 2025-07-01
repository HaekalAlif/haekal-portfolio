"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, ExternalLink } from "lucide-react";
import {
  SiLaravel,
  SiNextdotjs,
  SiReact,
  SiExpress,
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiTypescript,
  SiNodedotjs,
} from "react-icons/si";

const Hero = () => {
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "Haekal Alif Putra";

  const techStack = [
    { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
    { name: "React", icon: SiReact, color: "text-cyan-400" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
    { name: "Laravel", icon: SiLaravel, color: "text-red-400" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-400" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
    { name: "MySQL", icon: SiMysql, color: "text-orange-400" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
  ];

  // Optimized typing animation
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
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const nameVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <>
      {/* Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <div
        id="home"
        className="relative h-[100dvh] bg-[#0a0a0a] overflow-hidden flex items-center"
      >
        {/* Enhanced Background Grid with Futuristic Glow */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.06)_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* Secondary Grid Layer for Depth */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.04)_1px,transparent_1px)] bg-[size:120px_120px]" />

        {/* Animated Grid Glow Effect */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(0deg, transparent 24%, rgba(34, 211, 238, 0.12) 25%, rgba(34, 211, 238, 0.12) 26%, transparent 27%, transparent 74%, rgba(34, 211, 238, 0.12) 75%, rgba(34, 211, 238, 0.12) 76%, transparent 77%, transparent),
              linear-gradient(90deg, transparent 24%, rgba(34, 211, 238, 0.12) 25%, rgba(34, 211, 238, 0.12) 26%, transparent 27%, transparent 74%, rgba(34, 211, 238, 0.12) 75%, rgba(34, 211, 238, 0.12) 76%, transparent 77%, transparent)
            `,
            backgroundSize: "60px 60px",
            filter: "drop-shadow(0 0 1px rgba(34, 211, 238, 0.5))",
          }}
          animate={{
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Grid Intersection Highlights */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 0px 0px, rgba(34, 211, 238, 0.3) 1px, transparent 1px),
              radial-gradient(circle at 60px 60px, rgba(147, 51, 234, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px, 120px 120px",
          }}
          animate={{
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(34,211,238,0.03)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(147,51,234,0.03)_0%,transparent_50%)]" />

        {/* Optimized Glow Effects */}
        <motion.div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-cyan-500/[0.04] to-blue-500/[0.04] rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.04, 0.06, 0.04],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Enhanced Scanning Line */}
        <motion.div
          className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"
          style={{
            boxShadow:
              "0 0 8px rgba(34, 211, 238, 0.8), 0 0 16px rgba(34, 211, 238, 0.4)",
          }}
          animate={{ y: [0, "100dvh"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />

        {/* Main Content */}
        <motion.div
          className="relative z-10 w-full flex flex-col justify-between items-center px-3 sm:px-4 md:px-6 max-w-7xl mx-auto h-full py-28 pt-34"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center space-y-4 sm:space-y-6 md:space-y-8 w-full">
              {/* Name with Professional Styling */}
              <motion.div
                variants={nameVariants}
                className="space-y-3 sm:space-y-4"
              >
                <h1
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold tracking-tight text-white leading-[0.9]"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    textShadow: "0 0 40px rgba(34, 211, 238, 0.3)",
                  }}
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent"
                  >
                    {currentText}
                  </motion.span>
                  {isTyping && (
                    <motion.span
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="text-cyan-400"
                    >
                      |
                    </motion.span>
                  )}
                </h1>

                {/* Professional Underline */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 1.5 }}
                  className="relative mx-auto w-40 sm:w-48 md:w-56"
                >
                  <div className="h-[2px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
                </motion.div>
              </motion.div>

              {/* Professional Title */}
              <motion.div
                variants={itemVariants}
                className="space-y-1 sm:space-y-2"
              >
                <h2
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white/90"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Passionate Full Stack Developer
                </h2>
                <p
                  className="text-sm sm:text-base md:text-lg text-cyan-400/80 font-medium tracking-wide"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  2+ Years of Digital Innovation
                </p>
              </motion.div>

              {/* Professional Description */}
              <motion.p
                className="text-sm sm:text-base md:text-lg text-white/70 max-w-sm sm:max-w-lg md:max-w-2xl mx-auto leading-relaxed px-2"
                variants={itemVariants}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Crafting scalable web applications and leading development teams
                to deliver exceptional digital experiences that drive business
                growth.
              </motion.p>

              {/* Tech Stack Icons */}
              <motion.div
                className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5 max-w-sm sm:max-w-lg md:max-w-2xl mx-auto"
                variants={itemVariants}
              >
                {techStack.map((tech, index) => {
                  const IconComponent = tech.icon;
                  return (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{
                        delay: index * 0.06 + 2,
                        duration: 0.5,
                      }}
                      whileHover={{
                        scale: 1.1,
                        y: -4,
                      }}
                      className="group relative"
                    >
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl border border-white/10 hover:border-cyan-400/30 bg-black/20 hover:bg-black/40 flex items-center justify-center transition-all duration-300 backdrop-blur-sm group-hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                        <IconComponent
                          className={`h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 ${tech.color} transition-all duration-300`}
                        />
                      </div>

                      {/* Tooltip */}
                      <div className="absolute -bottom-8 sm:-bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                        <div className="bg-black/90 border border-cyan-400/30 px-3 py-1 text-xs text-white whitespace-nowrap rounded-lg backdrop-blur-sm">
                          {tech.name}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Experience Highlights */}
              <motion.div
                className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-md sm:max-w-lg mx-auto pt-6"
                variants={itemVariants}
              >
                <div className="text-center">
                  <div
                    className="text-xl sm:text-xl md:text-2xl font-bold text-cyan-400"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    2+
                  </div>
                  <div
                    className="text-xs sm:text-sm text-white/60"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Years Exp.
                  </div>
                </div>
                <div className="text-center">
                  <div
                    className="text-xl sm:text-xl md:text-2xl font-bold text-blue-400"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    20+
                  </div>
                  <div
                    className="text-xs sm:text-sm text-white/60"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Projects
                  </div>
                </div>
                <div className="text-center">
                  <div
                    className="text-xl sm:text-xl md:text-2xl font-bold text-purple-400"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    20+
                  </div>
                  <div
                    className="text-xs sm:text-sm text-white/60"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Technologies
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
