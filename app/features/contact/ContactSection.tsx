import React from 'react';
import {
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Stack,
  Box,
} from '@mui/material';
import {
  Place,
  Phone,
  WhatsApp,
  Directions,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import Section from '../../components/Section';
import { motion } from 'framer-motion';
import { fadeSlideUp, scaleIn } from '../../utils/motionVariants';

export default function ContactSection() {
  const { t } = useTranslation();

  const googleFormUrl = 'https://forms.gle/3DAwMcLbEaLXPft68';
  const whatsappUrl = `https://wa.me/8801790394788?text=${encodeURIComponent(t('contact.whatsappMessage'))}`;
  const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=48%2F48%2F2%2C+Moneshwar+Road%2C+Hazaribagh%2C+Dhaka';

  return (
    <Section id="contact" bgcolor="background.default">
      <Typography
        variant="h2"
        component="h2"
        align="center"
        gutterBottom
        sx={{ fontWeight: 700, mb: 2 }}
        tabIndex={-1}
      >
        {t('contact.heading')}
      </Typography>

      <Typography
        variant="h6"
        align="center"
        color="text.secondary"
        sx={{ mb: 6 }}
      >
        {t('contact.subheading')}
      </Typography>

      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 6 }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeSlideUp}
          >
            <Card elevation={3} sx={{ height: '100%' }}>
              <CardContent sx={{ p: 4 }}>
                <Stack spacing={3}>
                  <Box>
                    <Stack direction="row" spacing={2} alignItems="flex-start" sx={{ mb: 2 }}>
                      <Place color="primary" sx={{ fontSize: 32 }} />
                      <Box>
                        <Typography variant="h6" fontWeight={600} gutterBottom>
                          {t('contact.addressLabel')}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                          {t('contact.addressValue')}
                        </Typography>
                      </Box>
                    </Stack>
                    <Button
                      variant="outlined"
                      startIcon={<Directions />}
                      href={mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      fullWidth
                    >
                      {t('cta.getDirections')}
                    </Button>
                  </Box>

                  <Box>
                    <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                      <Phone color="primary" sx={{ fontSize: 32 }} />
                      <Box>
                        <Typography variant="h6" fontWeight={600} gutterBottom>
                          {t('contact.phoneLabel')}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                          {t('contact.phoneValue')}
                        </Typography>
                      </Box>
                    </Stack>
                    <Stack spacing={1}>
                      <Button
                        variant="contained"
                        startIcon={<Phone />}
                        href="tel:+8801790394788"
                        fullWidth
                      >
                        {t('cta.callNow')}
                      </Button>
                      <Button
                        variant="contained"
                        color="success"
                        startIcon={<WhatsApp />}
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        fullWidth
                      >
                        {t('cta.whatsapp')}
                      </Button>
                    </Stack>
                  </Box>

                  <Box sx={{ pt: 2 }}>
                    <Button
                      variant="contained"
                      color="secondary"
                      size="large"
                      href={googleFormUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      fullWidth
                      sx={{ py: 1.5, fontSize: '1.1rem', fontWeight: 600 }}
                    >
                      {t('cta.enrollNow')}
                    </Button>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={scaleIn}
          >
            <Card elevation={3} sx={{ height: '100%', overflow: 'hidden' }}>
              <Box sx={{ position: 'relative', width: '100%', height: '100%', minHeight: '400px' }}>
                <iframe
                  title="BUETian Science Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.4!2d90.35!3d23.73!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQzJzQ4LjgiTiA5MMKwMjEnMDAuMCJF!5e0!3m2!1sen!2sbd!4v1234567890!5m2!1sen!2sbd"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '400px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </Box>
            </Card>
          </motion.div>
        </Grid>
      </Grid>
    </Section>
  );
}

