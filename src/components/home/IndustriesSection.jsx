import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { Building, Train, Landmark, ShoppingCart, GraduationCap, ArrowRight } from 'lucide-react';

const industries = [
  { icon: Building, name: 'Public Sector & Government' },
  { icon: Train, name: 'Transportation & Infrastructure' },
  { icon: Landmark, name: 'Financial Services & Insurance' },
  { icon: ShoppingCart, name: 'Retail & Large Operations' },
  { icon: GraduationCap, name: 'Higher Education' },
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="relative py-32 bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Industries We </span>
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Support</span>
          </h2>
        </motion.div>
        
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="flex items-center gap-3 px-6 py-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-red-500/30 transition-all cursor-pointer"
            >
              <industry.icon className="w-5 h-5 text-red-400" />
              <span className="text-slate-200 whitespace-nowrap">{industry.name}</span>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link 
            to={createPageUrl('Industries')} 
            onClick={() => window.scrollTo(0, 0)}
            className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors group"
          >
            <span>Learn More About Our Industry Experience</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}