import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Stack,
  IconButton,
} from '@mui/material';
import {
  Phone,
  Place,
  WhatsApp,
  Facebook,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" gutterBottom fontWeight={700}>
              {t('brand')}
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              {t('footer.description')}
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" gutterBottom fontWeight={600}>
              {t('footer.quickLinks')}
            </Typography>
            <Stack spacing={1}>
              <Link
                component="button"
                onClick={() => handleNavClick('#about')}
                color="inherit"
                underline="hover"
                sx={{ textAlign: 'left' }}
              >
                {t('nav.about')}
              </Link>
              <Link
                component="button"
                onClick={() => handleNavClick('#courses')}
                color="inherit"
                underline="hover"
                sx={{ textAlign: 'left' }}
              >
                {t('nav.courses')}
              </Link>
              <Link
                component="button"
                onClick={() => handleNavClick('#contact')}
                color="inherit"
                underline="hover"
                sx={{ textAlign: 'left' }}
              >
                {t('nav.contact')}
              </Link>
              <Link
                component="button"
                onClick={() => handleNavClick('#faq')}
                color="inherit"
                underline="hover"
                sx={{ textAlign: 'left' }}
              >
                {t('nav.faq')}
              </Link>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" gutterBottom fontWeight={600}>
              {t('footer.contactInfo')}
            </Typography>
            <Stack spacing={1}>
              <Stack direction="row" spacing={1} alignItems="flex-start">
                <Place fontSize="small" />
                <Typography variant="body2">
                  {t('contact.addressValue')}
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <Phone fontSize="small" />
                <Link href="tel:+8801790394788" color="inherit" underline="hover">
                  {t('contact.phoneValue')}
                </Link>
              </Stack>
              <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                <IconButton
                  href="https://wa.me/8801790394788?text=I%20want%20to%20be%20admitted%20in%20Buetian%20Science"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: 'white' }}
                  aria-label="WhatsApp"
                >
                  <WhatsApp />
                </IconButton>
                <IconButton
                  sx={{ color: 'white' }}
                  aria-label="Facebook"
                >
                  <Facebook />
                </IconButton>
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <Box sx={{ mt: 4, pt: 3, borderTop: '1px solid rgba(255,255,255,0.2)' }}>
          <Typography variant="body2" align="center">
            {t('footer.copyright')}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

