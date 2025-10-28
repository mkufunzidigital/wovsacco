
import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import LoadingSpinner from './components/common/LoadingSpinner';
import ScrollToTop from './components/common/ScrollToTop';

const Home = lazy(() => import('./pages/Home'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const ProductsAndServices = lazy(() => import('./pages/ProductsAndServices'));
const Membership = lazy(() => import('./pages/Membership'));
const Leadership = lazy(() => import('./pages/Leadership'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <main className="bg-wov-neutral-white text-wov-neutral-dark-text font-sans">
        <AnimatePresence mode="wait">
          <Suspense fallback={<LoadingSpinner />}>
            <ScrollToTop />
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/services" element={<ProductsAndServices />} />
              <Route path="/membership" element={<Membership />} />
              <Route path="/leadership" element={<Leadership />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}

const AppWrapper = () => (
    <Router>
        <App />
    </Router>
);


export default AppWrapper;
