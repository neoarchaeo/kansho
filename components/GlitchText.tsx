"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useCallback } from "react";

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "span" | "p" | "div";
  glitchOnHover?: boolean;
  flickerEnabled?: boolean;
}

export default function GlitchText({
  text,
  className = "",
  as: Tag = "span",
  glitchOnHover = false,
  flickerEnabled = false,
}: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false);
  const [displayText, setDisplayText] = useState(text);

  const triggerGlitch = useCallback(() => {
    if (isGlitching) return;
    setIsGlitching(true);

    const chars = "アイウエオカキクケコ01_//::";
    let iterations = 0;
    const maxIterations = 6;

    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, i) => {
            if (i < iterations) return text[i];
            if (char === " ") return " ";
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
      iterations++;
      if (iterations > maxIterations) {
        clearInterval(interval);
        setDisplayText(text);
        setIsGlitching(false);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [text, isGlitching]);

  useEffect(() => {
    setDisplayText(text);
  }, [text]);

  return (
    <motion.span
      className={`inline-block ${className}`}
      onHoverStart={glitchOnHover ? triggerGlitch : undefined}
      animate={
        flickerEnabled
          ? {
              opacity: [1, 0.97, 1, 0.95, 1],
            }
          : {}
      }
      transition={
        flickerEnabled
          ? {
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
            }
          : {}
      }
    >
      <Tag
        className={isGlitching ? "glitch-active" : ""}
        aria-label={text}
      >
        {displayText}
      </Tag>
    </motion.span>
  );
}
