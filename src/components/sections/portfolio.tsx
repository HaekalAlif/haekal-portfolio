"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, ArrowRight, Eye } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiLaravel,
  SiVuedotjs,
  SiTailwindcss,
  SiMysql,
} from "react-icons/si";
import Image from "next/image";

const Portfolio = () => {
  const projects = [
    {
      title: "SecondCycle - E-commerce Platform",
      description:
        "A second-hand e-commerce platform that supports fast and secure transactions. Features real-time chat and price negotiation to facilitate communication between sellers and buyers before payment is made. Designed with responsive interface for optimal user experience across various devices.",
      tools: [
        { name: "Laravel", icon: SiLaravel },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "MySQL", icon: SiMysql },
        { name: "Tailwind CSS", icon: SiTailwindcss },
      ],
      image: "/second-cycle.png",
      github: "https://github.com/HaekalAlif/PBL-E-Commerce",
      live: null,
      featured: true,
    },
    {
      title: "Absen-In - QR Attendance System",
      description:
        "A web-based attendance system for students using QR scanner and Geolocation API to verify presence and location during attendance. Designed to improve efficiency and accuracy of attendance data in campus environment.",
      tools: [
        { name: "Laravel", icon: SiLaravel },
        { name: "MySQL", icon: SiMysql },
        { name: "Tailwind CSS", icon: SiTailwindcss },
      ],
      image: "/absen-in.png",
      github: "https://github.com/HaekalAlif/Absen-in",
      live: null,
      featured: true,
    },
    {
      title: "LittleFairyFlorist - UMKM Website",
      description:
        "A florist UMKM website with custom CMS for dynamic bouquet product management. Features online purchasing connected directly to WhatsApp for easy transactions.",
      tools: [
        { name: "Vue.js", icon: SiVuedotjs },
        { name: "Laravel", icon: SiLaravel },
        { name: "MySQL", icon: SiMysql },
      ],
      image: "/little-fairy-florist.png",
      github: "https://github.com/HaekalAlif/LittleFairyFlorist",
      live: null,
      featured: false,
    },
    {
      title: "Official Website Emailkomp",
      description:
        "Student organization information platform displaying profiles, technology articles, and updates about competitions, scholarships, and other opportunities for students.",
      tools: [
        { name: "React", icon: SiReact },
        { name: "Laravel", icon: SiLaravel },
        { name: "MySQL", icon: SiMysql },
      ],
      image: "/emailkomp-website.png",
      github: "https://github.com/HaekalAlif/E-Mailkomp",
      live: "https://emailkomp.vokasi.uns.ac.id/",
      featured: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
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

      <section
        id="portfolio"
        className="relative w-full min-h-screen bg-[#0a0a0a] py-6 sm:py-6 md:py-6 overflow-hidden"
      >
        {/* Enhanced Background Grid with Futuristic Glow - Same as Hero */}
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

        {/* Enhanced Glow Effects with more animation */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[400px] h-[200px] sm:w-[600px] sm:h-[300px] bg-gradient-to-r from-cyan-500/[0.04] to-blue-500/[0.04] rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.04, 0.06, 0.04],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-gradient-to-r from-purple-500/[0.02] to-pink-500/[0.02] rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.02, 0.05, 0.02],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Main Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-3 sm:px-4 md:px-6">
          {/* Section Header */}
          <motion.div
            className="text-center mb-12 sm:mb-16 md:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Main Heading */}
            <motion.div className="relative inline-block">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 relative"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  textShadow: "0 0 40px rgba(255, 255, 255, 0.3)",
                }}
              >
                Featured Projects
                {/* Animated background glow */}
                <motion.div
                  className="absolute inset-0 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-600/20 bg-clip-text text-transparent blur-sm -z-10"
                  animate={{
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  Featured Projects
                </motion.div>
              </h2>

              {/* Decorative line with gradient */}
              <motion.div
                className="w-24 h-[2px] mx-auto mb-6 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </motion.div>

            {/* Subheading */}
            <p
              className="text-white/60 text-xs sm:text-sm md:text-base lg:text-lg max-w-xs sm:max-w-lg md:max-w-2xl mx-auto leading-relaxed px-2"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              A showcase of my latest work in web development, featuring modern
              technologies and innovative solutions from internship and personal
              projects.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="group relative"
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Project Card */}
                <div className="relative p-4 sm:p-6 rounded-xl md:rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl hover:bg-black/50 hover:border-cyan-400/30 transition-all duration-500 overflow-hidden cursor-pointer">
                  {/* Enhanced glow effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl md:rounded-2xl blur-xl -z-10"
                    whileHover={{ scale: 1.05 }}
                  />

                  {/* Featured Badge */}
                  {project.featured && (
                    <motion.div
                      className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Badge
                        className="bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border-cyan-400/30 text-xs font-medium transition-all duration-300"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        Featured
                      </Badge>
                    </motion.div>
                  )}

                  {/* Project Image */}
                  <div className="relative mb-4 sm:mb-6 aspect-video rounded-lg md:rounded-xl overflow-hidden border border-white/10 bg-black/20 group/image">
                    {/* Next.js Image with proper fallback */}
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />

                    {/* Enhanced Hover overlay with correct icons */}
                    <motion.div
                      className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3 sm:space-x-4"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {project.github && (
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Button
                            variant="ghost"
                            size="icon"
                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-cyan-500/20 hover:bg-cyan-500/30 backdrop-blur-sm transition-all duration-300 border border-cyan-400/30"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(project.github, "_blank");
                            }}
                          >
                            <Github className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-300" />
                          </Button>
                        </motion.div>
                      )}
                      {project.live && (
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: -5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Button
                            variant="ghost"
                            size="icon"
                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-purple-500/20 hover:bg-purple-500/30 backdrop-blur-sm transition-all duration-300 border border-purple-400/30"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(project.live, "_blank");
                            }}
                          >
                            <Eye className="h-4 w-4 sm:h-5 sm:w-5 text-purple-300" />
                          </Button>
                        </motion.div>
                      )}
                    </motion.div>
                  </div>

                  {/* Project Info */}
                  <div className="space-y-3 sm:space-y-4">
                    {/* Title */}
                    <motion.h3
                      className="text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      whileHover={{ x: 5 }}
                    >
                      {project.title}
                    </motion.h3>

                    {/* Description */}
                    <p
                      className="text-white/70 text-xs sm:text-sm md:text-base leading-relaxed group-hover:text-white/80 transition-colors duration-300"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {project.description}
                    </p>

                    {/* Tools */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.tools.map((tool) => {
                        const IconComponent = tool.icon;
                        return (
                          <motion.div
                            key={tool.name}
                            className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-cyan-400/10 hover:border-cyan-400/20 transition-colors duration-300"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <IconComponent className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-white/60" />
                            <span
                              className="text-[10px] sm:text-xs text-white/60 font-medium"
                              style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                              {tool.name}
                            </span>
                          </motion.div>
                        );
                      })}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 sm:gap-2 text-white/60 hover:text-cyan-400 transition-colors duration-300 text-xs sm:text-sm font-medium"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                          whileHover={{ scale: 1.05, x: 3 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="h-3 w-3 sm:h-4 sm:w-4" />
                          GitHub
                        </motion.a>
                      )}
                      {project.live && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 sm:gap-2 text-white/60 hover:text-purple-400 transition-colors duration-300 text-xs sm:text-sm font-medium"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                          whileHover={{ scale: 1.05, x: 3 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                          Live Demo
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced CTA Section */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold px-3 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl md:rounded-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] border-0 relative overflow-hidden text-xs sm:text-sm md:text-base"
                style={{ fontFamily: "'Inter', sans-serif" }}
                onClick={() =>
                  window.open("https://github.com/HaekalAlif", "_blank")
                }
              >
                <span className="relative z-10 flex items-center">
                  <span className="block sm:hidden">View GitHub</span>
                  <span className="hidden sm:block">
                    Want to see more? Visit my GitHub
                  </span>
                  <motion.div
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="ml-1 sm:ml-2 md:ml-3"
                  >
                    <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.div>
                </span>
              </Button>
            </motion.div>

            {/* Bottom Divider */}
            <motion.div
              className="flex justify-center mt-12 sm:mt-16"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <motion.div
                className="h-[2px] w-24 sm:w-32 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"
                animate={{
                  boxShadow: [
                    "0 0 10px rgba(34, 211, 238, 0.3)",
                    "0 0 20px rgba(34, 211, 238, 0.6)",
                    "0 0 10px rgba(34, 211, 238, 0.3)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
