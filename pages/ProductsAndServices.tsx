import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/common/PageHeader';
import { loanProductsData } from '../constants';
import Button from '../components/common/Button';
import { CheckCircle } from 'lucide-react';
import LoanCalculator from '../components/services/LoanCalculator';

const ProductsAndServices = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <PageHeader 
        title="Products & Services" 
        subtitle="Comprehensive financial solutions and capacity building designed for your success." 
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Products & Services', href: '/services' }]} 
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-wov-blue-dark font-serif mb-12">Our Loan Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loanProductsData.map((loan, index) => (
              <motion.div 
                key={index} 
                className="bg-wov-neutral-cream rounded-lg shadow-lg overflow-hidden flex flex-col"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className={`p-6 ${loan.color} text-white flex items-center`}>
                  <loan.icon className="w-10 h-10 mr-4"/>
                  <h3 className="text-2xl font-bold">{loan.title}</h3>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-wov-neutral-medium-gray mb-4 flex-grow">{loan.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-wov-blue-dark mb-2">Ideal For:</h4>
                    <ul className="space-y-1 text-sm text-wov-neutral-medium-gray">
                      {loan.idealFor.map((item, i) => (
                        <li key={i} className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-1 text-wov-green flex-shrink-0"/><span>{item}</span></li>
                      ))}
                    </ul>
                  </div>
                   <Button variant="secondary" className="mt-auto w-full" onClick={() => window.location.hash = '/contact'}>Apply Now</Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <LoanCalculator loanProducts={loanProductsData} />
      
      <section className="py-20 bg-wov-neutral-cream">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                     <h2 className="text-3xl font-bold text-wov-blue-dark font-serif mb-4">Beyond Loans: Capacity Building</h2>
                    <p className="text-wov-neutral-medium-gray mb-6">We believe in "credit with education". Financial capital alone is not enough—our members need knowledge, skills, and networks to succeed. We offer structured training programs and valuable networking opportunities to ensure sustainable growth.</p>
                    <Button variant="primary" onClick={() => window.location.hash = '/contact'}>Inquire About Training</Button>
                </div>
                <div>
                    <img src="https://picsum.photos/seed/training/600/400" alt="Training session" className="rounded-lg shadow-xl" />
                </div>
            </div>
         </div>
      </section>

    </motion.div>
  );
};

export default ProductsAndServices;