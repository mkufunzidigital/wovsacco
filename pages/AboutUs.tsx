
import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/common/PageHeader';
import { coreValues } from '../constants';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';

const TimelineEvent = ({ year, title, description, isLeft }: { year: string, title: string, description: string, isLeft: boolean }) => (
    <div className={`flex items-center w-full my-6 ${isLeft ? 'md:justify-start' : 'md:justify-end'}`}>
        <div className={`w-full md:w-1/2 ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
            <motion.div
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
                className="bg-white p-6 rounded-lg shadow-md"
            >
                <p className="text-wov-teal font-bold text-xl mb-2">{year}</p>
                <h3 className="font-semibold text-wov-blue-dark mb-2">{title}</h3>
                <p className="text-sm text-wov-neutral-medium-gray">{description}</p>
            </motion.div>
        </div>
    </div>
);

const AboutUs = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <PageHeader 
        title="About Us" 
        subtitle="A legacy built on courage, community, and commitment to empowerment." 
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About Us', href: '/about' }]} 
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7 }}
            >
                <h2 className="text-3xl font-bold text-wov-blue-dark font-serif mb-4">Our Story: From Vision to Impact</h2>
                <p className="text-wov-neutral-medium-gray mb-4">The story of Women of Valour SACCO is one of determination and transformative action. Our journey began when retired women professionals witnessed the impact of poverty—particularly on women, single mothers, widows, and youth in Bungoma County.</p>
                <p className="text-wov-neutral-medium-gray">Motivated by this injustice, these visionary women established Women of Valour SACCO as a member-owned cooperative that would serve those the system had failed.</p>
            </motion.div>
             <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7 }}
                >
                    <img src="https://picsum.photos/seed/story/600/450" alt="Founders" className="rounded-lg shadow-xl"/>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-wov-neutral-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-wov-blue-dark font-serif mb-12">Our Journey: Key Milestones</h2>
            <div className="relative">
                <div className="hidden md:block absolute h-full border-r-4 border-wov-teal top-0 left-1/2 -ml-px"></div>
                <TimelineEvent year="2018" title="Official Registration" description="WoV SACCO was officially registered under Certificate No. CS/229228, establishing our legal foundation." isLeft={true} />
                <TimelineEvent year="2020" title="Formal Launch" description="The Government of Kenya, through the Ministry of Cooperatives, formally launched our SACCO." isLeft={false} />
                <TimelineEvent year="2021" title="Operational Commencement" description="We began offering financial services and actively recruiting members, disbursing our first loans." isLeft={true} />
                <TimelineEvent year="2024" title="Strategic Partnership" description="Competitively selected to partner with the Ministry of Agriculture in the World Bank-funded NAVCDP." isLeft={false} />
            </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-wov-blue-dark font-serif mb-4">Vision, Mission & Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8 my-12">
                <div><h3 className="text-2xl font-semibold text-wov-teal">Vision</h3><p>A SACCO that transcends generations.</p></div>
                <div><h3 className="text-2xl font-semibold text-wov-teal">Mission</h3><p>Empowering generations through financial education and networking.</p></div>
                <div><h3 className="text-2xl font-semibold text-wov-teal">Motto</h3><p>Building Futures.</p></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                {coreValues.map(value => (
                    <motion.div key={value.title} className="p-6 bg-wov-neutral-cream rounded-lg" whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}>
                        <div className="flex justify-center mb-3">
                            <div className="bg-wov-blue/10 p-3 rounded-full">
                                <value.icon className="w-8 h-8 text-wov-blue" />
                            </div>
                        </div>
                        <h4 className="text-lg font-bold text-wov-blue-dark mb-2">{value.title}</h4>
                        <p className="text-sm text-wov-neutral-medium-gray">{value.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

       <section className="py-20 bg-wov-neutral-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-wov-blue-dark font-serif mb-4">Our Commitment to You</h2>
            <p className="max-w-3xl mx-auto text-wov-neutral-medium-gray mb-8">
                We are more than a financial institution. We are a movement committed to economic justice, women's empowerment, and community transformation. We invite you to be part of this legacy.
            </p>
            <div className="space-x-4">
                <Button variant="primary" onClick={() => window.location.hash = '/membership'}>Become a Member</Button>
                <Button variant="secondary" onClick={() => window.location.hash = '/leadership'}>View Our Leadership</Button>
            </div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutUs;
