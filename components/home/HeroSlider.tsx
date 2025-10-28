
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import Button from '../common/Button';

const slides = [
  {
    image: 'https://picsum.photos/seed/hero1/1920/1080',
    title: "Building Futures, Empowering Generations",
    subtitle: "Your Partner in Financial Freedom and Economic Empowerment",
    primaryCTA: { text: 'Become a Member', link: '/membership' },
    secondaryCTA: { text: 'Apply for Loan', link: '/services' }
  },
  {
    image: 'https://picsum.photos/seed/hero2/1920/1080',
    title: "Transforming Agriculture, Growing Prosperity",
    subtitle: "Supporting 5 Value Chains: Avocado, Poultry, Dairy, Banana & Coffee",
    primaryCTA: { text: 'Explore Agribusiness Loans', link: '/services' }
  },
  {
    image: 'https://picsum.photos/seed/hero3/1920/1080',
    title: "Empowering Women, Strengthening Communities",
    subtitle: "Over 800 Members Across 64 Groups in Bungoma County",
    primaryCTA: { text: 'Join a Group Today', link: '/membership' }
  },
  {
    image: 'https://picsum.photos/seed/hero4/1920/1080',
    title: "Turn Your Business Dreams into Reality",
    subtitle: "Affordable Loans, No Collateral Required",
    primaryCTA: { text: 'Apply for Business Loan', link: '/services' }
  },
  {
    image: 'https://picsum.photos/seed/hero5/1920/1080',
    title: "Invest in Education, Build the Future",
    subtitle: "Education Loans for Every Learning Journey",
    primaryCTA: { text: 'Learn More', link: '/services' }
  }
];

const HeroSlider: React.FC = () => {
  return (
    <section className="relative h-screen -mt-20">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full">
              <img 
                src={slide.image} 
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-wov-green/70 via-wov-teal/70 to-wov-blue-dark/70" />
              <div className="absolute inset-0 flex items-center justify-center text-center text-white">
                <div className="container mx-auto px-4">
                  <motion.h1 
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="text-4xl md:text-6xl font-bold font-serif mb-4 drop-shadow-lg"
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p 
                    key={index + 'sub'}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                    className="text-lg md:text-xl mb-8 max-w-3xl mx-auto drop-shadow-md"
                  >
                    {slide.subtitle}
                  </motion.p>
                  <motion.div 
                    key={index + 'cta'}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                  >
                    {slide.primaryCTA && <Button variant="primary" onClick={() => window.location.hash = slide.primaryCTA.link}>{slide.primaryCTA.text}</Button>}
                    {slide.secondaryCTA && <Button variant="secondary" onClick={() => window.location.hash = slide.secondaryCTA.link}>{slide.secondaryCTA.text}</Button>}
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
