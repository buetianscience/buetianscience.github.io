import React, { useState } from 'react';
import {
  Typography,
  Tabs,
  Tab,
  Box,
  Grid,
  Card,
  CardContent,
  Chip,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import Section from '../../components/Section';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeSlideUp, staggerContainer } from '../../utils/motionVariants';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`course-tabpanel-${index}`}
      aria-labelledby={`course-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

export default function CoursesSection() {
  const { t } = useTranslation();
  const [value, setValue] = useState(0);
  const subjects = t('courses.subjects', { returnObjects: true }) as string[];

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const courseTypes = [
    {
      titleKey: 'courses.foundation.title',
      descKey: 'courses.foundation.description',
    },
    {
      titleKey: 'courses.advanced.title',
      descKey: 'courses.advanced.description',
    },
    {
      titleKey: 'courses.examPrep.title',
      descKey: 'courses.examPrep.description',
    },
  ];

  return (
    <Section id="courses" bgcolor="background.default">
      <Typography
        variant="h2"
        component="h2"
        align="center"
        gutterBottom
        sx={{ fontWeight: 700, mb: 2 }}
        tabIndex={-1}
      >
        {t('courses.heading')}
      </Typography>

      <Typography
        variant="h6"
        align="center"
        color="text.secondary"
        sx={{ mb: 1 }}
      >
        {t('courses.levels')}
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4, flexWrap: 'wrap', gap: 1 }}>
        {(t('courses.track', { returnObjects: true }) as string[]).map((track, index) => (
          <Chip key={index} label={track} color="primary" variant="outlined" />
        ))}
      </Box>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="course subjects"
        >
          {subjects.map((subject, index) => (
            <Tab key={index} label={subject} id={`course-tab-${index}`} />
          ))}
        </Tabs>
      </Box>

      {subjects.map((subject, subjectIndex) => (
        <TabPanel key={subjectIndex} value={value} index={subjectIndex}>
          <AnimatePresence mode="wait">
            {value === subjectIndex && (
              <motion.div
                key={`content-${subjectIndex}`}
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0 }}
              >
                <Grid container spacing={3}>
                  {courseTypes.map((course, index) => (
                    <Grid size={{ xs: 12, md: 4 }} key={index}>
                      <motion.div variants={fadeSlideUp}>
                        <Card
                          sx={{
                            height: '100%',
                            transition: 'all 0.3s',
                            '&:hover': {
                              boxShadow: 6,
                              transform: 'translateY(-4px)',
                            },
                          }}
                        >
                          <CardContent>
                            <Typography variant="h5" component="h3" gutterBottom fontWeight={600}>
                              {t(course.titleKey)}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" paragraph>
                              {t(course.descKey)}
                            </Typography>
                            <Chip label={subject} size="small" color="secondary" />
                          </CardContent>
                        </Card>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </motion.div>
            )}
          </AnimatePresence>
        </TabPanel>
      ))}

      <Box
        sx={{
          mt: 4,
          p: 3,
          bgcolor: 'primary.main',
          color: 'white',
          borderRadius: 2,
          textAlign: 'center',
        }}
      >
        <Typography variant="h6" fontWeight={600}>
          {t('courses.info')}
        </Typography>
      </Box>
    </Section>
  );
}

