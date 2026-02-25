import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import HeroSection from '../components/home/HeroSection';
import CredentialsSection from '../components/home/CredentialsSection';
import AboutSection from '../components/home/AboutSection';
import WhyUsSection from '../components/home/WhyUsSection';
import ServicesSection from '../components/home/ServicesSection';
import ProcessSection from '../components/home/ProcessSection';
import OutcomesSection from '../components/home/OutcomesSection';
import IndustriesSection from '../components/home/IndustriesSection';
import CTASection from '../components/home/CTASection';
import Footer from '../components/home/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <HeroSection />
      <CredentialsSection />
      <AboutSection />
      <WhyUsSection />
      <ServicesSection />
      <ProcessSection />
      <OutcomesSection />
      <IndustriesSection />
      <CTASection />
      <Footer />
    </div>
  );
}