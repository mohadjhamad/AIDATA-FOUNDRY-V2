import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { 
  Search, 
  LayoutGrid, 
  RefreshCcw, 
  GitBranch, 
  Shield, 
  Rocket, 
  Beaker, 
  Users,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Data Platform Review',
    duration: '2 Weeks',
    color: 'blue',
    slug: 'data-platform-review',
  },
  {
    icon: LayoutGrid,
    title: 'End-to-End Platform Architecture',
    color: 'cyan',
    slug: 'end-to-end-platform-architecture',
  },
  {
    icon: RefreshCcw,
    title: 'Migrations & Modernization',
    color: 'teal',
    slug: 'migrations-modernization',
  },
  {
    icon: GitBranch,
    title: 'Metadata-Driven ETL & Pipelines',
    color: 'emerald',
    slug: 'metadata-driven-etl',
  },
  {
    icon: Shield,
    title: 'Security & Governance Enablement',
    color: 'violet',
    slug: 'security-governance',
  },
  {
    icon: Rocket,
    title: 'Platform Velocity & Delivery',
    color: 'purple',
    slug: 'platform-velocity-delivery',
  },
  {
    icon: Beaker,
    title: 'Databricks & Lakehouse POC',
    color: 'pink',
    slug: 'databricks-lakehouse-poc',
  },
  {
    icon: Users,
    title: 'Governance Workshops',
    color: 'orange',
    slug: 'governance-workshops',
  },
];

const colorMap = {
  blue: 'from-red-500/20 to-red-600/20 border-red-500/30 hover:border-red-400/50',
  cyan: 'from-orange-500/20 to-orange-600/20 border-orange-500/30 hover:border-orange-400/50',
  teal: 'from-red-400/20 to-orange-500/20 border-red-400/30 hover:border-red-300/50',
  emerald: 'from-rose-500/20 to-rose-600/20 border-rose-500/30 hover:border-rose-400/50',
  violet: 'from-red-600/20 to-red-700/20 border-red-600/30 hover:border-red-500/50',
  purple: 'from-orange-600/20 to-orange-700/20 border-orange-600/30 hover:border-orange-500/50',
  pink: 'from-pink-500/20 to-red-600/20 border-pink-500/30 hover:border-pink-400/50',
  orange: 'from-amber-500/20 to-orange-600/20 border-amber-500/30 hover:border-amber-400/50',
};

const iconColorMap = {
  blue: 'text-red-400',
  cyan: 'text-orange-400',
  teal: 'text-red-300',
  emerald: 'text-rose-400',
  violet: 'text-red-400',
  purple: 'text-orange-400',
  pink: 'text-pink-400',
  orange: 'text-amber-400',
};

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Data & AI Platform </span>
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Focused services covering assessment, design, migration, governance, and delivery enablement.
          </p>
        </motion.div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <Link 
              to={`${createPageUrl('ServiceDetail')}?service=${service.slug}`}
              onClick={() => window.scrollTo(0, 0)}
            >
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`group relative rounded-2xl bg-gradient-to-br ${colorMap[service.color]} border backdrop-blur-sm p-6 cursor-pointer transition-all duration-300 h-full flex flex-col`}
              >
                <service.icon className={`w-8 h-8 ${iconColorMap[service.color]} mb-4`} />
                <h3 className="text-lg font-semibold text-white mb-2 min-h-[3.5rem] flex items-center">{service.title}</h3>
                {service.duration && (
                  <span className="text-xs text-slate-500 uppercase tracking-wide mb-4">{service.duration}</span>
                )}
                <div className="flex items-center gap-1 mt-auto text-sm text-red-400 group-hover:text-red-300 transition-colors">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link 
            to={createPageUrl('Services')} 
            onClick={() => window.scrollTo(0, 0)}
            className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors group"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}