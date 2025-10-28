import { NavLink, Stat, Service, Testimonial, TeamMember, LoanProduct } from './types';
import { Home, Info, Package, UserCheck, Crown, Phone, Users, Sprout, Store, GraduationCap, Zap, Heart, Landmark, TrendingUp, Shield, PiggyBank, Scale } from 'lucide-react';

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { 
    label: 'About Us', 
    href: '/about',
  },
  { 
    label: 'Products & Services', 
    href: '/services',
  },
  { 
    label: 'Membership', 
    href: '/membership',
  },
  { 
    label: 'Leadership', 
    href: '/leadership',
  },
  { 
    label: 'Contact Us', 
    href: '/contact',
  }
];

export const statsData: Stat[] = [
    { icon: Landmark, end: 6.2, decimals: 1, label: 'Total Loans Disbursed', prefix: 'KShs ', suffix: 'M+' },
    { icon: Users, end: 800, label: 'Active Members Served', suffix: '+' },
    { icon: UserCheck, end: 64, label: 'Common Interest Groups' },
    { icon: Package, end: 7, label: 'Loan Products Available' }
];

export const homeServices: Service[] = [
  { icon: Sprout, title: 'Agribusiness Loans', description: 'Empowering farmers across five value chains: avocado, poultry, dairy, banana, and coffee.', color: 'text-wov-green', link: '/services' },
  { icon: Store, title: 'Business & Trade Loans', description: 'Capital to start or expand your small or medium enterprise.', color: 'text-wov-teal', link: '/services' },
  { icon: GraduationCap, title: 'Education Loans', description: 'Invest in the future through learning for yourself or your children.', color: 'text-wov-blue', link: '/services' },
  { icon: Zap, title: 'Emergency Loans', description: 'Quick access to funds when you need it most during unpredictable situations.', color: 'text-wov-warning', link: '/services' },
];

export const testimonialsData: Testimonial[] = [
    {
        quote: "Women of Valour SACCO gave me the opportunity banks couldn't. Today, my poultry business employs three people and supports my children's education.",
        name: 'Mary K.',
        location: 'Khalaba Ward',
        image: 'https://i.pravatar.cc/100?u=mary'
    },
    {
        quote: "Through the group model, we've learned financial discipline and supported each other's dreams. I've expanded my shop and my future looks bright.",
        name: 'Jane M.',
        location: 'Bungoma',
        image: 'https://i.pravatar.cc/100?u=jane'
    },
    {
        quote: "The agribusiness loan helped me triple my coffee yield. The training they provide is just as valuable as the money. Truly a partner in growth.",
        name: 'John O.',
        location: 'Khalaba Ward',
        image: 'https://i.pravatar.cc/100?u=john'
    }
];

export const teamData: TeamMember[] = [
  { name: 'Scholastica N. Masika', title: 'Chairperson', qualifications: 'BA & Diploma in Business Management', description: 'Scholastica provides strategic vision and leadership, guiding the SACCO toward sustainable growth and generational impact.', image: 'https://firebasestorage.googleapis.com/v0/b/gen-code.appspot.com/o/image.jpg?alt=media&token=818b2c58-45e0-4965-978d-69279237c52f' },
  { name: 'Peris Wepukhulu', title: 'Vice Chairperson', qualifications: 'BSc Agriculture', description: 'Peris champions our agricultural initiatives, ensuring that farmer members receive the technical and financial support needed to thrive.', image: 'https://firebasestorage.googleapis.com/v0/b/gen-code.appspot.com/o/image-4.jpg?alt=media&token=a7090886-f6b0-449e-836f-b25b6a714659' },
  { name: 'Getruda Okomba', title: 'Secretary', qualifications: 'BSc Social Sciences', description: 'Getruda ensures administrative excellence, maintaining transparent records and upholding governance standards in all SACCO operations.', image: 'https://firebasestorage.googleapis.com/v0/b/gen-code.appspot.com/o/getruda-okomba.png?alt=media&token=36166e4a-5f5c-4d32-9c42-2d17c768991b' },
  { name: 'Catherine Kikete', title: 'Treasurer', qualifications: 'Diploma in Education & Cooperative Management', description: 'Catherine safeguards our financial resources with meticulous stewardship, ensuring every shilling is managed responsibly.', image: 'https://firebasestorage.googleapis.com/v0/b/gen-code.appspot.com/o/catherine-kikete.png?alt=media&token=48f8c413-5a03-4f51-b844-4700778c8577' },
  { name: 'Catherine Wamema', title: 'Credit Committee Chair', qualifications: 'Diploma in Education', description: 'Catherine leads the fair and rigorous assessment of loan applications, ensuring that capital reaches viable member projects.', image: 'https://firebasestorage.googleapis.com/v0/b/gen-code.appspot.com/o/catherine-wamema.png?alt=media&token=5a570c9d-16f3-426d-adcf-3ac9e16d47b7' },
  { name: 'Tabitha Wetete', title: 'Credit Committee Secretary', qualifications: 'Diploma in Nursing', description: 'Tabitha ensures accuracy, confidentiality, and efficiency in loan documentation and member records.', image: 'https://firebasestorage.googleapis.com/v0/b/gen-code.appspot.com/o/image-3.jpg?alt=media&token=e937667e-407a-42cd-bf63-c7821590e8a7' },
  { name: 'Rose Khaemba', title: 'Member Development', qualifications: 'MSc Education', description: 'Rose champions our training programs, developing educational content that empowers members to use credit wisely.', image: 'https://firebasestorage.googleapis.com/v0/b/gen-code.appspot.com/o/image-6.jpg?alt=media&token=a7114cf2-005d-4f1b-8777-6e9f1680ab1a' },
];

