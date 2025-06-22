"use client";
import React from "react";
import { motion } from "framer-motion";

interface SectionTransitionProps {
  variant?: "gradient" | "particles" | "wave";
  height?: string;
}

const SectionTransition: React.FC<SectionTransitionProps> = ({
  variant = "gradient",
  height = "h-32",
}) => {
  const particles = Array.from({ length: 20 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute w-0.5 h-0.5 bg-white/30 rounded-full"
      initial={{
        x:
          Math.random() *
          (typeof window !== "undefined" ? window.innerWidth : 1920),
        y: 0,
        opacity: 0,
      }}
      animate={{
        y: [0, 200],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: Math.random() * 3 + 2,
        repeat: Infinity,
        delay: Math.random() * 2,
      }}
    />
  ));

  if (variant === "gradient") {
    return (
      <div
        className={`relative w-full ${height} bg-gradient-to-b from-black via-[#0a0a0a] to-[#0a0a0a] overflow-hidden`}
      >
        {/* Subtle grid fade */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-50" />

        {/* Flowing line */}
        <motion.div
          className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={{
            scaleX: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-24 bg-white/[0.01] rounded-full blur-3xl" />
      </div>
    );
  }

  if (variant === "particles") {
    return (
      <div className={`relative w-full ${height} bg-[#0a0a0a] overflow-hidden`}>
        {particles}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.005] to-transparent" />
      </div>
    );
  }

  if (variant === "wave") {
    return (
      <div className={`relative w-full ${height} bg-[#0a0a0a] overflow-hidden`}>
        <motion.div
          className="absolute inset-0"
          style={{
            background: `repeating-linear-gradient(
              90deg,
              transparent,
              transparent 48px,
              rgba(255,255,255,0.01) 50px,
              rgba(255,255,255,0.01) 52px
            )`,
          }}
          animate={{
            x: [0, 100],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    );
  }

  return null;
};

export default SectionTransition;
