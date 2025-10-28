
import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-wov-neutral-white">
      <div className="relative">
        <div className="w-20 h-20 border-4 border-wov-blue/20 rounded-full"></div>
        <div className="w-20 h-20 border-4 border-wov-teal border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
