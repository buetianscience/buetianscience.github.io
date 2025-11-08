import React from 'react';
import { Card, CardContent, Typography, Box, Rating } from '@mui/material';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  name: string;
  grade: string;
  rating: number;
  quote: string;
}

export default function TestimonialCard({ name, grade, rating, quote }: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          p: 2,
        }}
      >
        <CardContent sx={{ flexGrow: 1 }}>
          <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>
            <Rating value={rating} readOnly size="small" />
          </Box>
          <Typography variant="body1" sx={{ mb: 2, fontStyle: 'italic' }}>
            "{quote}"
          </Typography>
          <Typography variant="subtitle2" fontWeight={600}>
            {name}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {grade}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
}

