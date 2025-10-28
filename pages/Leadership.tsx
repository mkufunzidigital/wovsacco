
import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/common/PageHeader';
import { teamData } from '../constants';
import { TeamMember } from '../types';

const TeamMemberCard: React.FC<{ member: TeamMember, index: number }> = ({ member, index }) => (
    <motion.div 
        className="bg-white rounded-lg shadow-lg overflow-hidden text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
    >
        <img src={member.image} alt={member.name} className="w-full h-64 object-cover"/>
        <div className="p-6">
            <h3 className="text-xl font-bold text-wov-blue-dark">{member.name}</h3>
            <p className="text-wov-teal font-semibold mb-2">{member.title}</p>
            <p className="text-sm italic text-wov-neutral-medium-gray mb-3">{member.qualifications}</p>
            <p className="text-sm text-wov-neutral-medium-gray">{member.description}</p>
        </div>
    </motion.div>
);


const Leadership = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <PageHeader 
        title="Leadership & Governance" 
        subtitle="Meet the dedicated team building futures and ensuring transparent, member-focused governance." 
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Leadership', href: '/leadership' }]} 
      />
      
      <section className="py-20 bg-wov-neutral-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-wov-blue-dark font-serif mb-12">Our Board & Committee</h2>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                 {teamData.map((member, index) => (
                    <TeamMemberCard key={index} member={member} index={index} />
                 ))}
             </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-wov-blue-dark font-serif mb-4">Our Governance Framework</h2>
            <p className="text-wov-neutral-medium-gray mb-8">
                Women of Valour SACCO operates under a robust governance framework designed to ensure transparency, accountability, and member protection. We are guided by the Cooperative Societies Act, our registered Bylaws, and directives from the Ministry of Cooperatives.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="p-6 border border-wov-neutral-light-gray rounded-lg">
                    <h3 className="font-bold text-xl text-wov-blue-dark mb-2">Board of Directors</h3>
                    <p>Nine elected members provide strategic oversight and policy direction.</p>
                </div>
                <div className="p-6 border border-wov-neutral-light-gray rounded-lg">
                    <h3 className="font-bold text-xl text-wov-blue-dark mb-2">Supervisory Committee</h3>
                    <p>Ensures accountability, compliance, and protection of members' interests.</p>
                </div>
                 <div className="p-6 border border-wov-neutral-light-gray rounded-lg">
                    <h3 className="font-bold text-xl text-wov-blue-dark mb-2">Annual General Meeting</h3>
                    <p>The supreme decision-making body where every member has a voice.</p>
                </div>
            </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Leadership;
