import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Button } from '@/components/ui/button';
import { 
  ArrowLeft, 
  ArrowRight,
  Building, 
  Train, 
  Landmark, 
  ShoppingCart, 
  GraduationCap,
  CheckCircle
} from 'lucide-react';

const industries = [
  {
    icon: Building,
    name: 'Public Sector & Government',
    description: 'Helping government agencies modernize legacy systems and build secure, compliant data platforms that enable data-driven policy making.',
    challenges: ['Legacy system modernization', 'Data security & compliance', 'Cross-agency data sharing', 'Citizen service analytics'],
    color: 'blue',
  },
  {
    icon: Train,
    name: 'Transportation & Infrastructure',
    description: 'Building real-time analytics platforms for transportation networks, enabling predictive maintenance and operational efficiency.',
    challenges: ['IoT data ingestion at scale', 'Predictive maintenance', 'Real-time operations', 'Asset management'],
    color: 'cyan',
  },
  {
    icon: Landmark,
    name: 'Financial Services & Insurance',
    description: 'Designing governed data platforms that meet regulatory requirements while enabling advanced analytics and AI for risk management.',
    challenges: ['Regulatory compliance', 'Risk analytics', 'Customer 360', 'Fraud detection'],
    color: 'violet',
  },
  {
    icon: ShoppingCart,
    name: 'Retail & Large Operations',
    description: 'Creating unified data platforms that connect supply chain, inventory, and customer data for actionable insights.',
    challenges: ['Supply chain optimization', 'Inventory analytics', 'Customer personalization', 'Demand forecasting'],
    color: 'emerald',
  },
  {
    icon: GraduationCap,
    name: 'Higher Education',
    description: 'Building research data platforms and student analytics systems that support institutional goals and research missions.',
    challenges: ['Research data management', 'Student success analytics', 'Institutional reporting', 'Research collaboration'],
    color: 'orange',
  },
];

const colorMap = {
  blue: 'from-red-500 to-red-600',
  cyan: 'from-orange-500 to-orange-600',
  violet: 'from-rose-500 to-pink-600',
  emerald: 'from-red-400 to-orange-500',
  orange: 'from-amber-500 to-orange-600',
};

export default function Industries() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
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

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">Industries We </span>
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Serve</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Deep expertise across sectors with unique data challenges and regulatory requirements.
            </p>
          </motion.div>

          {/* Industries List */}
          <div className="space-y-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 }}
                className="group relative bg-slate-900/50 border border-slate-800 rounded-3xl p-8 md:p-10 hover:border-slate-700 transition-all"
              >
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colorMap[industry.color]} flex items-center justify-center flex-shrink-0`}>
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-4">{industry.name}</h3>
                    <p className="text-slate-400 mb-6 leading-relaxed text-lg">{industry.description}</p>
                    <div className="flex flex-wrap gap-3">
                      {industry.challenges.map((challenge, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-slate-300 bg-slate-800/50 px-4 py-2 rounded-full">
                          <CheckCircle className="w-4 h-4 text-red-400" />
                          <span>{challenge}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-20 text-center"
          >
            <Link to={createPageUrl('Contact')}>
              <Button size="lg" className="bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-500 hover:to-orange-400 text-lg px-10 py-7 rounded-xl group">
                Discuss Your Industry Needs
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}