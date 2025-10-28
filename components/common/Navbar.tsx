import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '../../constants';
import Button from './Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const logo = (
    <Link to="/" className="flex items-center space-x-2">
      <img src="https://firebasestorage.googleapis.com/v0/b/gen-code.appspot.com/o/logo.png?alt=media&token=8770a312-32a2-4a25-9610-d83219335a14" alt="Women of Valour SACCO Logo" className="h-14 w-auto" />
      <div className="hidden sm:flex flex-col">
        <span className="font-bold text-lg leading-tight text-wov-blue-dark">Women of Valour</span>
        <span className="text-sm leading-tight text-wov-teal">SACCO Society Ltd.</span>
      </div>
    </Link>
  );

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {logo}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  `font-semibold transition-colors duration-300 relative group ${isActive ? 'text-wov-teal' : 'text-wov-blue-dark hover:text-wov-teal'}`
                }
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-wov-teal scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
              </NavLink>
            ))}
          </div>
          <div className="hidden md:block">
            <Button variant="primary" onClick={() => window.location.hash = '/membership'}>Join Us Today</Button>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-wov-blue-dark hover:text-wov-teal transition-colors">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 md:hidden"
            onClick={toggleMenu}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-lg p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-8">
                <Link to="/" onClick={toggleMenu}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/gen-code.appspot.com/o/logo.png?alt=media&token=8770a312-32a2-4a25-9610-d83219335a14" alt="Women of Valour SACCO Logo" className="h-12 w-auto" />
                </Link>
                <button onClick={toggleMenu} className="text-wov-blue-dark hover:text-wov-teal">
                  <X size={28} />
                </button>
              </div>
              <div className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.href}
                    to={link.href}
                    onClick={toggleMenu}
                    className={({ isActive }) =>
                      `text-xl font-semibold ${isActive ? 'text-wov-teal' : 'text-wov-blue-dark'}`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
                <div className="pt-6">
                  <Button variant="primary" fullWidth onClick={() => { window.location.hash = '/membership'; toggleMenu(); }}>Join Us Today</Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;