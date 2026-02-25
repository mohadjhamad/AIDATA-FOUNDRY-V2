import React from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, Building2, Globe, Server } from 'lucide-react';

const credentials = [
  { icon: Award, label: 'Databricks Solution Architect Champion' },
  { icon: Shield, label: 'Unity Catalog & Governance Specialist' },
  { icon: Building2, label: 'Enterprise Platform Delivery Experience' },
  { icon: Globe, label: 'Cross-Industry Architecture Advisory' },
  { icon: Server, label: 'Azure & Lakehouse Architecture Certified' },
];

export default function CredentialsSection() {
  return (
    <section className="relative py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p 
          className="text-center text-sm uppercase tracking-widest text-slate-500 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Experience & Credentials
        </motion.p>
        
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {credentials.map((cred, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-3 px-5 py-3 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, borderColor: 'rgba(239, 68, 68, 0.5)' }}
            >
              <cred.icon className="w-5 h-5 text-red-400" />
              <span className="text-sm text-slate-300 whitespace-nowrap">{cred.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}