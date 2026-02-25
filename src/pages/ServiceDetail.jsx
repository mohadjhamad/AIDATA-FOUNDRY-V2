import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle, Target, TrendingUp, BarChart } from 'lucide-react';
import { 
  Search, 
  LayoutGrid, 
  RefreshCcw, 
  GitBranch, 
  Shield, 
  Rocket, 
  Beaker, 
  Users
} from 'lucide-react';

const serviceData = {
  'data-platform-review': {
    icon: Search,
    title: 'Data Platform Review',
    duration: '2 Weeks',
    color: 'red',
    problem: {
      title: 'The Challenge',
      description: 'Organizations often struggle with fragmented data systems, unclear data quality, and a lack of visibility into platform capabilities and gaps. Without a comprehensive assessment, it\'s difficult to plan modernization or understand where to invest.',
      painPoints: [
        'Unclear understanding of current platform state',
        'Hidden technical debt and bottlenecks',
        'Difficulty prioritizing improvements',
        'Lack of alignment between business needs and technical capabilities'
      ]
    },
    solution: {
      title: 'Our Approach',
      description: 'A comprehensive 2-week assessment that evaluates your data platform across architecture, governance, performance, and cost dimensions. We deliver a detailed report with prioritized recommendations and a roadmap for improvement.',
      approach: [
        'Deep dive into current architecture and data flows',
        'Assessment of governance, security, and compliance posture',
        'Performance analysis and bottleneck identification',
        'Cost optimization opportunities review',
        'Stakeholder interviews to understand business requirements'
      ]
    },
    features: [
      'Comprehensive platform audit',
      'Architecture review and documentation',
      'Governance and security assessment',
      'Performance and cost analysis',
      'Prioritized recommendations roadmap',
      'Executive summary and technical deep-dive reports'
    ],
    benefits: [
      'Clear visibility into platform strengths and gaps',
      'Data-driven prioritization of improvements',
      'Identified quick wins and strategic initiatives',
      'Alignment of technical capabilities with business needs',
      'Reduced risk in modernization planning'
    ],
    metrics: [
      { label: 'Assessment Completion', value: '2 Weeks' },
      { label: 'Areas Evaluated', value: '6+ Domains' },
      { label: 'Deliverables', value: 'Report + Roadmap' },
      { label: 'Follow-up Support', value: '1 Month' }
    ]
  },
  'end-to-end-platform-architecture': {
    icon: LayoutGrid,
    title: 'End-to-End Platform Architecture',
    color: 'orange',
    problem: {
      title: 'The Challenge',
      description: 'Building a modern data platform from scratch or redesigning an existing one requires deep expertise across multiple domains. Many organizations struggle with architectural decisions that impact scalability, governance, and long-term maintainability.',
      painPoints: [
        'Overwhelming technology choices and patterns',
        'Difficulty designing for scale and governance',
        'Risk of costly architectural mistakes',
        'Lack of internal expertise in modern patterns'
      ]
    },
    solution: {
      title: 'Our Approach',
      description: 'We design comprehensive data platform architectures tailored to your organization\'s needs, leveraging Databricks, Azure, and modern lakehouse patterns. Our designs prioritize governance, scalability, and AI-readiness from day one.',
      approach: [
        'Requirements gathering and business alignment',
        'Architecture design workshops',
        'Detailed solution architecture documentation',
        'Technology selection and justification',
        'Security and governance framework design',
        'Implementation roadmap and phasing strategy'
      ]
    },
    features: [
      'Custom lakehouse architecture design',
      'Medallion architecture (bronze, silver, gold)',
      'Unity Catalog governance framework',
      'Data mesh or centralized patterns',
      'CI/CD and DevOps integration',
      'Cost optimization strategies'
    ],
    benefits: [
      'Production-ready architecture blueprint',
      'Reduced implementation risk',
      'Scalable foundation for growth',
      'Built-in governance and security',
      'Faster time to value'
    ],
    metrics: [
      { label: 'Design Phase', value: '4-6 Weeks' },
      { label: 'Architecture Layers', value: 'Full Stack' },
      { label: 'Documentation', value: 'Comprehensive' },
      { label: 'Review Sessions', value: 'Weekly' }
    ]
  },
  'migrations-modernization': {
    icon: RefreshCcw,
    title: 'Migrations & Modernization',
    color: 'red',
    problem: {
      title: 'The Challenge',
      description: 'Legacy data platforms create technical debt, limit agility, and increase costs. Migrations are risky and complex, requiring careful planning to avoid business disruption and ensure data quality throughout the transition.',
      painPoints: [
        'Business disruption during migration',
        'Data quality and consistency risks',
        'Complex dependency mapping',
        'Skill gaps in new technologies'
      ]
    },
    solution: {
      title: 'Our Approach',
      description: 'We execute phased migrations that minimize risk while delivering quick wins. Our methodology ensures continuous data quality, comprehensive testing, and knowledge transfer to your team throughout the process.',
      approach: [
        'Migration assessment and dependency mapping',
        'Phased migration strategy design',
        'Automated migration tooling and scripts',
        'Parallel run validation',
        'Rollback and contingency planning',
        'Team training and knowledge transfer'
      ]
    },
    features: [
      'Risk-minimized migration strategy',
      'Automated migration frameworks',
      'Comprehensive testing and validation',
      'Legacy and modern system parallel runs',
      'Data quality reconciliation',
      'Team upskilling and enablement'
    ],
    benefits: [
      'Minimized business disruption',
      'Proven migration patterns',
      'Continuous data quality assurance',
      'Accelerated modernization timeline',
      'Internal team capability building'
    ],
    metrics: [
      { label: 'Typical Duration', value: '3-6 Months' },
      { label: 'Phased Approach', value: 'Yes' },
      { label: 'Parallel Run Period', value: '2-4 Weeks' },
      { label: 'Knowledge Transfer', value: 'Included' }
    ]
  },
  'metadata-driven-etl': {
    icon: GitBranch,
    title: 'Metadata-Driven ETL & Pipelines',
    color: 'rose',
    problem: {
      title: 'The Challenge',
      description: 'Hard-coded ETL pipelines create maintenance nightmares, lack flexibility, and don\'t scale. As data sources grow, traditional approaches become increasingly expensive to maintain and slow to adapt.',
      painPoints: [
        'High maintenance burden for ETL code',
        'Slow onboarding of new data sources',
        'Difficulty managing pipeline complexity',
        'Limited reusability and standardization'
      ]
    },
    solution: {
      title: 'Our Approach',
      description: 'We implement metadata-driven ETL frameworks that dramatically reduce code, improve maintainability, and accelerate data source onboarding. Our patterns leverage Delta Lake, Unity Catalog, and Databricks workflows.',
      approach: [
        'Metadata framework design',
        'Reusable pipeline templates',
        'Configuration-driven data ingestion',
        'Automated schema evolution handling',
        'Data quality rules engine',
        'Pipeline orchestration automation'
      ]
    },
    features: [
      'Metadata-driven pipeline framework',
      'Configuration-based source onboarding',
      'Automatic schema evolution',
      'Built-in data quality checks',
      'Unified error handling',
      'Comprehensive logging and monitoring'
    ],
    benefits: [
      '70-80% reduction in ETL code',
      '5x faster new source onboarding',
      'Standardized patterns across pipelines',
      'Improved data quality and observability',
      'Reduced maintenance overhead'
    ],
    metrics: [
      { label: 'Code Reduction', value: '70-80%' },
      { label: 'Onboarding Speed', value: '5x Faster' },
      { label: 'Reusability', value: 'High' },
      { label: 'Maintenance', value: 'Low' }
    ]
  },
  'security-governance': {
    icon: Shield,
    title: 'Security & Governance Enablement',
    color: 'red',
    problem: {
      title: 'The Challenge',
      description: 'Data governance is often an afterthought, leading to compliance risks, data sprawl, and difficulty controlling access. Organizations struggle to balance security requirements with data democratization and analytics velocity.',
      painPoints: [
        'Compliance and regulatory risks',
        'Ungoverned data access and sprawl',
        'Difficulty tracking data lineage',
        'Balancing security with productivity'
      ]
    },
    solution: {
      title: 'Our Approach',
      description: 'We implement comprehensive governance frameworks using Unity Catalog, establishing fine-grained access controls, automated lineage tracking, and governance processes that enable rather than hinder productivity.',
      approach: [
        'Unity Catalog architecture and setup',
        'RBAC and ABAC policy design',
        'Data classification framework',
        'Lineage and audit logging',
        'Compliance controls implementation',
        'Governance operating model design'
      ]
    },
    features: [
      'Unity Catalog implementation',
      'Fine-grained access controls (RBAC/ABAC)',
      'Automated data lineage',
      'Data classification and tagging',
      'Audit logging and compliance reporting',
      'Self-service governance workflows'
    ],
    benefits: [
      'Reduced compliance risk',
      'Automated access governance',
      'Complete data lineage visibility',
      'Empowered data teams with guardrails',
      'Audit-ready compliance posture'
    ],
    metrics: [
      { label: 'Implementation', value: '4-8 Weeks' },
      { label: 'Compliance Coverage', value: 'Full' },
      { label: 'Access Controls', value: 'Fine-grained' },
      { label: 'Lineage', value: 'Automated' }
    ]
  },
  'platform-velocity-delivery': {
    icon: Rocket,
    title: 'Platform Velocity & Delivery',
    color: 'orange',
    problem: {
      title: 'The Challenge',
      description: 'Data teams often move slowly due to manual processes, lack of automation, and unclear delivery patterns. This creates bottlenecks, increases time-to-value, and frustrates both data teams and business stakeholders.',
      painPoints: [
        'Slow delivery cycles',
        'Manual deployment processes',
        'Lack of standardized patterns',
        'High coordination overhead'
      ]
    },
    solution: {
      title: 'Our Approach',
      description: 'We establish modern DataOps practices including CI/CD pipelines, infrastructure as code, automated testing, and standardized delivery patterns that dramatically accelerate platform delivery velocity.',
      approach: [
        'CI/CD pipeline design and implementation',
        'Infrastructure as Code (Terraform)',
        'Automated testing frameworks',
        'Deployment automation',
        'Standardized project templates',
        'Agile delivery coaching'
      ]
    },
    features: [
      'Full CI/CD pipelines for data',
      'Infrastructure as Code',
      'Automated testing (unit, integration, E2E)',
      'Environment promotion automation',
      'Deployment rollback capabilities',
      'Standardized project scaffolding'
    ],
    benefits: [
      '3-5x faster deployment cycles',
      'Reduced deployment errors',
      'Repeatable and reliable releases',
      'Improved team productivity',
      'Faster time to business value'
    ],
    metrics: [
      { label: 'Velocity Improvement', value: '3-5x' },
      { label: 'Deployment Time', value: 'Minutes' },
      { label: 'Error Rate', value: '-80%' },
      { label: 'Setup Time', value: '2-4 Weeks' }
    ]
  },
  'databricks-lakehouse-poc': {
    icon: Beaker,
    title: 'Databricks & Lakehouse POC',
    color: 'pink',
    problem: {
      title: 'The Challenge',
      description: 'Organizations considering Databricks need to validate fit for their use cases, prove value to stakeholders, and understand implementation requirements before committing to a full platform migration or build.',
      painPoints: [
        'Uncertainty about Databricks capabilities',
        'Need to prove value before investment',
        'Lack of internal Databricks expertise',
        'Risk of unsuccessful POC'
      ]
    },
    solution: {
      title: 'Our Approach',
      description: 'We deliver focused, outcome-driven POCs that validate specific use cases, demonstrate value, and provide a clear path to production. Our POCs are designed to answer key questions and reduce implementation risk.',
      approach: [
        'Use case selection and scoping',
        'POC environment setup',
        'Representative data pipeline implementation',
        'Performance and cost validation',
        'Governance pattern demonstration',
        'Production readiness assessment'
      ]
    },
    features: [
      'Targeted use case implementation',
      'Production-like environment',
      'Real data integration',
      'Performance benchmarking',
      'Cost analysis and projections',
      'Production roadmap deliverable'
    ],
    benefits: [
      'Validated platform capabilities',
      'Proven ROI and business value',
      'Reduced implementation risk',
      'Clear path to production',
      'Stakeholder confidence'
    ],
    metrics: [
      { label: 'POC Duration', value: '4-6 Weeks' },
      { label: 'Use Cases', value: '1-2' },
      { label: 'Environment', value: 'Production-like' },
      { label: 'Deliverables', value: 'Code + Docs' }
    ]
  },
  'governance-workshops': {
    icon: Users,
    title: 'Governance Workshops',
    color: 'amber',
    problem: {
      title: 'The Challenge',
      description: 'Data governance requires alignment across technical and business teams, but many organizations struggle with governance operating models, ownership, and establishing sustainable processes that work in practice.',
      painPoints: [
        'Misalignment between teams',
        'Unclear ownership and accountability',
        'Governance processes that hinder productivity',
        'Lack of governance culture'
      ]
    },
    solution: {
      title: 'Our Approach',
      description: 'We facilitate interactive workshops that align stakeholders, define governance operating models, establish ownership, and create practical governance processes that enable rather than block data initiatives.',
      approach: [
        'Stakeholder alignment sessions',
        'Governance operating model design',
        'RACI definition workshops',
        'Policy and standards creation',
        'Governance workflow design',
        'Change management planning'
      ]
    },
    features: [
      'Interactive stakeholder workshops',
      'Governance operating model',
      'Roles and responsibilities (RACI)',
      'Data policies and standards',
      'Governance workflows',
      'Implementation roadmap'
    ],
    benefits: [
      'Cross-functional alignment',
      'Clear ownership and accountability',
      'Practical governance processes',
      'Reduced friction and blockers',
      'Sustainable governance culture'
    ],
    metrics: [
      { label: 'Workshop Duration', value: '1-2 Weeks' },
      { label: 'Sessions', value: '4-8' },
      { label: 'Stakeholders', value: '10-20' },
      { label: 'Deliverables', value: 'Operating Model' }
    ]
  }
};

