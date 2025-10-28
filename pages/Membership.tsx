
import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/common/PageHeader';
// FIX: Import the Phone icon from lucide-react to resolve the "Cannot find name 'Phone'" error.
import { UserPlus, BookOpen, Handshake, Users, Award, Shield, CheckCircle, Phone } from 'lucide-react';
import Button from '../components/common/Button';

const Step = ({ icon: Icon, title, description, stepNumber }: { icon: React.ElementType, title: string, description: string, stepNumber: number }) => (
    <div className="flex">
        <div className="flex flex-col items-center mr-4">
            <div>
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-wov-teal text-white font-bold text-xl">{stepNumber}</div>
            </div>
            <div className="w-px h-full bg-wov-teal/50"></div>
        </div>
        <div className="pb-8">
            <div className="flex items-center mb-2">
                <Icon className="w-6 h-6 mr-2 text-wov-teal"/>
                <p className="font-bold text-wov-blue-dark">{title}</p>
            </div>
            <p className="text-wov-neutral-medium-gray">{description}</p>
        </div>
    </div>
);

const Membership = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <PageHeader 
        title="Join Our Family" 
        subtitle="Become a member of Women of Valour SACCO and take the first step towards a brighter financial future." 
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Membership', href: '/membership' }]} 
      />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-wov-blue-dark font-serif mb-12">Why Become a Member?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Benefits cards */}
                <div className="p-6 text-center">
                    <Award className="w-12 h-12 mx-auto text-wov-green mb-4"/>
                    <h3 className="font-bold text-xl text-wov-blue-dark mb-2">Access to Affordable Credit</h3>
                    <p>Our group-based guarantee system ensures you can access loans without traditional collateral.</p>
                </div>
                 <div className="p-6 text-center">
                    <BookOpen className="w-12 h-12 mx-auto text-wov-teal mb-4"/>
                    <h3 className="font-bold text-xl text-wov-blue-dark mb-2">Financial Education & Training</h3>
                    <p>Gain knowledge in financial literacy, business management, and agricultural practices for lasting success.</p>
                </div>
                <div className="p-6 text-center">
                    <Shield className="w-12 h-12 mx-auto text-wov-blue mb-4"/>
                    <h3 className="font-bold text-xl text-wov-blue-dark mb-2">Safe Savings Platform</h3>
                    <p>Your savings are secure with us, managed professionally, and earn you dividends.</p>
                </div>
            </div>
        </div>
      </section>

      <section className="py-20 bg-wov-neutral-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                     <h2 className="text-3xl font-bold text-wov-blue-dark font-serif mb-6">How to Become a Member</h2>
                     <div>
                        <Step stepNumber={1} icon={Phone} title="Contact Us" description="Reach out via phone, email, or visit our office to express your interest and attend an information session."/>
                        <Step stepNumber={2} icon={Users} title="Join or Form a Group" description="Join an existing Common Interest Group (CIG) or we'll help you form a new one with community members."/>
                        <Step stepNumber={3} icon={UserPlus} title="Complete Forms & Deposit" description="Fill out the membership forms, pay the one-time registration fee and make your initial savings deposit."/>
                     </div>
                </div>
                 <div>
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold text-wov-blue-dark mb-4">Membership Requirements</h3>
                        <ul className="space-y-3 text-wov-neutral-medium-gray">
                            <li className="flex"><CheckCircle className="w-5 h-5 mr-2 text-wov-green flex-shrink-0 mt-1"/> Be 18 years or older with a valid national ID.</li>
                            <li className="flex"><CheckCircle className="w-5 h-5 mr-2 text-wov-green flex-shrink-0 mt-1"/> Reside or operate within Bungoma County.</li>
                            <li className="flex"><CheckCircle className="w-5 h-5 mr-2 text-wov-green flex-shrink-0 mt-1"/> Join or form a Common Interest Group (CIG).</li>
                            <li className="flex"><CheckCircle className="w-5 h-5 mr-2 text-wov-green flex-shrink-0 mt-1"/> Pay a one-time registration fee.</li>
                            <li className="flex"><CheckCircle className="w-5 h-5 mr-2 text-wov-green flex-shrink-0 mt-1"/> Commit to regular monthly savings.</li>
                        </ul>
                         <Button variant="primary" className="w-full mt-8" onClick={() => window.location.hash = '/contact'}>Start Your Journey</Button>
                    </div>
                </div>
            </div>
        </div>
      </section>

    </motion.div>
  );
};

export default Membership;