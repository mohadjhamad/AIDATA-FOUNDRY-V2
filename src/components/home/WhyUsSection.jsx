import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Lock, Building } from 'lucide-react';

const reasons = [
  {
    icon: Layers,
    title: 'Architecture-first delivery',
    description: 'Every engagement starts with strong architectural foundations to ensure scalability, security, and long-term sustainability.',
    gradient: 'from-red-500 to-red-600',
  },
  {
    icon: Lock,
    title: 'Governance without friction',
    description: 'Security, access control, and governance are embedded by design—supporting delivery rather than slowing it down.',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: Building,
    title: 'Built for enterprise',
    description: 'Designed for complex platforms with multiple teams, domains, and real-world delivery constraints.',
    gradient: 'from-rose-500 to-pink-600',
  },
];

export default function WhyUsSection() {
  return (
    <section className="relative py-32 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Why </span>
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">AI Data Foundry</span>
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-slate-800/50 to-slate-900/50 rounded-3xl border border-slate-700/50 group-hover:border-red-500/30 transition-colors" />
              <div className="relative p-8 md:p-10">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${reason.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <reason.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{reason.title}</h3>
                <p className="text-slate-400 leading-relaxed">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}