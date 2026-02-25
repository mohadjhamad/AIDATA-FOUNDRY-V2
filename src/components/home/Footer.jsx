import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { Linkedin, Twitter, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698d38bc97fec5d215c3ea55/1f17f1835_ChatGPTImageFeb16202607_05_28PM.png"
              alt="AI Data Foundry"
              className="h-16 w-auto" />

          </div>
          
          <div className="flex items-center gap-8">
            <Link to={createPageUrl('Services')} onClick={() => window.scrollTo(0, 0)} className="text-slate-400 hover:text-white transition-colors">Services</Link>
            <Link to={createPageUrl('Industries')} onClick={() => window.scrollTo(0, 0)} className="text-slate-400 hover:text-white transition-colors">Industries</Link>
            
            <Link to={createPageUrl('About')} onClick={() => window.scrollTo(0, 0)} className="text-slate-400 hover:text-white transition-colors">About</Link>
            <Link to={createPageUrl('Contact')} onClick={() => window.scrollTo(0, 0)} className="text-slate-400 hover:text-white transition-colors">Contact</Link>
          </div>
          
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors">
              <Linkedin className="w-5 h-5 text-slate-400" />
            </a>
            <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors">
              <Twitter className="w-5 h-5 text-slate-400" />
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800/50 text-center">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} AI Data Foundry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>);

}