export const loanProductsData: LoanProduct[] = [
    { icon: TrendingUp, title: 'Development Loan', color: 'bg-wov-blue-dark', description: 'For members looking to invest in long-term assets such as land, housing, or significant infrastructure improvements.', idealFor: ['Land purchase', 'Home construction', 'Infrastructure improvements'], benefits: ['Longer repayment periods', 'Competitive rates', 'Supports wealth creation'], interestRate: 12, term: 48 },
    { icon: Sprout, title: 'Agribusiness Loan', color: 'bg-wov-green', description: 'Tailored specifically for farmers and agribusiness entrepreneurs to support agricultural ambitions.', idealFor: ['Farm inputs', 'Livestock purchase', 'Value addition'], benefits: ['Seasonal repayment options', 'Technical training included', 'Market linkages'], interestRate: 13, term: 24 },
    { icon: Store, title: 'Business and Trade Loan', color: 'bg-wov-teal', description: 'Capital to start or expand small and medium enterprises. We fuel entrepreneurship.', idealFor: ['Starting a retail shop', 'Expanding stock', 'Working capital'], benefits: ['Quick processing', 'Business mentorship', 'Flexible repayments'], interestRate: 14, term: 36 },
    { icon: GraduationCap, title: 'Education Loan', color: 'bg-wov-blue', description: 'Invest in the future through education. Covers school fees, uniforms, books, and other educational expenses.', idealFor: ['School fees', 'University tuition', 'Vocational training'], benefits: ['Term-aligned repayment', 'Covers multiple beneficiaries', 'Supports all education levels'], interestRate: 10, term: 12 },
    { icon: Zap, title: 'Emergency Loan', color: 'bg-wov-warning', description: 'Our emergency loans provide quick access to funds during urgent situations—medical crises, funerals, or unexpected family needs.', idealFor: ['Medical emergencies', 'Funeral expenses', 'Urgent home repairs'], benefits: ['Fast approval (48-72 hours)', 'Minimal documentation', 'Compassionate processing'], interestRate: 15, term: 6 },
    { icon: Heart, title: 'Medical Loan', color: 'bg-wov-error', description: 'Healthcare should never be out of reach. These loans cover medical bills, procedures, and treatment costs for you and your loved ones.', idealFor: ['Hospital bills', 'Surgical procedures', 'Medication costs'], benefits: ['Direct payment to facilities', 'Covers family members', 'Supportive process'], interestRate: 15, term: 12 },
    { icon: Users, title: 'Group/Chama Loan', color: 'bg-wov-green-dark', description: 'Designed for organized groups within the SACCO. Pool resources, access larger capital, and grow together.', idealFor: ['Group business ventures', 'Chama investments', 'Community projects'], benefits: ['Larger loan limits', 'Shared accountability', 'Builds group cohesion'], interestRate: 11, term: 60 }
];

export const coreValues = [
    { icon: Shield, title: 'Trust', description: 'We operate with transparency and integrity.' },
    { icon: TrendingUp, title: 'Empowerment', description: 'We equip members with tools for self-reliance.' },
    { icon: Users, title: 'Community Support', description: 'We succeed together as a united community.' },
    { icon: PiggyBank, title: 'Financial Discipline', description: 'We promote responsible money management.' },
    { icon: Scale, title: 'Inclusivity', description: 'We welcome all, especially the marginalized.' }
];