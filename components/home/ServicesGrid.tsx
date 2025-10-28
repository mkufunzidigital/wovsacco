
import React from 'react';
import { Link } from 'react-router-dom';
import { homeServices } from '../../constants';
// FIX: Import Variants type from framer-motion to resolve type inference issue.
import { motion, Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const cardVariants: Variants = {
    offscreen: {
        y: 50,
        opacity: 0
    },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    }
};

const ServicesGrid = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-wov-blue-dark font-serif">Our Services at a Glance</h2>
                    <p className="mt-4 text-lg text-wov-neutral-medium-gray max-w-2xl mx-auto">
                        Financial solutions designed for your growth, empowerment, and peace of mind.
                    </p>
                </motion.div>
                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ staggerChildren: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {homeServices.map((service, index) => (
                        <motion.div key={index} variants={cardVariants}>
                             <Link to={service.link} className="block h-full">
                                <div className="group bg-wov-neutral-cream h-full rounded-xl p-8 transition-all duration-300 hover:bg-wov-blue hover:shadow-2xl hover:-translate-y-2">
                                    <div className="flex justify-center mb-5">
                                      <div className={`p-4 rounded-full bg-white group-hover:bg-wov-teal/20 transition-all`}>
                                        <service.icon className={`w-10 h-10 ${service.color} group-hover:text-white transition-colors`} />
                                      </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-wov-blue-dark text-center mb-3 group-hover:text-white transition-colors">{service.title}</h3>
                                    <p className="text-wov-neutral-medium-gray text-center mb-4 group-hover:text-gray-200 transition-colors">{service.description}</p>
                                    <div className="flex items-center justify-center text-wov-teal font-semibold group-hover:text-wov-green-light transition-colors">
                                        Learn More <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesGrid;