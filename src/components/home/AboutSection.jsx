import React from 'react';
import { motion } from 'framer-motion';
import { Database, Brain, Zap } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      
      {/* Decorative elements */}
      {/* Enhanced glowing orbs */}
      <motion.div
        className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(239, 68, 68, 0.2) 0%, transparent 70%)',
          filter: 'blur(70px)',
        }}
        animate={{ x: [-50, 80, -50], y: [0, 40, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(251, 146, 60, 0.2) 0%, transparent 70%)',
          filter: 'blur(70px)',
        }}
        animate={{ x: [0, -60, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      
      {/* Data particles with glow */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(70)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              background: `rgba(239, 68, 68, ${Math.random() * 0.6 + 0.4})`,
              boxShadow: '0 0 12px rgba(239, 68, 68, 0.6)',
            }}
            animate={{
              y: [0, -70, 0],
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.8, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      {/* Circuit lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        {[...Array(15)].map((_, i) => (
          <motion.line
            key={i}
            x1={`${Math.random() * 100}%`}
            y1={`${Math.random() * 100}%`}
            x2={`${Math.random() * 100}%`}
            y2={`${Math.random() * 100}%`}
            stroke="rgb(239, 68, 68)"
            strokeWidth="1"
            strokeDasharray="5,8"
            animate={{ 
              pathLength: [0, 1, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </svg>
      
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="text-white">What We </span>
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Do</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-4xl mx-auto">
            AI Data Foundry helps organizations design, modernize, and govern enterprise data platforms so analytics and AI initiatives deliver real, sustainable value.
          </p>
          <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-4xl mx-auto mt-6">
            Our focus is on strong architecture foundations, scalable pipelines, and governance models that support both speed and control.
          </p>
        </motion.div>
        
        {/* Visual elements */}
        <motion.div 
          className="mt-20 flex items-center justify-center gap-8 md:gap-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {[
            { icon: Database, label: 'Data Architecture' },
            { icon: Brain, label: 'AI Enablement' },
            { icon: Zap, label: 'Platform Velocity' },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center gap-4"
              whileHover={{ y: -5 }}
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 flex items-center justify-center">
                <item.icon className="w-10 h-10 text-red-400" />
              </div>
              <span className="text-sm text-slate-400">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}