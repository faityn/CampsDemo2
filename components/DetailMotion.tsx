"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
};

export function Reveal({ children, className = "" }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

type ParallaxImageProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
};

export function ParallaxImage({
  src,
  alt,
  className = "",
  imageClassName = "",
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        className={`h-[114%] w-full object-cover ${imageClassName}`}
      />
    </div>
  );
}
