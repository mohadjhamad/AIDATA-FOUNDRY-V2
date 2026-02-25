import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Button } from '@/components/ui/button';
import { 
  ArrowLeft, 
  ArrowRight,
  Search, 
  LayoutGrid, 
  RefreshCcw, 
  GitBranch, 
  Shield, 
  Rocket, 
  Beaker, 
  Users,
  Clock,
  CheckCircle
} from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Data Platform Review',
    duration: '2 Weeks',
    description: 'Comprehensive assessment of your current data platform architecture, identifying gaps, risks, and opportunities for improvement.',
    features: ['Architecture assessment', 'Security & governance audit', 'Performance analysis', 'Recommendations roadmap'],
    color: 'blue',
  },
  {
    icon: LayoutGrid,
    title: 'End-to-End Platform Architecture',
    description: 'Design a complete data platform architecture from scratch, including data models, pipelines, governance, and infrastructure.',
    features: ['Target state architecture', 'Data model design', 'Integration patterns', 'Technology selection'],
    color: 'cyan',
  },
  {
    icon: RefreshCcw,
    title: 'Migrations & Modernization',
    description: 'Migrate legacy systems to modern lakehouse architectures on Databricks and Azure with minimal disruption.',
    features: ['Migration strategy', 'Data migration execution', 'Testing & validation', 'Cutover planning'],
    color: 'teal',
  },
  {
    icon: GitBranch,
    title: 'Metadata-Driven ETL & Pipelines',
    description: 'Build scalable, maintainable data pipelines using metadata-driven approaches and best practices.',
    features: ['Pipeline architecture', 'Metadata framework', 'Error handling patterns', 'Monitoring & alerting'],
    color: 'emerald',
  },
  {
    icon: Shield,
    title: 'Security & Governance Enablement',
    description: 'Implement Unity Catalog, access controls, and governance frameworks that enable speed while maintaining control.',
    features: ['Unity Catalog setup', 'Access control design', 'Data lineage', 'Compliance frameworks'],
    color: 'violet',
  },
  {
    icon: Rocket,
    title: 'Platform Velocity & Delivery',
    description: 'Accelerate your data platform delivery with CI/CD, DevOps practices, and team enablement.',
    features: ['CI/CD implementation', 'DevOps practices', 'Documentation', 'Team training'],
    color: 'purple',
  },
  {
    icon: Beaker,
    title: 'Databricks & Lakehouse POC',
    description: 'Validate your use case with a focused proof of concept on Databricks and modern lakehouse patterns.',
    features: ['Use case definition', 'POC implementation', 'Performance benchmarks', 'Go/no-go assessment'],
    color: 'pink',
  },
  {
    icon: Users,
    title: 'Governance Workshops',
    description: 'Strategic workshops to align stakeholders and define governance operating models.',
    features: ['Stakeholder alignment', 'Operating model design', 'Role & responsibility mapping', 'Change management'],
    color: 'orange',
  },
];

const colorMap = {
  blue: 'from-red-500 to-red-600',
  cyan: 'from-orange-500 to-orange-600',
  teal: 'from-red-400 to-orange-500',
  emerald: 'from-rose-500 to-rose-600',
  violet: 'from-red-600 to-red-700',
  purple: 'from-orange-600 to-orange-700',
  pink: 'from-pink-500 to-red-600',
  orange: 'from-amber-500 to-orange-600',
};

export default function Services() {
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
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">Our </span>
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Focused services covering assessment, design, migration, governance, and delivery enablement for enterprise data platforms.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-slate-900/50 border border-slate-800 rounded-3xl p-8 hover:border-slate-700 transition-all"
              >
                <div className="flex items-start gap-5">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${colorMap[service.color]} flex items-center justify-center flex-shrink-0`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                      {service.duration && (
                        <span className="flex items-center gap-1 text-xs text-slate-500 bg-slate-800 px-2 py-1 rounded-full">
                          <Clock className="w-3 h-3" />
                          {service.duration}
                        </span>
                      )}
                    </div>
                    <p className="text-slate-400 mb-6 leading-relaxed">{service.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-slate-500">
                          <CheckCircle className="w-4 h-4 text-red-400" />
                          <span>{feature}</span>
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
                Discuss Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}