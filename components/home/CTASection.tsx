
import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';

const CTASection = () => {
    return (
        <section className="bg-hero-gradient py-20 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Ready to Get Started?</h2>
                    <p className="text-lg max-w-2xl mx-auto mb-8 text-gray-200">
                        Join over 800 members who are building their futures with Women of Valour SACCO.
                        Take the first step towards financial freedom today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                       <Button 
                            className="bg-white text-wov-blue font-bold hover:bg-gray-100" 
                            onClick={() => window.location.hash = '/membership'}
                        >
                            Become a Member
                        </Button>
                        <Button 
                            variant="outline" 
                            className="border-white text-white hover:bg-white hover:text-wov-blue"
                            onClick={() => window.location.hash = '/contact'}
                        >
                            Contact Us
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTASection;
