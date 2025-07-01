"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Code,
  GraduationCap,
  Briefcase,
  Award,
  Coffee,
  Heart,
  Music,
  Camera,
  Book,
  Gamepad2,
  Zap,
  Globe,
  Terminal,
  Brain,
  Cpu,
  Database,
  Sparkles,
  Star,
  Users,
  Server,
  Activity,
  Video,
} from "lucide-react";
import { Timeline } from "@/components/ui/timeline";

const About = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Timeline data based on actual CV
  const timelineData = [
    {
      title: "2025",
      content: (
        <div className="space-y-6">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-black/40 border border-white/10 rounded-xl p-6 backdrop-blur-xl hover:border-white/20 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-600/20 flex items-center justify-center">
                  <Briefcase className="h-5 w-5 text-white" />
                </div>
                <div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                    work
                  </span>
                </div>
              </div>

              <h4
                className="text-xl font-semibold text-white mb-2"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Fullstack Developer Internship
              </h4>

              <p
                className="text-white/70 text-sm mb-1"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                PT. Solution Labs · Feb 2025 - Present
              </p>

              <p
                className="text-white/60 text-sm leading-relaxed mb-4"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Developing real-time chat features and price negotiation using
                Laravel Reverb and Pusher. Building RESTful APIs with Laravel,
                designing responsive frontend with Next.js, and integrating
                payment gateways.
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  "Laravel",
                  "Next.js",
                  "Laravel Reverb",
                  "Pusher",
                  "Payment Gateway",
                ].map((skill, index) => (
                  <motion.span
                    key={index}
                    className="px-3 py-1 bg-white/[0.05] text-white/70 text-xs rounded-full border border-white/10 font-medium hover:bg-white/[0.08] hover:border-white/20 transition-all duration-200"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-pink-500/20 to-red-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-black/40 border border-white/10 rounded-xl p-6 backdrop-blur-xl hover:border-white/20 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-400/20 via-pink-500/20 to-red-600/20 flex items-center justify-center">
                  <Server className="h-5 w-5 text-white" />
                </div>
                <div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20">
                    education
                  </span>
                </div>
              </div>

              <h4
                className="text-xl font-semibold text-white mb-2"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Cloud Computing Teaching Assistant
              </h4>

              <p
                className="text-white/70 text-sm mb-1"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Universitas Sebelas Maret · Feb 2025 - Present
              </p>

              <p
                className="text-white/60 text-sm leading-relaxed mb-4"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Guiding practicum sessions on virtual machines, SSH server
                connections, and cloud service management. Teaching load
                balancing concepts and system scalability.
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  "Cloud Computing",
                  "Virtual Machines",
                  "SSH",
                  "Load Balancing",
                ].map((skill, index) => (
                  <motion.span
                    key={index}
                    className="px-3 py-1 bg-white/[0.05] text-white/70 text-xs rounded-full border border-white/10 font-medium hover:bg-white/[0.08] hover:border-white/20 transition-all duration-200"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-green-500/20 to-teal-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-black/40 border border-white/10 rounded-xl p-6 backdrop-blur-xl hover:border-white/20 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-emerald-400/20 via-green-500/20 to-teal-600/20 flex items-center justify-center">
                  <Brain className="h-5 w-5 text-white" />
                </div>
                <div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20">
                    education
                  </span>
                </div>
              </div>

              <h4
                className="text-xl font-semibold text-white mb-2"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Statistics and Probability Teaching Assistant
              </h4>

              <p
                className="text-white/70 text-sm mb-1"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Universitas Sebelas Maret · Feb 2025 - Present
              </p>

              <p
                className="text-white/60 text-sm leading-relaxed mb-4"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Assisting students with statistical analysis, probability
                theory, and practical applications in data science. Conducting
                tutorial sessions and evaluating student assignments.
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  "Statistics",
                  "Probability",
                  "Data Analysis",
                  "Mathematical Modeling",
                ].map((skill, index) => (
                  <motion.span
                    key={index}
                    className="px-3 py-1 bg-white/[0.05] text-white/70 text-xs rounded-full border border-white/10 font-medium hover:bg-white/[0.08] hover:border-white/20 transition-all duration-200"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div className="space-y-6">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-teal-500/20 to-cyan-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-black/40 border border-white/10 rounded-xl p-6 backdrop-blur-xl hover:border-white/20 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-emerald-400/20 via-teal-500/20 to-cyan-600/20 flex items-center justify-center">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-orange-500/10 text-orange-300 border border-orange-500/20">
                    leadership
                  </span>
                </div>
              </div>

              <h4
                className="text-xl font-semibold text-white mb-2"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Chief Organizer - Sebelas Maret IT Competition
              </h4>

              <p
                className="text-white/70 text-sm mb-1"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Sebelas Maret IT Competition · Apr 2024 - Jun 2024
              </p>

              <p
                className="text-white/60 text-sm leading-relaxed mb-4"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Led a national IT competition with 150+ teams from 10+
                provinces. Increased participation by 430% from previous year
                through effective promotion strategies and external
                partnerships.
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  "Leadership",
                  "Event Management",
                  "Team Coordination",
                  "Partnership",
                ].map((skill, index) => (
                  <motion.span
                    key={index}
                    className="px-3 py-1 bg-white/[0.05] text-white/70 text-xs rounded-full border border-white/10 font-medium hover:bg-white/[0.08] hover:border-white/20 transition-all duration-200"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-400/20 via-purple-500/20 to-fuchsia-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-black/40 border border-white/10 rounded-xl p-6 backdrop-blur-xl hover:border-white/20 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-violet-400/20 via-purple-500/20 to-fuchsia-600/20 flex items-center justify-center">
                  <Code className="h-5 w-5 text-white" />
                </div>
                <div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-300 border border-purple-500/20">
                    projects
                  </span>
                </div>
              </div>

              <h4
                className="text-xl font-semibold text-white mb-2"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Key Development Projects
              </h4>

              <p
                className="text-white/70 text-sm mb-1"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Personal & Academic Projects
              </p>

              <p
                className="text-white/60 text-sm leading-relaxed mb-4"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Built Absen-In (QR attendance system), LittleFairyFlorist (UMKM
                e-commerce with CMS), and Emailkomp website (student
                organization platform). Focused on practical solutions and
                modern web technologies.
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  "Laravel",
                  "Vue.js",
                  "React",
                  "QR Scanner",
                  "Geolocation API",
                ].map((skill, index) => (
                  <motion.span
                    key={index}
                    className="px-3 py-1 bg-white/[0.05] text-white/70 text-xs rounded-full border border-white/10 font-medium hover:bg-white/[0.08] hover:border-white/20 transition-all duration-200"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div className="space-y-6">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-indigo-500/20 to-purple-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-black/40 border border-white/10 rounded-xl p-6 backdrop-blur-xl hover:border-white/20 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-400/20 via-indigo-500/20 to-purple-600/20 flex items-center justify-center">
                  <GraduationCap className="h-5 w-5 text-white" />
                </div>
                <div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20">
                    education
                  </span>
                </div>
              </div>

              <h4
                className="text-xl font-semibold text-white mb-2"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Started University Journey
              </h4>

              <p
                className="text-white/70 text-sm mb-1"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                D3 Teknik Informatika - Universitas Sebelas Maret
              </p>

              <p
                className="text-white/60 text-sm leading-relaxed mb-4"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Began studying Information Technology at Sebelas Maret
                University. Started with programming fundamentals and gradually
                moved to web development specialization. Currently maintaining a
                3.95/4.00 GPA.
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  "Programming Fundamentals",
                  "Database Systems",
                  "Web Development",
                  "Software Engineering",
                ].map((skill, index) => (
                  <motion.span
                    key={index}
                    className="px-3 py-1 bg-white/[0.05] text-white/70 text-xs rounded-full border border-white/10 font-medium hover:bg-white/[0.08] hover:border-white/20 transition-all duration-200"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  // Enhanced interests with futuristic colors
  const interests = [
    {
      name: "Sport",
      icon: Activity,
      description: "Staying active and healthy",
      color: "from-green-400 to-teal-500",
    },
    {
      name: "Gaming",
      icon: Gamepad2,
      description: "Strategy & adventure games",
      color: "from-purple-400 to-pink-500",
    },
    {
      name: "Music",
      icon: Music,
      description: "Lo-fi while coding",
      color: "from-blue-400 to-cyan-500",
    },
    {
      name: "Editing",
      icon: Video,
      description: "Video and photo editing",
      color: "from-orange-400 to-red-500",
    },
  ];

  // Enhanced stats with icons and gradients - updated with realistic numbers
  const stats = [
    {
      number: "20+",
      label: "Projects Completed",
      icon: Terminal,
      gradient: "from-cyan-400 to-blue-500",
    },
    {
      number: "2+",
      label: "Years Learning",
      icon: Brain,
      gradient: "from-purple-400 to-pink-500",
    },
    {
      number: "15+",
      label: "Technologies",
      icon: Cpu,
      gradient: "from-green-400 to-teal-500",
    },
    {
      number: "3.95",
      label: "GPA",
      icon: Award,
      gradient: "from-yellow-400 to-orange-500",
    },
  ];

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
        ease: "easeInOut",
      },
    },
  };

  if (!isClient) {
    return (
      <section
        id="about"
        className="relative w-full min-h-screen bg-[#0a0a0a] flex items-center"
      >
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-2">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-white/60 text-base max-w-lg mx-auto">
              Get to know more about my journey and what drives me.
            </p>
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
        id="about"
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

        {/* Floating decorative stars */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${15 + Math.random() * 70}%`,
              top: `${15 + Math.random() * 70}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Star className="w-3 h-3 text-cyan-400/40" fill="currentColor" />
          </motion.div>
        ))}

        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 border border-cyan-500/20 rounded-full"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-32 right-16 w-16 h-16 border border-purple-500/20"
          animate={{
            rotate: [0, -360],
            y: [-10, 10, -10],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 right-20 w-12 h-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-sm"
          animate={{
            x: [-20, 20, -20],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Animated Glow Effects */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-[600px] h-[300px] bg-gradient-to-r from-cyan-500/[0.02] to-blue-500/[0.02] rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.02, 0.05, 0.02],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/[0.02] to-pink-500/[0.02] rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.02, 0.04, 0.02],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
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
            {/* Futuristic Header */}
            <motion.div className="text-center mb-16" variants={itemVariants}>
              <motion.div className="relative inline-block">
                <h2
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 relative"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    textShadow: "0 0 40px rgba(255, 255, 255, 0.3)",
                  }}
                >
                  About Me
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
                    About Me
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

              <p
                className="text-white/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                A passionate Information Technology student and fullstack
                developer with hands-on experience in modern web technologies.
                Here's my journey and what drives me every day.
              </p>
            </motion.div>

            {/* Enhanced Personal Info & Stats */}
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16"
              variants={itemVariants}
            >
              {/* Personal Info with holographic effect */}
              <div className="lg:col-span-2 relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative bg-black/40 border border-white/10 rounded-xl p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-400/20 to-blue-500/20 flex items-center justify-center">
                      <Heart className="h-4 w-4 text-cyan-400" />
                    </div>
                    <h3
                      className="text-lg font-semibold text-white"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      Get to Know Me
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <motion.div
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/[0.02] transition-colors duration-200"
                      whileHover={{ x: 5 }}
                    >
                      <MapPin className="h-4 w-4 text-cyan-400 mt-1 flex-shrink-0" />
                      <div>
                        <p
                          className="text-white/80 text-sm"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          <span className="font-medium text-cyan-400">
                            Based in:
                          </span>{" "}
                          Surakarta, Indonesia
                        </p>
                      </div>
                    </motion.div>
                    <motion.div
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/[0.02] transition-colors duration-200"
                      whileHover={{ x: 5 }}
                    >
                      <GraduationCap className="h-4 w-4 text-purple-400 mt-1 flex-shrink-0" />
                      <div>
                        <p
                          className="text-white/80 text-sm mb-2"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          <span className="font-medium text-purple-400">
                            Education:
                          </span>{" "}
                          D3 Teknik Informatika - UNS
                        </p>
                        <p
                          className="text-white/60 text-sm leading-relaxed"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          Currently maintaining a 3.95/4.00 GPA while actively
                          working on fullstack development projects and serving
                          as a Cloud Computing Teaching Assistant.
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Enhanced Stats */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-red-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative bg-black/40 border border-white/10 rounded-xl p-6 backdrop-blur-xl hover:border-purple-400/30 transition-all duration-300">
                  <h3
                    className="text-lg font-semibold text-white mb-4"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Quick Stats
                  </h3>
                  <div className="space-y-4">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        className="flex items-center justify-between p-2 rounded-lg hover:bg-white/[0.02] transition-colors duration-200 group/stat"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-6 h-6 rounded-md bg-gradient-to-r ${stat.gradient} flex items-center justify-center`}
                          >
                            <stat.icon className="h-3 w-3 text-white" />
                          </div>
                          <span
                            className="text-white/70 text-sm group-hover/stat:text-white transition-colors duration-200"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {stat.label}
                          </span>
                        </div>
                        <span
                          className="text-white font-bold text-lg"
                          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                          {stat.number}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Timeline Section using Aceternity UI */}
            <motion.div className="mb-8" variants={itemVariants}>
              <div className="relative">
                {/* Custom dark background for timeline */}
                <div className="bg-[#0a0a0a] rounded-2xl border border-white/10 backdrop-blur-xl overflow-hidden">
                  <Timeline data={timelineData} />
                </div>
              </div>
            </motion.div>

            {/* Enhanced Interests */}
            <motion.div className="text-center" variants={itemVariants}>
              <h3
                className="text-2xl md:text-3xl font-bold text-white mb-8"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  textShadow: "0 0 30px rgba(255, 255, 255, 0.2)",
                }}
              >
                When I'm Not Coding
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.name}
                    className="relative group"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -8, scale: 1.05 }}
                  >
                    {/* Card glow */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${interest.color} opacity-0 group-hover:opacity-20 rounded-xl blur-xl transition-opacity duration-500`}
                    />

                    <div className="relative bg-black/40 border border-white/10 rounded-xl p-4 backdrop-blur-xl hover:border-white/20 transition-all duration-300 group cursor-pointer">
                      <motion.div
                        className={`w-12 h-12 rounded-lg bg-gradient-to-r ${interest.color} bg-opacity-20 flex items-center justify-center mx-auto mb-3 group-hover:shadow-lg transition-all duration-300`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <interest.icon className="h-6 w-6 text-white group-hover:drop-shadow-lg transition-all duration-300" />
                      </motion.div>
                      <h4
                        className="text-white font-semibold text-sm mb-1"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {interest.name}
                      </h4>
                      <p
                        className="text-white/50 text-xs"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {interest.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
