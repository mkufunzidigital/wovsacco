
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  breadcrumbs: { label: string; href: string }[];
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, breadcrumbs }) => {
  return (
    <div className="relative bg-hero-gradient py-24 sm:py-32 text-white">
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif"
        >
          {title}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-lg sm:text-xl max-w-2xl mx-auto text-gray-200"
        >
          {subtitle}
        </motion.p>
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 flex items-center justify-center space-x-2 text-sm font-medium">
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              <Link to={crumb.href} className="hover:underline">
                {crumb.label}
              </Link>
              {index < breadcrumbs.length - 1 && <ChevronRight size={16} />}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PageHeader;
