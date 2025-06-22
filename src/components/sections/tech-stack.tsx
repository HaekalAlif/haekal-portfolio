"use client";
import React from "react";
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
  SiVercel,
  SiDocker,
  SiPostman,
} from "react-icons/si";

const TechStack = () => {
  const techCategories = [
    {
      title: "Frontend",
      subtitle: "User interfaces & experiences",
      technologies: [
        { name: "Next.js", icon: SiNextdotjs },
        { name: "React", icon: SiReact },
        { name: "Vue.js", icon: SiVuedotjs },
        { name: "Tailwind CSS", icon: SiTailwindcss },
      ],
    },
    {
      title: "Backend",
      subtitle: "Server-side development",
      technologies: [
        { name: "Laravel", icon: SiLaravel },
        { name: "Express.js", icon: SiExpress },
        { name: "Next.js API", icon: SiNextdotjs },
        { name: "Firebase", icon: SiFirebase },
      ],
    },
    {
      title: "Database",
      subtitle: "Data storage & management",
      technologies: [
        { name: "MySQL", icon: SiMysql },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Firestore", icon: SiFirebase },
      ],
    },
    {
      title: "Tools",
      subtitle: "Development & deployment",
      technologies: [
        { name: "Git", icon: SiGit },
        { name: "GitHub", icon: SiGithub },
        { name: "Docker", icon: SiDocker },
        { name: "Postman", icon: SiPostman },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.08,
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
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

      <section className="relative w-full min-h-[100dvh] bg-[#0a0a0a] overflow-hidden flex items-center">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:50px_50px] md:bg-[size:80px_80px]" />

        {/* Multiple Glow Layers with Animation */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[200px] h-[100px] sm:w-[500px] sm:h-[250px] md:w-[600px] md:h-[300px] bg-white/[0.04] rounded-full blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.04, 0.07, 0.04],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[150px] h-[150px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] bg-white/[0.03] rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.03, 0.06, 0.03],
            rotate: [0, -15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[100px] sm:w-[700px] sm:h-[150px] md:w-[800px] md:h-[200px] bg-white/[0.02] rounded-full blur-3xl" />

        {/* Scanning Lines */}
        <motion.div
          className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"
          animate={{ y: ["0%", "100%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-white/30 to-transparent"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
            delay: 4,
          }}
        />

        {/* Decorative Corner Elements - Hidden on mobile */}
        <div className="hidden sm:block absolute top-6 left-6 w-12 h-12 md:w-16 md:h-16 border-l border-t border-white/10 rounded-tl-2xl" />
        <div className="hidden sm:block absolute bottom-6 right-6 w-12 h-12 md:w-16 md:h-16 border-r border-b border-white/10 rounded-br-2xl" />

        {/* Main Content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-4 md:px-6 py-8 sm:py-12 md:py-16">
          <motion.div
            className="text-center mb-8 sm:mb-10 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Main Heading with Enhanced Glow */}
            <h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 sm:mb-3 md:mb-4 relative px-2"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: "700",
                textShadow:
                  "0 0 40px rgba(255, 255, 255, 0.3), 0 0 80px rgba(255, 255, 255, 0.1)",
                filter: "drop-shadow(0 0 25px rgba(255, 255, 255, 0.2))",
              }}
            >
              Tech Stack & Tools
              {/* Glow backdrop */}
              <div className="absolute inset-0 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white/10 blur-lg -z-10">
                Tech Stack & Tools
              </div>
            </h2>

            {/* Subheading */}
            <p
              className="text-white/60 text-xs sm:text-sm md:text-base max-w-xs sm:max-w-md md:max-w-lg mx-auto leading-relaxed px-2"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: "400",
              }}
            >
              Frameworks, databases, and tools I use to build modern
              applications.
            </p>
          </motion.div>

          {/* Enhanced Tech Categories Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8 mb-8 sm:mb-10 md:mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {techCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                className="relative"
                variants={categoryVariants}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                {/* Category Container */}
                <div className="relative p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl border border-white/10 bg-white/[0.01] backdrop-blur-sm hover:bg-white/[0.03] transition-all duration-300 group cursor-pointer">
                  {/* Enhanced Glow Effect */}
                  <motion.div
                    className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl md:rounded-2xl blur-xl -z-10"
                    whileHover={{ scale: 1.05 }}
                  />

                  {/* Category Header */}
                  <div className="text-center mb-4 sm:mb-5">
                    <motion.h3
                      className="text-sm sm:text-base md:text-lg font-semibold text-white mb-1 group-hover:text-white/95 transition-colors duration-300"
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: "600",
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {category.title}
                    </motion.h3>
                    <p
                      className="text-white/50 text-xs group-hover:text-white/60 transition-colors duration-300"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: "400",
                      }}
                    >
                      {category.subtitle}
                    </p>
                  </div>

                  {/* Technology Icons Grid */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    {category.technologies.map((tech, techIndex) => {
                      const IconComponent = tech.icon;
                      return (
                        <motion.div
                          key={tech.name}
                          className="group/tech relative flex flex-col items-center"
                          variants={iconVariants}
                          whileHover={{
                            scale: 1.05,
                            y: -2,
                            filter:
                              "drop-shadow(0 0 15px rgba(255,255,255,0.4))",
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {/* Icon Container */}
                          <motion.div
                            className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg md:rounded-xl border border-white/15 bg-white/[0.03] hover:bg-white/[0.08] backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:border-white/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] overflow-hidden cursor-pointer"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                          >
                            <IconComponent
                              className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-white/70 group-hover/tech:text-white transition-colors duration-300 relative z-10"
                              style={{
                                filter:
                                  "drop-shadow(0 0 8px rgba(255,255,255,0.3))",
                              }}
                            />

                            {/* Enhanced ripple effect */}
                            <motion.div
                              className="absolute inset-0 bg-white/10 rounded-lg md:rounded-xl opacity-0 group-hover/tech:opacity-100"
                              initial={{ scale: 0 }}
                              whileHover={{ scale: [0, 1.2, 1] }}
                              transition={{ duration: 0.3 }}
                            />
                          </motion.div>

                          {/* Technology Name */}
                          <motion.span
                            className="mt-2 sm:mt-2.5 text-xs sm:text-sm text-white/60 group-hover/tech:text-white/90 transition-colors duration-300 text-center leading-tight max-w-full truncate"
                            style={{
                              fontFamily: "'Inter', sans-serif",
                              fontWeight: "500",
                            }}
                            whileHover={{ scale: 1.05 }}
                          >
                            {tech.name}
                          </motion.span>

                          {/* Enhanced tooltip with animation */}
                          <motion.div
                            className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover/tech:opacity-100 transition-all duration-300 pointer-events-none"
                            initial={{ y: 10, opacity: 0 }}
                            whileHover={{ y: 0, opacity: 1 }}
                          >
                            <div
                              className="bg-black/90 border border-white/30 px-3 py-1.5 text-xs text-white/90 whitespace-nowrap rounded-lg backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                              style={{
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: "500",
                              }}
                            >
                              {tech.name}
                            </div>
                          </motion.div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Bottom Section */}
          <motion.div
            className="flex flex-col items-center space-y-4 sm:space-y-5 md:space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Interactive Stats */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-center">
              {[
                { number: "20+", label: "Technologies" },
                { number: "1+", label: "Years Experience" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="space-y-1 cursor-pointer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  <motion.div
                    className="text-xl sm:text-2xl md:text-3xl font-bold text-white"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    whileHover={{
                      textShadow: "0 0 20px rgba(255, 255, 255, 0.5)",
                      scale: 1.1,
                    }}
                  >
                    {stat.number}
                  </motion.div>
                  <div
                    className="text-white/50 text-xs sm:text-sm"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Animated Bottom Divider */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.div
                className="h-[1px] w-20 sm:w-24 md:w-32 bg-gradient-to-r from-transparent via-white/30 to-transparent shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                animate={{
                  boxShadow: [
                    "0 0 15px rgba(255,255,255,0.2)",
                    "0 0 25px rgba(255,255,255,0.4)",
                    "0 0 15px rgba(255,255,255,0.2)",
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

export default TechStack;
