
import { motion } from "framer-motion";
import { prefersReducedMotion } from "@/lib/utils";

interface PageTransitionProps {
  children: React.ReactNode;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  in: {
    opacity: 1,
    y: 0
  },
  out: {
    opacity: 0,
    y: -20
  }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
};

export function PageTransition({ children }: PageTransitionProps) {
  // Skip animation if user prefers reduced motion
  if (prefersReducedMotion()) {
    return <>{children}</>;
  }
  
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
}
