// 2025 Motion Variants with Modern Best Practices
// GPU-accelerated transforms, spring physics, and stagger effects

export const fadeSlideUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5, 
      ease: 'easeOut' as const,
    } 
  }
};

export const fadeSlideDown = {
  hidden: { opacity: 0, y: -24 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5, 
      ease: 'easeOut' as const,
    } 
  }
};

export const fadeSlideLeft = {
  hidden: { opacity: 0, x: -24 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.5, 
      ease: 'easeOut' as const,
    } 
  }
};

export const fadeSlideRight = {
  hidden: { opacity: 0, x: 24 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.5, 
      ease: 'easeOut' as const,
    } 
  }
};

export const staggerContainer = {
  hidden: {},
  visible: { 
    transition: { 
      staggerChildren: 0.1, 
      delayChildren: 0.05,
      when: 'beforeChildren' as const
    } 
  }
};

export const staggerContainerFast = {
  hidden: {},
  visible: { 
    transition: { 
      staggerChildren: 0.06, 
      delayChildren: 0.02,
      when: 'beforeChildren' as const
    } 
  }
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { duration: 0.4, ease: 'easeOut' as const } 
  }
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      duration: 0.5, 
      ease: 'easeOut' as const,
    } 
  }
};

export const springUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 150,
      damping: 20,
      mass: 0.8
    }
  }
};

export const springScale = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 150,
      damping: 20,
      mass: 0.8
    }
  }
};

// 3D perspective reveal (2025 trend)
export const reveal3D = {
  hidden: { 
    opacity: 0, 
    rotateX: -15,
    y: 24,
    transformPerspective: 1000
  },
  visible: {
    opacity: 1,
    rotateX: 0,
    y: 0,
    transformPerspective: 1000,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const,
    }
  }
};

// Blur reveal effect (glassmorphism trend)
export const blurReveal = {
  hidden: { 
    opacity: 0, 
    filter: 'blur(10px)',
    scale: 0.95
  },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const,
    }
  }
};

// Magnetic hover effect (modern interaction)
export const magneticHover = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: {
      type: 'spring' as const,
      stiffness: 400,
      damping: 10
    }
  },
  tap: { scale: 0.97 }
};

// Respect prefers-reduced-motion
export const getMotionProps = (prefersReducedMotion: boolean) => {
  if (prefersReducedMotion) {
    return {
      initial: 'visible',
      animate: 'visible',
      transition: { duration: 0 }
    };
  }
  return {
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: true, amount: 0.2, margin: '0px 0px -100px 0px' }
  };
};

// Optimized scroll progress animation
export const useScrollProgress = () => {
  if (typeof window === 'undefined') return { scrollYProgress: 0 };
  
  // Use native scroll-linked animations when available
  if (CSS.supports('animation-timeline', 'scroll()')) {
    return { scrollYProgress: 0, useNative: true };
  }
  
  // Fallback to Framer Motion
  return { scrollYProgress: 0, useNative: false };
};


