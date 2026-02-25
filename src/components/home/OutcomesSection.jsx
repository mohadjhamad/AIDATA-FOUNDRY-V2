import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, ShieldCheck, DollarSign } from 'lucide-react';

const outcomes = [
  {
    icon: TrendingDown,
    label: 'Reduced',
    title: 'Orchestration Overhead',
    description: 'Simplified control planes and streamlined pipeline operations',
    color: 'blue',
  },
  {
    icon: ShieldCheck,
    label: 'Improved',
    title: 'Governance Posture',
    description: 'Unified access control, lineage, and audit readiness across platforms',
    color: 'cyan',
  },
  {
    icon: DollarSign,
    label: 'Lowered',
    title: 'Runtime Cost Variability',
    description: 'Predictable spend through right-sized architecture and workload tuning',
    color: 'emerald',
  },
];

const colorMap = {
  blue: 'from-red-500 to-red-600',
  cyan: 'from-orange-500 to-red-500',
  emerald: 'from-rose-500 to-pink-500',
};

export default function OutcomesSection() {
  return (
    <section className="relative py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">What Clients </span>
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Achieve</span>
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {outcomes.map((outcome, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative group"
            >
              <div className="absolute inset-0 rounded-3xl bg-slate-800/30 border border-slate-700/50 group-hover:border-slate-600/50 transition-colors" />
              <div className="relative p-8 md:p-10">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorMap[outcome.color]} flex items-center justify-center mb-6`}>
                  <outcome.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm text-slate-500 uppercase tracking-wider mb-2">{outcome.label}</p>
                <h3 className="text-2xl font-bold text-white mb-4">{outcome.title}</h3>
                <p className="text-slate-400 leading-relaxed">{outcome.description}</p>
              </div>
              
              {/* Hover glow */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${colorMap[outcome.color]} opacity-0 group-hover:opacity-5 transition-opacity blur-xl`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}