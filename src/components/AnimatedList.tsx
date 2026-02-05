"use client";

import { motion } from "framer-motion";
import { ReactNode, Children, isValidElement } from "react";

interface AnimatedListProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  initialDelay?: number;
}

export default function AnimatedList({
  children,
  className,
  staggerDelay = 0.05,
  initialDelay = 0.1,
}: AnimatedListProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: initialDelay,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1] as const, // easeOutCubic
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className={className}
    >
      {Children.map(children, (child, index) => {
        if (isValidElement(child)) {
          return (
            <motion.div key={child.key || index} variants={item}>
              {child}
            </motion.div>
          );
        }
        return (
          <motion.div key={index} variants={item}>
            {child}
          </motion.div>
        );
      })}
    </motion.div>
  );
}

