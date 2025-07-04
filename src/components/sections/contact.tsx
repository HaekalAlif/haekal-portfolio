"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Code,
  User,
  Briefcase,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import Lanyard from "../Lanyard/Lanyard";

const Contact = () => {
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setIsMobile(window.innerWidth < 768);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
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

  if (!isClient) {
    return null;
  }

  return (
    <>
      {/* Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <section
        id="contact"
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

        {/* Glow Effects */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[600px] h-[300px] bg-gradient-to-r from-cyan-500/[0.04] to-blue-500/[0.04] rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.04, 0.06, 0.04],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/[0.02] to-pink-500/[0.02] rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.02, 0.05, 0.02],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Main Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <motion.div
            className="text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Heading */}
            <motion.div
              className="relative inline-block mb-4 sm:mb-6"
              variants={itemVariants}
            >
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 relative"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  textShadow: "0 0 40px rgba(255, 255, 255, 0.3)",
                }}
              >
                Let's Connect
                {/* Animated background glow */}
                <motion.div
                  className="absolute inset-0 text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-600/20 bg-clip-text text-transparent blur-sm -z-10"
                  animate={{
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  Let's Connect
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
            <motion.p
              className="text-white/60 text-sm sm:text-base md:text-lg max-w-xs sm:max-w-lg md:max-w-xl mx-auto mb-12 sm:mb-16 leading-relaxed px-2"
              variants={itemVariants}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Whether it's a collaboration or just a quick hello — feel free to
              reach out.
            </motion.p>

            {/* Personal Information */}
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16"
              variants={itemVariants}
            >
              {/* Contact Info */}
              <div className="space-y-4 sm:space-y-6">
                <motion.div
                  className="bg-black/40 border border-white/10 rounded-xl p-4 sm:p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.02,
                    borderColor: "rgba(34, 211, 238, 0.3)",
                  }}
                >
                  <h3
                    className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Contact Information
                  </h3>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center gap-2 sm:gap-3 text-white/70">
                      <Mail className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0 text-cyan-400" />
                      <span
                        className="text-xs sm:text-sm break-all"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        haekalalifputra@gmail.com
                      </span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 text-white/70">
                      <Phone className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0 text-green-400" />
                      <span
                        className="text-xs sm:text-sm"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        +62 831 5996 1555
                      </span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 text-white/70">
                      <MapPin className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0 text-purple-400" />
                      <span
                        className="text-xs sm:text-sm"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        Surakarta, Indonesia
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Social Media */}
                <motion.div
                  className="bg-black/40 border border-white/10 rounded-xl p-4 sm:p-6 backdrop-blur-xl hover:border-purple-400/30 transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.02,
                    borderColor: "rgba(147, 51, 234, 0.3)",
                  }}
                >
                  <h3
                    className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Follow Me
                  </h3>
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    <motion.a
                      href="https://github.com/HaekalAlif"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 sm:gap-2 text-white/60 hover:text-cyan-400 transition-all duration-300 p-2 sm:p-2.5 rounded-lg hover:bg-cyan-400/10"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label="GitHub Profile"
                    >
                      <Github className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                      <span
                        className="text-xs sm:text-sm font-medium"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        GitHub
                      </span>
                    </motion.a>
                    <motion.a
                      href="https://linkedin.com/in/muhammad-haekal-alif-putra"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 sm:gap-2 text-white/60 hover:text-blue-400 transition-all duration-300 p-2 sm:p-2.5 rounded-lg hover:bg-blue-400/10"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                      <span
                        className="text-xs sm:text-sm font-medium"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        LinkedIn
                      </span>
                    </motion.a>
                    <motion.a
                      href="https://instagram.com/mhmmdhaekall_"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 sm:gap-2 text-white/60 hover:text-purple-400 transition-all duration-300 p-2 sm:p-2.5 rounded-lg hover:bg-purple-400/10"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label="Instagram Profile"
                    >
                      <FaInstagram className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                      <span
                        className="text-xs sm:text-sm font-medium"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        Instagram
                      </span>
                    </motion.a>
                    <motion.a
                      href="mailto:haekalalifputra@gmail.com"
                      className="flex items-center gap-1.5 sm:gap-2 text-white/60 hover:text-cyan-400 transition-all duration-300 p-2 sm:p-2.5 rounded-lg hover:bg-cyan-400/10"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label="Email Contact"
                    >
                      <Mail className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                      <span
                        className="text-xs sm:text-sm font-medium"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        Email
                      </span>
                    </motion.a>
                  </div>
                </motion.div>

                {/* Professional Info */}
                <motion.div
                  className="bg-black/40 border border-white/10 rounded-xl p-4 sm:p-6 backdrop-blur-xl hover:border-blue-400/30 transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.02,
                    borderColor: "rgba(59, 130, 246, 0.3)",
                  }}
                >
                  <h3
                    className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Professional
                  </h3>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center gap-2 sm:gap-3 text-white/70">
                      <Code className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0 text-cyan-400" />
                      <span
                        className="text-xs sm:text-sm"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        Full Stack Developer
                      </span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 text-white/70">
                      <Briefcase className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0 text-green-400" />
                      <span
                        className="text-xs sm:text-sm"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        Available for Projects
                      </span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 text-white/70">
                      <User className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0 text-purple-400" />
                      <span
                        className="text-xs sm:text-sm"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        React • Next.js • TypeScript
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Lanyard */}
              <motion.div
                className="bg-black/40 border border-white/10 rounded-xl p-4 sm:p-6 backdrop-blur-xl overflow-hidden hover:border-cyan-400/30 transition-all duration-300"
                variants={itemVariants}
                whileHover={{
                  scale: 1.02,
                  borderColor: "rgba(34, 211, 238, 0.3)",
                }}
              >
                <h3
                  className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Haekal Alif Putra
                </h3>
                <div className="h-80 sm:h-96 md:h-[28rem] lg:h-[32rem] relative -mt-20">
                  <Lanyard
                    position={[0, 0, 20]}
                    gravity={[0, -35, 0]}
                    fov={isMobile ? 15 : 15}
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Bottom Divider */}
            <motion.div className="flex justify-center" variants={itemVariants}>
              <motion.div
                className="h-[2px] w-32 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
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

export default Contact;
