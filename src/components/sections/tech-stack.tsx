"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiReact,
  SiVuedotjs,
  SiTailwindcss,
  SiLaravel,
  SiExpress,
  SiFirebase,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiDocker,
  SiPostman,
} from "react-icons/si";
import { Code, Database, Globe, Zap } from "lucide-react";

const TechStack = () => {
  const [isClient, setIsClient] = useState(false);
  const [activeCategory, setActiveCategory] = useState(-1);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const techCategories = [
    {
      title: "Frontend",
      subtitle: "User interfaces & experiences",
      icon: Code,
      gradient: "from-cyan-400/20 via-blue-500/20 to-purple-600/20",
      glowColor: "rgba(59, 130, 246, 0.3)",
      borderColor: "border-cyan-400/20",
      technologies: [
        { name: "Next.js", icon: SiNextdotjs, color: "text-cyan-400" },
        { name: "React", icon: SiReact, color: "text-blue-400" },
        { name: "Vue.js", icon: SiVuedotjs, color: "text-emerald-400" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-300" },
      ],
    },
    {
      title: "Backend",
      subtitle: "Server-side development",
      icon: Globe,
      gradient: "from-emerald-400/20 via-teal-500/20 to-cyan-600/20",
      glowColor: "rgba(20, 184, 166, 0.3)",
      borderColor: "border-emerald-400/20",
      technologies: [
        { name: "Laravel", icon: SiLaravel, color: "text-red-400" },
        { name: "Express.js", icon: SiExpress, color: "text-green-400" },
        { name: "Next.js API", icon: SiNextdotjs, color: "text-cyan-400" },
        { name: "Firebase", icon: SiFirebase, color: "text-orange-400" },
      ],
    },
    {
      title: "Database",
      subtitle: "Data storage & management",
      icon: Database,
      gradient: "from-violet-400/20 via-purple-500/20 to-fuchsia-600/20",
      glowColor: "rgba(147, 51, 234, 0.3)",
      borderColor: "border-purple-400/20",
      technologies: [
        { name: "MySQL", icon: SiMysql, color: "text-blue-400" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-300" },
        { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
        { name: "Firestore", icon: SiFirebase, color: "text-orange-400" },
      ],
    },
    {
      title: "Tools",
      subtitle: "Development & deployment",
      icon: Zap,
      gradient: "from-orange-400/20 via-red-500/20 to-pink-600/20",
      glowColor: "rgba(239, 68, 68, 0.3)",
      borderColor: "border-orange-400/20",
      technologies: [
        { name: "Git", icon: SiGit, color: "text-orange-400" },
        { name: "GitHub", icon: SiGithub, color: "text-white" },
        { name: "Docker", icon: SiDocker, color: "text-blue-400" },
        { name: "Postman", icon: SiPostman, color: "text-orange-400" },
      ],
    },
  ];

  const stats = [
    {
      number: "20+",
      label: "Technologies",
      icon: Code,
      gradient: "from-cyan-400 to-blue-500",
    },
    {
      number: "4",
      label: "Categories",
      icon: Globe,
      gradient: "from-purple-400 to-pink-500",
    },
    {
      number: "50+",
      label: "Projects",
      icon: Database,
      gradient: "from-green-400 to-teal-500",
    },
    {
      number: "∞",
      label: "Learning",
      icon: Zap,
      gradient: "from-orange-400 to-red-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  if (!isClient) {
    return (
      <section className="relative w-full min-h-screen bg-[#0a0a0a] flex items-center">
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-white mb-4">Tech Stack</h2>
            <div className="w-16 h-[1px] bg-white/30 mx-auto mb-8"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <section
        id="tech-stack"
        className="relative w-full min-h-screen bg-[#0a0a0a] overflow-hidden py-8 md:py-8"
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

        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-32 right-20 w-16 h-16 border border-purple-500/20 rounded-lg"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-40 left-16 w-12 h-12 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-sm"
          animate={{
            y: [-15, 15, -15],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Animated Glow Effects */}
        <motion.div
          className="absolute top-1/3 left-1/3 w-[500px] h-[250px] bg-gradient-to-r from-purple-500/[0.02] to-cyan-500/[0.02] rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.02, 0.04, 0.02],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Header - Updated Typography */}
            <motion.div className="text-center mb-10" variants={itemVariants}>
              <motion.div className="relative inline-block">
                <h2
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 relative"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    textShadow: "0 0 40px rgba(255, 255, 255, 0.3)",
                  }}
                >
                  Tech Stack & Tools
                  {/* Animated background glow */}
                  <motion.div
                    className="absolute inset-0 text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-600/20 bg-clip-text text-transparent blur-sm -z-10"
                    animate={{
                      opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    Tech Stack & Tools
                  </motion.div>
                </h2>

                {/* Decorative line with gradient */}
                <motion.div
                  className="w-24 h-[2px] mx-auto mb-6 bg-gradient-to-r from-transparent via-purple-400/60 to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </motion.div>

              <p
                className="text-white/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Technologies and tools I use to build modern applications
              </p>
            </motion.div>

            {/* Stats Grid - Improved spacing */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
              variants={itemVariants}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${stat.gradient} bg-opacity-20 flex items-center justify-center group-hover:shadow-lg transition-all duration-300`}
                  >
                    <stat.icon className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div
                    className="text-2xl font-bold text-white mb-1"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {stat.number}
                  </div>
                  <div
                    className="text-white/50 text-sm"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Tech Categories Grid - Improved spacing and layout */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
              variants={itemVariants}
            >
              {techCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  className="relative group"
                  variants={itemVariants}
                  onHoverStart={() => setActiveCategory(categoryIndex)}
                  onHoverEnd={() => setActiveCategory(-1)}
                  whileHover={{ y: -8 }}
                >
                  {/* Card glow effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${category.gradient} rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <div className="relative bg-black/40 border border-white/10 rounded-xl p-6 backdrop-blur-xl hover:border-white/20 transition-all duration-300 h-full">
                    {/* Category Header - Improved spacing */}
                    <div className="flex items-center gap-3 mb-6">
                      <div
                        className={`w-10 h-10 rounded-lg bg-gradient-to-r ${category.gradient} flex items-center justify-center`}
                      >
                        <category.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3
                          className="text-lg font-semibold text-white"
                          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                          {category.title}
                        </h3>
                        <p
                          className="text-white/50 text-sm"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {category.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Technology Icons Grid - Better spacing */}
                    <div className="grid grid-cols-2 gap-4">
                      {category.technologies.map((tech, techIndex) => {
                        const IconComponent = tech.icon;
                        return (
                          <motion.div
                            key={tech.name}
                            className="group/tech relative flex flex-col items-center p-3 rounded-lg hover:bg-white/[0.02] transition-colors duration-200"
                            whileHover={{ scale: 1.05, y: -2 }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: techIndex * 0.05 }}
                          >
                            <div className="relative w-12 h-12 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center group-hover/tech:bg-white/[0.08] group-hover/tech:border-white/20 transition-all duration-300 mb-3">
                              <IconComponent
                                className={`h-6 w-6 ${tech.color} group-hover/tech:scale-110 transition-transform duration-300`}
                              />
                            </div>

                            <span
                              className="text-xs text-white/60 group-hover/tech:text-white/90 transition-colors duration-300 text-center font-medium"
                              style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                              {tech.name}
                            </span>

                            {/* Enhanced tooltip */}
                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                              <div className="bg-black/90 border border-white/30 px-3 py-1.5 text-xs text-white rounded-lg whitespace-nowrap shadow-lg">
                                {tech.name}
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced Bottom Divider */}
            <motion.div className="flex justify-center" variants={itemVariants}>
              <motion.div
                className="h-[2px] w-32 bg-gradient-to-r from-transparent via-purple-400/60 to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                animate={{
                  boxShadow: [
                    "0 0 10px rgba(147, 51, 234, 0.3)",
                    "0 0 20px rgba(147, 51, 234, 0.6)",
                    "0 0 10px rgba(147, 51, 234, 0.3)",
                  ],
                  scaleX: [0, 1, 1], // preserve the scaleX animation
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  scaleX: { duration: 1 }, // scaleX transition for initial animation
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default TechStack;
