"use client";

import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;
const vp = { once: true, margin: "-60px" } as const;

type Props = HTMLMotionProps<"div"> & { delay?: number };

export function FadeUp({ delay = 0, ...props }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={vp}
      transition={{ duration: 1.7, ease, delay }}
      {...props}
    />
  );
}

export function FadeIn({ delay = 0, ...props }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={vp}
      transition={{ duration: 1.7, ease, delay }}
      {...props}
    />
  );
}

export function SlideRight({ delay = 0, ...props }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -36 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={vp}
      transition={{ duration: 1.7, ease, delay }}
      {...props}
    />
  );
}

export function SlideLeft({ delay = 0, ...props }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 36 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={vp}
      transition={{ duration: 1.7, ease, delay }}
      {...props}
    />
  );
}
