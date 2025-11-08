import React from 'react';
import { Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Section from '../../components/Section';
import TestimonialCard from '../../components/TestimonialCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function TestimonialsSection() {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: 'Ahmed Rahman',
      grade: 'HSC First Year, Science',
      rating: 5,
      quote: 'The teachers here really care about making sure we understand concepts deeply. Mock tests helped me improve significantly.',
    },
    {
      name: 'Fatima Khan',
      grade: 'Class 10, Science',
      rating: 5,
      quote: 'Small batch sizes mean I can ask questions anytime. The personal attention has made a huge difference in my grades.',
    },
    {
      name: 'Mahmud Hasan',
      grade: 'HSC First Year',
      rating: 5,
      quote: 'BUETian teachers bring real expertise. Physics and Math concepts are so much clearer now.',
    },
    {
      name: 'Nusrat Jahan',
      grade: 'Class 9, Science',
      rating: 5,
      quote: 'The focus on problem-solving rather than memorization has transformed how I study. Highly recommended!',
    },
    {
      name: 'Rafiq Ahmed',
      grade: 'Class 10, Science',
      rating: 5,
      quote: 'Regular mock exams and detailed feedback help track my progress. The teaching methodology is excellent.',
    },
    {
      name: 'Sabina Yasmin',
      grade: 'HSC First Year',
      rating: 5,
      quote: 'Chemistry used to be difficult for me. The step-by-step approach here has made it much easier to understand.',
    },
  ];

  return (
    <Section id="testimonials" bgcolor="background.paper">
      <Typography
        variant="h2"
        component="h2"
        align="center"
        gutterBottom
        sx={{ fontWeight: 700, mb: 2 }}
        tabIndex={-1}
      >
        {t('testimonials.heading')}
      </Typography>

      <Typography
        variant="h6"
        align="center"
        color="text.secondary"
        sx={{ mb: 6 }}
      >
        {t('testimonials.subheading')}
      </Typography>

      <Box sx={{ px: { xs: 0, md: 4 } }}>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <Box sx={{ pb: 6 }}>
                <TestimonialCard {...testimonial} />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <Typography variant="h4" component="div" fontWeight={700} color="primary.main">
          500+
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {t('testimonials.studentsMentored')}
        </Typography>
      </Box>
    </Section>
  );
}