export default function ServiceDetail() {
  const location = useLocation();
  const serviceKey = new URLSearchParams(location.search).get('service');
  const service = serviceData[serviceKey];

  if (!service) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
          <Link to={createPageUrl('Home')}>
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = service.icon;

  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-red-950/10 to-slate-950" />
        
        {/* Floating particles */}
        {[...Array(40)].map((_, i) => (
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

        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
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
          <Link to={createPageUrl('Services')} onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Services</span>
          </Link>
        </div>
      </nav>

      <div className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-${service.color}-500/20 to-${service.color}-600/20 border border-${service.color}-500/30 flex items-center justify-center`}>
                <IconComponent className={`w-8 h-8 text-${service.color}-400`} />
              </div>
              {service.duration && (
                <span className="px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 text-sm text-slate-300">
                  {service.duration}
                </span>
              )}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {service.title}
            </h1>
          </motion.div>

          {/* Problem */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-16"
          >
            <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-6 h-6 text-red-400" />
                <h2 className="text-2xl font-bold text-white">{service.problem.title}</h2>
              </div>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                {service.problem.description}
              </p>
              <div className="space-y-3">
                {service.problem.painPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2" />
                    <p className="text-slate-400">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Solution */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-6 h-6 text-orange-400" />
                <h2 className="text-2xl font-bold text-white">{service.solution.title}</h2>
              </div>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                {service.solution.description}
              </p>
              <div className="space-y-3">
                {service.solution.approach.map((step, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-xs text-orange-400 font-semibold">
                      {index + 1}
                    </span>
                    <p className="text-slate-400">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Features & Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-6">Key Features</h3>
                <div className="space-y-3">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <p className="text-slate-300">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-6">Benefits</h3>
                <div className="space-y-3">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                      <p className="text-slate-300">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Success Metrics */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-16"
          >
            <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 md:p-10">
              <div className="flex items-center gap-3 mb-8">
                <BarChart className="w-6 h-6 text-red-400" />
                <h2 className="text-2xl font-bold text-white">Success Metrics</h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {service.metrics.map((metric, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-xl p-5 border border-slate-700">
                    <p className="text-sm text-slate-400 mb-2">{metric.label}</p>
                    <p className="text-2xl font-bold text-white">{metric.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <p className="text-xl text-slate-400 mb-6">Ready to get started?</p>
            <Link to={createPageUrl('Contact')} onClick={() => window.scrollTo(0, 0)}>
              <Button size="lg" className="bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-500 hover:to-orange-400 text-lg px-10 py-7 rounded-xl">
                Book a 30-min Consult
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}