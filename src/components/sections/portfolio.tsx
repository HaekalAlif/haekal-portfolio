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

      <section className="relative w-full min-h-screen bg-[#0a0a0a] py-6 sm:py-6 md:py-6 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:60px_60px] md:bg-[size:80px_80px]" />

        {/* Enhanced Glow Effects with more animation */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[400px] h-[200px] sm:w-[600px] sm:h-[300px] bg-white/[0.03] rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.06, 0.03],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-white/[0.02] rounded-full blur-3xl"
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
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 relative"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: "700",
                textShadow:
                  "0 0 40px rgba(255, 255, 255, 0.3), 0 0 80px rgba(255, 255, 255, 0.1)",
                filter: "drop-shadow(0 0 25px rgba(255, 255, 255, 0.2))",
              }}
            >
              Featured Projects
              {/* Glow backdrop */}
              <div className="absolute inset-0 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white/10 blur-lg -z-10">
                Featured Projects
              </div>
            </h2>

            {/* Subheading */}
            <p
              className="text-white/60 text-xs sm:text-sm md:text-base lg:text-lg max-w-xs sm:max-w-lg md:max-w-2xl mx-auto leading-relaxed px-2"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: "400",
              }}
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
                <div className="relative p-4 sm:p-6 rounded-xl md:rounded-2xl border border-white/10 bg-white/[0.01] backdrop-blur-sm hover:bg-white/[0.03] transition-all duration-500 overflow-hidden cursor-pointer">
                  {/* Enhanced glow effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl md:rounded-2xl blur-xl -z-10"
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
                        className="bg-white/15 hover:bg-white/25 text-white/90 border-white/30 text-xs font-medium transition-all duration-300"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        Featured
                      </Badge>
                    </motion.div>
                  )}

                  {/* Project Image */}
                  <div className="relative mb-4 sm:mb-6 aspect-video rounded-lg md:rounded-xl overflow-hidden border border-white/10 bg-white/[0.02] group/image">
                    {/* Next.js Image with proper fallback */}
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      onError={(e) => {
                        // Fallback to placeholder if image fails to load
                        e.currentTarget.style.display = "none";
                      }}
                    />

                    {/* Enhanced Hover overlay with correct icons */}
                    <motion.div
                      className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3 sm:space-x-4"
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
                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all duration-300"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(project.github, "_blank");
                            }}
                          >
                            <Github className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
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
                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all duration-300"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(project.live, "_blank");
                            }}
                          >
                            <Eye className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                          </Button>
                        </motion.div>
                      )}
                    </motion.div>
                  </div>

                  {/* Project Info */}
                  <div className="space-y-3 sm:space-y-4">
                    {/* Title */}
                    <motion.h3
                      className="text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-white/95 transition-colors duration-300"
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: "600",
                      }}
                      whileHover={{ x: 5 }}
                    >
                      {project.title}
                    </motion.h3>

                    {/* Description */}
                    <p
                      className="text-white/70 text-xs sm:text-sm md:text-base leading-relaxed group-hover:text-white/80 transition-colors duration-300"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: "400",
                      }}
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
                            className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300"
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
                          className="flex items-center gap-1.5 sm:gap-2 text-white/60 hover:text-white transition-colors duration-300 text-xs sm:text-sm font-medium"
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
                          className="flex items-center gap-1.5 sm:gap-2 text-white/60 hover:text-white transition-colors duration-300 text-xs sm:text-sm font-medium"
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
                className="group bg-white hover:bg-white/95 text-black font-semibold px-3 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl md:rounded-2xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] border-0 relative overflow-hidden text-xs sm:text-sm md:text-base"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: "600",
                }}
                onClick={() =>
                  window.open("https://github.com/HaekalAlif", "_blank")
                }
              >
                <span className="relative z-10 flex items-center">
                  {/* Compact mobile text, full text on larger screens */}
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
                <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
              <div className="h-[1px] w-24 sm:w-32 bg-gradient-to-r from-transparent via-white/30 to-transparent shadow-[0_0_15px_rgba(255,255,255,0.2)]" />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
