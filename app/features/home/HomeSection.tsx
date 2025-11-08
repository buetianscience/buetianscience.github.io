import React from 'react';
import {
  Box,
  Typography,
  Button,
  Chip,
  Grid,
  Stack,
  Container,
} from '@mui/material';
import {
  School,
  Psychology,
  Quiz,
  Groups,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { fadeSlideUp, staggerContainer, springUp, springScale } from '../../utils/motionVariants';
import FeatureCard from '../../components/FeatureCard';

export default function HomeSection() {
  const { t } = useTranslation();

  const handleScroll = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const valueTiles = [
    {
      icon: <School sx={{ fontSize: 48 }} />,
      titleKey: 'home.valueTiles.buetianTeachers.title',
      descKey: 'home.valueTiles.buetianTeachers.description',
    },
    {
      icon: <Psychology sx={{ fontSize: 48 }} />,
      titleKey: 'home.valueTiles.conceptFirst.title',
      descKey: 'home.valueTiles.conceptFirst.description',
    },
    {
      icon: <Quiz sx={{ fontSize: 48 }} />,
      titleKey: 'home.valueTiles.mockTests.title',
      descKey: 'home.valueTiles.mockTests.description',
    },
    {
      icon: <Groups sx={{ fontSize: 48 }} />,
      titleKey: 'home.valueTiles.smallBatches.title',
      descKey: 'home.valueTiles.smallBatches.description',
    },
  ];

  return (
    <Box
      id="home"
      sx={{
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        bgcolor: 'background.default',
        pt: 4,
        pb: 8,
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Hero with View Transition naming */}
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <motion.div variants={springScale}>
              <Typography
                variant="h1"
                component="h1"
                className="view-transition-title"
                sx={{
                  fontSize: { xs: '2.5rem', md: '4rem' },
                  fontWeight: 700,
                  mb: 2,
                  color: 'primary.main',
                }}
              >
                {t('brand')}
              </Typography>
            </motion.div>

            <motion.div variants={fadeSlideUp}>
              <Typography
                variant="h5"
                component="h2"
                className="view-transition-hero"
                sx={{
                  fontSize: { xs: '1rem', md: '1.5rem' },
                  mb: 3,
                  color: 'text.secondary',
                  maxWidth: '800px',
                  mx: 'auto',
                }}
              >
                {t('hero.headline')}
              </Typography>
            </motion.div>

            <motion.div variants={fadeSlideUp}>
              <Stack
                direction="row"
                spacing={1}
                flexWrap="wrap"
                justifyContent="center"
                sx={{ mb: 4 }}
              >
                {(t('hero.chips', { returnObjects: true }) as string[]).map((chip, index) => (
                  <motion.div
                    key={index}
                    variants={fadeSlideUp}
                    custom={index}
                  >
                    <Chip
                      label={chip}
                      color="secondary"
                      component={motion.div}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      sx={{ fontWeight: 500, mb: 1, cursor: 'default' }}
                    />
                  </motion.div>
                ))}
              </Stack>
            </motion.div>

            <motion.div variants={fadeSlideUp}>
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                justifyContent="center"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => handleScroll('#contact')}
                    sx={{ px: 4, py: 1.5 }}
                  >
                    {t('cta.enrollNow')}
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={() => handleScroll('#courses')}
                    sx={{ px: 4, py: 1.5 }}
                  >
                    {t('cta.seeCourses')}
                  </Button>
                </motion.div>
              </Stack>
            </motion.div>
          </Box>

          {/* Value Tiles with stagger and hover effects */}
          <Grid container spacing={3}>
            {valueTiles.map((tile, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <motion.div
                  variants={springUp}
                  custom={index}
                  whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
                >
                  <FeatureCard
                    icon={tile.icon}
                    title={t(tile.titleKey)}
                    description={t(tile.descKey)}
                  />
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}

