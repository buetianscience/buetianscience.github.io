import React from 'react';
import {
  Typography,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Box,
} from '@mui/material';
import {
  Science,
  Calculate,
  Biotech,
  CheckCircle,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import Section from '../../components/Section';
import { motion } from 'framer-motion';
import { fadeSlideUp, fadeSlideLeft, fadeSlideRight, staggerContainer, springScale } from '../../utils/motionVariants';

export default function AboutSection() {
  const { t } = useTranslation();
  const benefits = t('about.benefits', { returnObjects: true }) as string[];

  const icons = [
    <Science sx={{ fontSize: 40, color: 'primary.main' }} />,
    <Calculate sx={{ fontSize: 40, color: 'secondary.main' }} />,
    <Biotech sx={{ fontSize: 40, color: 'warning.main' }} />,
  ];

  return (
    <Section id="about" bgcolor="background.paper" revealVariant="scale">
      <Typography
        variant="h2"
        component="h2"
        align="center"
        gutterBottom
        sx={{ fontWeight: 700, mb: 2 }}
        tabIndex={-1}
      >
        {t('about.heading')}
      </Typography>

      <Typography
        variant="h6"
        align="center"
        color="text.secondary"
        sx={{ mb: 6, maxWidth: '800px', mx: 'auto' }}
      >
        {t('about.lead')}
      </Typography>

      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 6 }}>
          <motion.div
            variants={fadeSlideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Paper 
              elevation={2} 
              sx={{ p: 4, height: '100%' }}
              component={motion.div}
              whileHover={{ 
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                transition: { duration: 0.3 }
              }}
            >
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <Typography variant="body1" paragraph>
                  {t('about.description')}
                </Typography>

                <List>
                  {benefits.map((benefit, index) => (
                    <motion.div key={index} variants={fadeSlideUp}>
                      <ListItem disablePadding sx={{ mb: 1 }}>
                        <ListItemIcon>
                          <CheckCircle color="primary" />
                        </ListItemIcon>
                        <ListItemText primary={benefit} />
                      </ListItem>
                    </motion.div>
                  ))}
                </List>
              </motion.div>
            </Paper>
          </motion.div>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <motion.div
            variants={fadeSlideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Grid container spacing={2}>
                {icons.map((icon, index) => (
                  <Grid size={{ xs: 12 }} key={index}>
                    <motion.div
                      variants={springScale}
                      whileHover={{ 
                        scale: 1.03, 
                        rotateY: 3,
                        boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                        transition: { 
                          type: 'spring',
                          stiffness: 300,
                          damping: 20
                        }
                      }}
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      <Paper
                        elevation={2}
                        sx={{
                          p: 3,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 2,
                        }}
                      >
                        <Box>{icon}</Box>
                        <Typography variant="h6" fontWeight={600}>
                          {t(`courses.subjects.${index}`)}
                        </Typography>
                      </Paper>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </motion.div>
        </Grid>
      </Grid>
    </Section>
  );
}

