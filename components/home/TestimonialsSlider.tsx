
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { testimonialsData } from '../../constants';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const TestimonialsSlider = () => {
  return (
    <section className="py-20 bg-wov-neutral-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-wov-blue-dark font-serif">What Our Members Say</h2>
          <p className="mt-4 text-lg text-wov-neutral-medium-gray">
            Real stories from the community we're proud to serve.
          </p>
        </motion.div>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
        >
          {testimonialsData.map((testimonial, index) => (
            <SwiperSlide key={index} className="pb-12">
              <div className="bg-white h-full rounded-xl shadow-lg p-8 flex flex-col">
                <Quote className="w-12 h-12 text-wov-teal/50 mb-4" />
                <p className="text-wov-neutral-medium-gray italic mb-6 flex-grow">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img src={testimonial.image} alt={testimonial.name} className="w-14 h-14 rounded-full mr-4 border-2 border-wov-teal"/>
                  <div>
                    <p className="font-bold text-wov-blue-dark">{testimonial.name}</p>
                    <p className="text-sm text-wov-neutral-medium-gray">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
