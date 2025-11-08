import React, { useState } from 'react';
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import Section from '../../components/Section';
import { motion } from 'framer-motion';
import { fadeSlideUp, staggerContainer } from '../../utils/motionVariants';

export default function FaqSection() {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqs = [
    {
      id: 'whoTeaches',
      questionKey: 'faq.questions.whoTeaches.q',
      answerKey: 'faq.questions.whoTeaches.a',
    },
    {
      id: 'mockTests',
      questionKey: 'faq.questions.mockTests.q',
      answerKey: 'faq.questions.mockTests.a',
    },
    {
      id: 'batchSize',
      questionKey: 'faq.questions.batchSize.q',
      answerKey: 'faq.questions.batchSize.a',
    },
    {
      id: 'levelsCovered',
      questionKey: 'faq.questions.levelsCovered.q',
      answerKey: 'faq.questions.levelsCovered.a',
    },
    {
      id: 'subjects',
      questionKey: 'faq.questions.subjects.q',
      answerKey: 'faq.questions.subjects.a',
    },
  ];

  return (
    <Section id="faq" bgcolor="background.paper">
      <Typography
        variant="h2"
        component="h2"
        align="center"
        gutterBottom
        sx={{ fontWeight: 700, mb: 6 }}
        tabIndex={-1}
      >
        {t('faq.heading')}
      </Typography>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {faqs.map((faq, index) => (
          <motion.div key={faq.id} variants={fadeSlideUp}>
            <Accordion
              expanded={expanded === faq.id}
              onChange={handleChange(faq.id)}
              sx={{ mb: 2 }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls={`${faq.id}-content`}
                id={`${faq.id}-header`}
              >
                <Typography variant="h6" fontWeight={600}>
                  {t(faq.questionKey)}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" color="text.secondary">
                  {t(faq.answerKey)}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </motion.div>
        ))}

        {/* Placeholder for future FAQs */}
        {[1, 2, 3, 4, 5].map((num) => (
          <motion.div key={`placeholder-${num}`} variants={fadeSlideUp}>
            <Accordion disabled sx={{ mb: 2, opacity: 0.5 }}>
              <AccordionSummary>
                <Typography variant="h6" color="text.disabled">
                  More questions coming soon...
                </Typography>
              </AccordionSummary>
            </Accordion>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

