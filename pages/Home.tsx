
import React from 'react';
import HeroSlider from '../components/home/HeroSlider';
import StatsSection from '../components/home/StatsSection';
import ServicesGrid from '../components/home/ServicesGrid';
import TestimonialsSlider from '../components/home/TestimonialsSlider';
import CTASection from '../components/home/CTASection';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import { ShieldCheck, Users, TrendingUp } from 'lucide-react';

const AboutSummary = () => (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7 }}
                >
                    <img src="https://picsum.photos/seed/about/600/400" alt="Community members" className="rounded-xl shadow-2xl"/>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-wov-blue-dark font-serif mb-6">Transforming Lives Through Accessible Finance</h2>
                    <p className="text-lg text-wov-neutral-medium-gray mb-6">
                        Women of Valour SACCO exists to break the cycles of poverty that affect women, single mothers, widows, youth, and marginalized communities in Bungoma County. We provide more than loans—we offer hope, opportunity, and a pathway to economic independence.
                    </p>
                     <Button variant="secondary" onClick={() => window.location.hash = '/about'}>Read Our Story</Button>
                </motion.div>
            </div>
        </div>
    </section>
);


const WhyChooseUs = () => (
  <section className="py-20 bg-wov-neutral-cream">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-wov-blue-dark font-serif">Why Choose Women of Valour?</h2>
        <p className="mt-4 text-lg text-wov-neutral-medium-gray max-w-2xl mx-auto">
          We are more than a financial institution. We are a community-centered partner in your success.
        </p>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="text-center p-6">
          <div className="flex justify-center mb-4">
            <div className="bg-wov-blue/10 rounded-full p-4"><Users className="w-10 h-10 text-wov-blue" /></div>
          </div>
          <h3 className="text-xl font-bold text-wov-blue-dark mb-2">Member-Owned</h3>
          <p className="text-wov-neutral-medium-gray">Your success is our priority. As a member, you are an owner with a voice and a share in our profits.</p>
        </div>
        <div className="text-center p-6">
           <div className="flex justify-center mb-4">
            <div className="bg-wov-teal/10 rounded-full p-4"><ShieldCheck className="w-10 h-10 text-wov-teal" /></div>
          </div>
          <h3 className="text-xl font-bold text-wov-blue-dark mb-2">No Collateral Required</h3>
          <p className="text-wov-neutral-medium-gray">Our group guarantee system ensures financial services are accessible to everyone, removing traditional barriers.</p>
        </div>
        <div className="text-center p-6">
           <div className="flex justify-center mb-4">
            <div className="bg-wov-green/10 rounded-full p-4"><TrendingUp className="w-10 h-10 text-wov-green" /></div>
          </div>
          <h3 className="text-xl font-bold text-wov-blue-dark mb-2">Financial Education</h3>
          <p className="text-wov-neutral-medium-gray">We go beyond loans, providing training and capacity building to ensure your long-term success.</p>
        </div>
      </div>
    </div>
  </section>
);

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSlider />
      <StatsSection />
      <AboutSummary />
      <ServicesGrid />
      <WhyChooseUs />
      <TestimonialsSlider />
      <CTASection />
    </motion.div>
  );
};

export default Home;
