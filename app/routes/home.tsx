import type { Route } from "./+types/home";
import { Helmet } from 'react-helmet-async';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomeSection from '../features/home/HomeSection';
import AboutSection from '../features/about/AboutSection';
import CoursesSection from '../features/courses/CoursesSection';
import TestimonialsSection from '../features/testimonials/TestimonialsSection';
import ContactSection from '../features/contact/ContactSection';
import FaqSection from '../features/faq/FaqSection';
import BlogSection from '../features/blog/BlogSection';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "BUETian Science - Expert Science Coaching by BUETian Teachers" },
    { name: "description", content: "Expert coaching by BUETian teachers for science students. Physics, Chemistry & Mathematics from Class 8 to HSC First Year. Build strong concepts, improve problem-solving, and develop analytical thinking." },
    { property: "og:title", content: "BUETian Science - Expert Science Coaching" },
    { property: "og:description", content: "BUETian teachers providing specialized coaching for science students. Focus on conceptual mastery over memorization." },
    { property: "og:type", content: "website" },
    { name: "keywords", content: "BUET, science coaching, physics, chemistry, mathematics, Dhaka, Hazaribagh, HSC, SSC, conceptual learning" },
  ];
}

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('brand')} - {t('tagline')}</title>
        <meta name="description" content={t('about.lead')} />
        <html lang={t('lang', { defaultValue: 'en' })} />
      </Helmet>
      
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <HomeSection />
          <AboutSection />
          <CoursesSection />
          <TestimonialsSection />
          <ContactSection />
          <FaqSection />
          <BlogSection />
        </Box>
        <Footer />
      </Box>
    </>
  );
}
