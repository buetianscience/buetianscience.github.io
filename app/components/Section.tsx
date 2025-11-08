import React, { type ReactNode } from 'react';
import { Box, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { fadeSlideUp } from '../utils/motionVariants';

interface SectionProps {
  id: string;
  children: ReactNode;
  bgcolor?: string;
  py?: number;
  disableReveal?: boolean; // Opt-out of CSS scroll-reveal
  revealVariant?: 'default' | 'scale' | 'left' | 'right'; // CSS animation variant
}

export default function Section({ 
  id, 
  children, 
  bgcolor, 
  py = 8,
  disableReveal = false,
  revealVariant = 'default'
}: SectionProps) {
  // Map reveal variant to CSS class
  const revealClass = !disableReveal 
    ? revealVariant === 'default' 
      ? 'reveal-scroll'
      : `reveal-scroll-${revealVariant}`
    : '';

  return (
    <Box
      component="section"
      id={id}
      className={revealClass}
      sx={{
        py,
        bgcolor: bgcolor || 'transparent',
        scrollMarginTop: '80px', // Account for sticky header
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          variants={fadeSlideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {children}
        </motion.div>
      </Container>
    </Box>
  );
}

