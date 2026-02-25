import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Award, Users, Target, Zap } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-red-950/10 to-slate-950" />
        
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(239, 68, 68, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(239, 68, 68, 0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        {/* Animated orbs */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], x: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to={createPageUrl('Home')} className="flex items-center gap-3">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698d38bc97fec5d215c3ea55/1f17f1835_ChatGPTImageFeb16202607_05_28PM.png" 
              alt="AI Data Foundry" 
              className="h-16 w-auto"
            />
          </Link>
          <Link to={createPageUrl('Home')} className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </nav>

      <div className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">About </span>
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">AI Data Foundry</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              We're data platform architects specializing in enterprise-scale Databricks implementations and modern lakehouse architectures.
            </p>
          </motion.div>

          {/* About the Founder */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-20"
          >
            <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-10 md:p-16">
              <h2 className="text-3xl font-bold text-white mb-6">About the Founder</h2>
              <h3 className="text-2xl font-semibold text-white mb-2">Mohammad Hamad</h3>
              <p className="text-lg text-red-400 mb-8">Distinguished Principal Architect — Data & AI Platforms</p>
              <ul className="space-y-3 text-lg text-slate-300 mb-8">
                <li>• 20+ years experience</li>
                <li>• Databricks Solutions Architect Champion</li>
                <li>• Architect of enterprise Databricks lakehouse platforms</li>
                <li>• Speaker and author on Databricks architecture</li>
                <li>• Creator of AI Data Foundry platform framework</li>
              </ul>
              <a 
                href="https://www.linkedin.com/in/mohammad-hamad-mh/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button className="bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-500 hover:to-orange-400">
                  View LinkedIn Profile
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-20"
          >
            <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-10 md:p-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-xl text-slate-300 leading-relaxed">
                To help organizations build governed, scalable data platforms that enable AI and analytics to deliver real business value.
              </p>
              <p className="text-xl text-slate-300 leading-relaxed mt-4">
                We believe in architecture-first delivery, governance without friction, and platforms designed for enterprise environments.
              </p>
            </div>
          </motion.div>

          {/* Trusted by Enterprise */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-20"
          >
            <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-10 md:p-16">
              <h2 className="text-3xl font-bold text-white mb-8">Trusted by Enterprise-Scale Data & AI Initiatives</h2>
              <ul className="space-y-4 text-lg text-slate-300">
                <li>• Specialized in Databricks platform architecture</li>
                <li>• Expert in Microsoft Azure data platform engineering</li>
                <li>• Extensive enterprise architecture experience</li>
                <li>• Speaker and published author on Databricks, Lakehouse, and AI platform architecture</li>
              </ul>
            </div>
          </motion.div>

          {/* Platform Expertise */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-20"
          >
            <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-10 md:p-16">
              <h2 className="text-3xl font-bold text-white mb-8">Platform Expertise</h2>
              <ul className="space-y-4 text-lg text-slate-300">
                <li>• Databricks platform architecture</li>
                <li>• Microsoft Azure data platform engineering</li>
                <li>• Lakehouse architecture design</li>
                <li>• Unity Catalog governance and enterprise security</li>
                <li>• Enterprise AI platform architecture</li>
              </ul>
            </div>
          </motion.div>

          {/* Published Work */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-20"
          >
            <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-10 md:p-16">
              <h2 className="text-3xl font-bold text-white mb-8">Published Work</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Simplifying Orchestration in the Databricks Lakehouse</h3>
                  <p className="text-slate-400 mb-2">LinkedIn</p>
                  <a 
                    href="https://www.linkedin.com/feed/update/urn:li:activity:7421945136550535168/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-red-400 hover:text-red-300 transition-colors"
                  >
                    Read Article →
                  </a>
                </div>
                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Closing a Real Security Gap: Why We Standardized on Unity Catalog</h3>
                  <p className="text-slate-400 mb-2">Medium</p>
                  <a 
                    href="https://medium.com/@mohammadhamad" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-red-400 hover:text-red-300 transition-colors"
                  >
                    Read Article →
                  </a>
                </div>
                <div className="border-l-4 border-red-400 pl-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Simplifying Orchestration in the Databricks Lakehouse</h3>
                  <p className="text-slate-400 mb-2">Medium</p>
                  <a 
                    href="https://medium.com/@mohammadhamad" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-red-400 hover:text-red-300 transition-colors"
                  >
                    Read Article →
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Architecture Diagrams */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Architecture Diagrams</h2>
            <div className="space-y-8">
              <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-10">
                <h3 className="text-2xl font-semibold text-white mb-4">Lakehouse Architecture Diagram</h3>
                <div className="flex items-center justify-center">
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698d38bc97fec5d215c3ea55/511fe17e6_enterprise_lakehouse_architecture.png" 
                    alt="Enterprise Lakehouse Architecture"
                    className="max-w-full h-auto rounded-xl"
                  />
                </div>
              </div>
              <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-10">
                <h3 className="text-2xl font-semibold text-white mb-4">Databricks Platform Architecture Diagram</h3>
                <div className="flex items-center justify-center">
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698d38bc97fec5d215c3ea55/8ccc121f2_databricks_platform_architecture.png" 
                    alt="Databricks Platform Architecture"
                    className="max-w-full h-auto rounded-xl"
                  />
                </div>
              </div>
              <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-10">
                <h3 className="text-2xl font-semibold text-white mb-4">AI Platform Pipeline Architecture Diagram</h3>
                <div className="flex items-center justify-center">
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698d38bc97fec5d215c3ea55/b18548f54_ai_platform_pipeline.png" 
                    alt="AI Platform Pipeline Architecture"
                    className="max-w-full h-auto rounded-xl"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Values */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {[
              {
                icon: Award,
                title: 'Excellence',
                description: 'We hold ourselves to the highest standards of technical excellence and solution delivery.',
              },
              {
                icon: Users,
                title: 'Partnership',
                description: 'We work as an extension of your team, enabling your people to succeed long-term.',
              },
              {
                icon: Zap,
                title: 'Pragmatism',
                description: 'We focus on practical, sustainable solutions that work in real enterprise environments.',
              },
              {
                icon: Target,
                title: 'Impact',
                description: 'We measure success by the business value and outcomes our solutions deliver.',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="bg-slate-900/30 border border-slate-800 rounded-2xl p-8 hover:border-red-500/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-red-500/30 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-slate-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-center"
          >
            <Link to={createPageUrl('Contact')}>
              <Button size="lg" className="bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-500 hover:to-orange-400 text-lg px-10 py-7 rounded-xl group">
                Let's Work Together
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}