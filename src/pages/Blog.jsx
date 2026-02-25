import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Calendar, User, Clock } from 'lucide-react';

const blogPosts = [
  {
    title: 'Building Scalable Data Platforms with Unity Catalog',
    excerpt: 'Learn how Unity Catalog transforms data governance and enables enterprise-scale data platforms on Databricks.',
    date: '2026-02-10',
    author: 'AI Data Foundry',
    readTime: '8 min read',
    category: 'Data Governance',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  },
  {
    title: 'Metadata-Driven ETL: Best Practices',
    excerpt: 'Discover how metadata-driven approaches can simplify your data pipeline architecture and improve maintainability.',
    date: '2026-02-05',
    author: 'AI Data Foundry',
    readTime: '10 min read',
    category: 'Data Engineering',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  },
  {
    title: 'AI Readiness: Preparing Your Data Platform',
    excerpt: 'What does it take to make your data platform ready for AI workloads? A comprehensive guide to AI enablement.',
    date: '2026-01-28',
    author: 'AI Data Foundry',
    readTime: '12 min read',
    category: 'AI & ML',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
  },
  {
    title: 'Lakehouse Architecture Patterns',
    excerpt: 'Explore proven lakehouse architecture patterns for enterprise data platforms and their trade-offs.',
    date: '2026-01-20',
    author: 'AI Data Foundry',
    readTime: '15 min read',
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
  },
  {
    title: 'Data Mesh vs Lakehouse: Which is Right for You?',
    excerpt: 'Compare data mesh and lakehouse approaches to understand which architectural pattern fits your organization.',
    date: '2026-01-15',
    author: 'AI Data Foundry',
    readTime: '9 min read',
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
  },
  {
    title: 'Security & Compliance in Modern Data Platforms',
    excerpt: 'Navigate the complex landscape of data security and compliance requirements in enterprise platforms.',
    date: '2026-01-08',
    author: 'AI Data Foundry',
    readTime: '11 min read',
    category: 'Security',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-red-950/10 to-slate-950" />
        
        {/* Floating particles */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-red-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
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
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">Insights & </span>
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Perspectives</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Deep dives into data architecture, governance, and platform engineering.
            </p>
          </motion.div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-red-500/30 transition-all">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full bg-red-500/20 backdrop-blur-sm border border-red-500/30 text-xs text-red-300">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-slate-400 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <button className="flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors text-sm font-medium">
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}