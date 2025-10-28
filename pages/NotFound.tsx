
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-wov-neutral-cream text-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-8xl md:text-9xl font-bold text-wov-teal mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-semibold text-wov-blue-dark font-serif mb-4">Page Not Found</h2>
        <p className="text-lg text-wov-neutral-medium-gray mb-8 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Button variant="primary" onClick={() => window.location.hash = '/'}>
            Return to Homepage
        </Button>
      </motion.div>
    </div>
  );
};

export default NotFound;
