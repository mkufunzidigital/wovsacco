
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/common/PageHeader';
import Button from '../components/common/Button';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactInfoCard = ({ icon: Icon, title, children }: { icon: React.ElementType, title: string, children: React.ReactNode }) => (
    <div className="flex items-start p-6 bg-white rounded-lg shadow-md">
        <div className="bg-wov-teal/10 p-3 rounded-full mr-4">
            <Icon className="w-6 h-6 text-wov-teal" />
        </div>
        <div>
            <h3 className="font-bold text-lg text-wov-blue-dark">{title}</h3>
            <div className="text-wov-neutral-medium-gray">{children}</div>
        </div>
    </div>
);


const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Placeholder for submission logic
        console.log(formData);
        setStatus('success');
        setTimeout(() => setStatus(''), 3000);
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <PageHeader 
        title="Contact Us" 
        subtitle="We're here to help. Reach out with your questions or visit us at our office." 
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact', href: '/contact' }]} 
      />

      <section className="py-20 bg-wov-neutral-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
                 <ContactInfoCard icon={MapPin} title="Our Office">
                    <p>Kenya Red Cross Building</p>
                    <p>Stadium Road, Kanduyi</p>
                    <p>Bungoma, Kenya</p>
                </ContactInfoCard>
                 <ContactInfoCard icon={Phone} title="Call Us">
                    <a href="tel:+254716458206" className="block hover:text-wov-teal">+254 716 458 206</a>
                    <a href="tel:+254722439449" className="block hover:text-wov-teal">+254 722 439 449</a>
                </ContactInfoCard>
                 <ContactInfoCard icon={Mail} title="Email Us">
                    <a href="mailto:valour@gmail.com" className="hover:text-wov-teal">valour@gmail.com</a>
                    <p className="text-sm">We reply within 24 hours.</p>
                </ContactInfoCard>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
                <div className="bg-white p-8 rounded-lg shadow-xl">
                    <h2 className="text-2xl font-bold text-wov-blue-dark font-serif mb-6">Send Us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-wov-neutral-dark-text">Full Name</label>
                            <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-wov-teal focus:ring-wov-teal sm:text-sm"/>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-wov-neutral-dark-text">Email Address</label>
                            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-wov-teal focus:ring-wov-teal sm:text-sm"/>
                        </div>
                         <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-wov-neutral-dark-text">Subject</label>
                            <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-wov-teal focus:ring-wov-teal sm:text-sm"/>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-wov-neutral-dark-text">Message</label>
                            <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-wov-teal focus:ring-wov-teal sm:text-sm"></textarea>
                        </div>
                        <div>
                             <Button type="submit" variant="primary" fullWidth>Submit Message</Button>
                        </div>
                         {status === 'success' && <p className="text-wov-green">Message sent successfully!</p>}
                    </form>
                </div>
                 <div className="rounded-lg overflow-hidden shadow-xl">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.659972745778!2d34.56133461475351!3d0.5694799996562088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1781d60233ac3355%3A0x6b42cf4a6a8c4f9b!2sKenya%20Red%20Cross%20Society%20-%20Bungoma%20Branch!5e0!3m2!1sen!2ske!4v1678886432123!5m2!1sen!2ske"
                        width="100%"
                        height="100%"
                        style={{ border: 0, minHeight: '400px' }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
      </section>

    </motion.div>
  );
};

export default Contact;
