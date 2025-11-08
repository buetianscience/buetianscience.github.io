import React from 'react';
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Box,
  Stack,
} from '@mui/material';
import { AccessTime } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import Section from '../../components/Section';
import { motion } from 'framer-motion';
import { fadeSlideUp, staggerContainer } from '../../utils/motionVariants';

export default function BlogSection() {
  const { t } = useTranslation();

  const blogPosts = [
    {
      title: 'Understanding Physics: Force and Motion',
      subject: 'Physics',
      readTime: 5,
      excerpt: 'Learn the fundamental concepts of force and motion that form the basis of mechanics.',
      image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=400',
    },
    {
      title: 'Chemistry Tips: Mastering Organic Reactions',
      subject: 'Chemistry',
      readTime: 7,
      excerpt: 'Key strategies to remember and understand organic chemistry reactions effectively.',
      image: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=400',
    },
    {
      title: 'Mathematics: Problem-Solving Techniques',
      subject: 'Mathematics',
      readTime: 6,
      excerpt: 'Develop your analytical skills with proven mathematical problem-solving approaches.',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400',
    },
    {
      title: 'Exam Preparation: Time Management',
      subject: 'Study Tips',
      readTime: 4,
      excerpt: 'How to effectively manage your time during exams and preparation.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400',
    },
    {
      title: 'Building Strong Fundamentals',
      subject: 'Study Tips',
      readTime: 5,
      excerpt: 'Why conceptual understanding matters more than memorization.',
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400',
    },
    {
      title: 'Mock Test Strategies',
      subject: 'Exam Prep',
      readTime: 6,
      excerpt: 'Making the most of mock tests to improve your performance.',
      image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=400',
    },
  ];

  return (
    <Section id="blog" bgcolor="background.default">
      <Typography
        variant="h2"
        component="h2"
        align="center"
        gutterBottom
        sx={{ fontWeight: 700, mb: 2 }}
        tabIndex={-1}
      >
        {t('blog.heading')}
      </Typography>

      <Typography
        variant="h6"
        align="center"
        color="text.secondary"
        sx={{ mb: 6 }}
      >
        {t('blog.subheading')}
      </Typography>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Grid container spacing={3}>
          {blogPosts.map((post, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <motion.div variants={fadeSlideUp}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s',
                    cursor: 'pointer',
                    '&:hover': {
                      boxShadow: 6,
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="180"
                    image={post.image}
                    alt={post.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                      <Chip label={post.subject} size="small" color="primary" />
                      <Chip
                        label={t('blog.studyTip')}
                        size="small"
                        color="secondary"
                        variant="outlined"
                      />
                    </Stack>
                    <Typography variant="h6" component="h3" gutterBottom fontWeight={600}>
                      {post.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {post.excerpt}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary' }}>
                      <AccessTime fontSize="small" sx={{ mr: 0.5 }} />
                      <Typography variant="caption">
                        {post.readTime} {t('blog.readTime')}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Section>
  );
}

