import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { ArrowRight, Sparkles, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Base gradient with stronger red tones */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-red-950/40 to-slate-950" />
      
      {/* Hexagonal tech grid */}
      <div className="absolute inset-0 opacity-40">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hexPattern" x="0" y="0" width="100" height="87" patternUnits="userSpaceOnUse">
              <path d="M50 0L93.3 25v50L50 100 6.7 75V25z" fill="none" stroke="rgba(239, 68, 68, 0.3)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexPattern)" />
        </svg>
      </div>
      
      {/* Binary code matrix rain */}
      <div className="absolute inset-0 opacity-30 overflow-hidden">
        {[...Array(20)].map((_, i) =>
        <motion.div
          key={i}
          className="absolute text-red-400 font-mono text-xs leading-tight"
          style={{
            left: `${i * 5 % 100}%`,
            top: -50,
            textShadow: '0 0 5px rgba(239, 68, 68, 0.5)'
          }}
          animate={{
            y: ['0vh', '120vh']
          }}
          transition={{
            duration: 10 + Math.random() * 5,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5
          }}>

            {Array.from({ length: 25 }, () => Math.random() > 0.5 ? '1' : '0').join('\n')}
          </motion.div>
        )}
      </div>
      
      {/* Glowing data particles with trails */}
      <div className="absolute inset-0">
        {[...Array(120)].map((_, i) =>
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            background: `rgba(239, 68, 68, ${Math.random() * 0.6 + 0.4})`,
            boxShadow: '0 0 15px rgba(239, 68, 68, 0.8)'
          }}
          animate={{
            y: [0, Math.random() * -150 - 50, 0],
            x: [0, Math.random() * 60 - 30, 0],
            opacity: [0.4, 1, 0.4],
            scale: [1, 2, 1]
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3
          }} />

        )}
      </div>
      
      {/* Circuit board connections */}
      <svg className="absolute inset-0 w-full h-full opacity-30">
        {[...Array(40)].map((_, i) => {
          const isHorizontal = Math.random() > 0.5;
          return (
            <motion.line
              key={i}
              x1={isHorizontal ? '0%' : `${Math.random() * 100}%`}
              y1={isHorizontal ? `${Math.random() * 100}%` : '0%'}
              x2={isHorizontal ? '100%' : `${Math.random() * 100}%`}
              y2={isHorizontal ? `${Math.random() * 100}%` : '100%'}
              stroke="rgb(239, 68, 68)"
              strokeWidth="1.5"
              strokeDasharray="8,12"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 1, 1, 0],
                opacity: [0, 0.7, 0.7, 0]
              }}
              transition={{
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3
              }} />);


        })}
      </svg>
      
      {/* Large glowing orbs with stronger presence */}
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(239, 68, 68, 0.25) 0%, transparent 70%)',
          filter: 'blur(80px)',
          top: '15%',
          left: '5%'
        }}
        animate={{
          scale: [1, 1.4, 1],
          x: [0, 120, 0],
          y: [0, -60, 0]
        }}
        transition={{ duration: 15, repeat: Infinity }} />

      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(251, 146, 60, 0.25) 0%, transparent 70%)',
          filter: 'blur(80px)',
          bottom: '15%',
          right: '5%'
        }}
        animate={{
          scale: [1.4, 1, 1.4],
          x: [0, -120, 0],
          y: [0, 60, 0]
        }}
        transition={{ duration: 12, repeat: Infinity }} />

      
      {/* Animated data flow streams */}
      <div className="absolute inset-0 opacity-40">
        {[...Array(12)].map((_, i) =>
        <motion.div
          key={i}
          className="absolute h-1 w-40 bg-gradient-to-r from-transparent via-red-500 to-transparent"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            rotate: `${Math.random() * 360}deg`,
            filter: 'blur(1px)'
          }}
          animate={{
            x: [0, Math.random() * 300 - 150],
            y: [0, Math.random() * 300 - 150],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2
          }} />

        )}
      </div>
      
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 border-2 border-red-500/40 rotate-45"
        style={{ boxShadow: '0 0 20px rgba(239, 68, 68, 0.3)' }}
        animate={{ rotate: [45, 90, 45], y: [0, 25, 0] }}
        transition={{ duration: 10, repeat: Infinity }} />

      <motion.div
        className="absolute bottom-32 left-16 w-24 h-24 border-2 border-orange-500/40"
        style={{ boxShadow: '0 0 20px rgba(251, 146, 60, 0.3)' }}
        animate={{ rotate: [0, -45, 0], x: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity }} />

      
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}>
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698d38bc97fec5d215c3ea55/2f593fdc8_ChatGPTImageFeb17202610_05_20PM.png"
              alt="AI Data Foundry"
              className="h-24 md:h-16 w-auto" />
          </motion.div>
          
          {/* Desktop Menu */}
          <motion.div
            className="hidden md:flex items-center gap-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}>
            <a href="#services" className="text-slate-300 hover:text-white transition-colors">Services</a>
            <a href="#process" className="text-slate-300 hover:text-white transition-colors">Process</a>
            <a href="#industries" className="text-slate-300 hover:text-white transition-colors">Industries</a>
            <Link to={createPageUrl('About')} onClick={() => window.scrollTo(0, 0)} className="text-slate-300 hover:text-white transition-colors">About</Link>
            <Link to={createPageUrl('Contact')} onClick={() => window.scrollTo(0, 0)}>
              <Button className="bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-500 hover:to-orange-400 text-white border-0">
                Get Started
              </Button>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Slide Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-slate-900/95 backdrop-blur-xl border-l border-slate-800 md:hidden">
              <div className="flex flex-col h-full p-6">
                <button
                  className="self-end p-2 text-white mb-8"
                  onClick={() => setMobileMenuOpen(false)}>
                  <X className="w-6 h-6" />
                </button>
                <div className="flex flex-col gap-6">
                  <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-white transition-colors text-lg">Services</a>
                  <a href="#process" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-white transition-colors text-lg">Process</a>
                  <a href="#industries" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-white transition-colors text-lg">Industries</a>
                  <Link to={createPageUrl('About')} onClick={() => { window.scrollTo(0, 0); setMobileMenuOpen(false); }} className="text-slate-300 hover:text-white transition-colors text-lg">About</Link>
                  <Link to={createPageUrl('Contact')} onClick={() => { window.scrollTo(0, 0); setMobileMenuOpen(false); }}>
                    <Button className="w-full bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-500 hover:to-orange-400 text-white border-0 mt-4">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      
      {/* Hero content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-20 md:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>

          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm mb-8 mt-32"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}>

            <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
            <span className="text-sm text-slate-300">Databricks Solution Architect Champion • Enterprise Data & AI</span>
          </motion.div>
          
          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
            <span className="text-white">AI Data Platform Architecture & Lakehouse Infrastructure for Enterprise-Scale Systems</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            We design governed, scalable data platforms that enable reliable analytics and AI—built on Databricks, Azure, and modern lakehouse architectures.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={createPageUrl('Contact')}>
              <Button size="lg" className="bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-500 hover:to-orange-400 text-lg px-8 py-6 rounded-xl group">
                Book a 30-min Consult
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href="#services">
              <Button size="lg" variant="outline" className="bg-background text-[#FF1F1F] px-8 py-6 text-lg font-medium rounded-xl inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border shadow-sm hover:text-accent-foreground h-10 border-slate-700 hover:bg-slate-800">
                Explore Services
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}>

        <div className="w-6 h-10 rounded-full border-2 border-slate-600 flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-red-400"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }} />

        </div>
      </motion.div>
    </section>);

}
