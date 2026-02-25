import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Send, Mail, Calendar, CheckCircle, Upload, X } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiryType: '',
    companySize: '',
    role: '',
    affectedService: '',
    issueDescription: '',
    message: '',
  });
  const [uploadedFile, setUploadedFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const removeFile = () => {
    setUploadedFile(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    setSubmitted(true);
  };

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

      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-red-950/30 to-slate-950" />
        
        {/* Binary rain */}
        <div className="absolute inset-0 opacity-20 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-red-500 font-mono text-xs"
              style={{
                left: `${(i * 8) % 100}%`,
                top: -20,
              }}
              animate={{ y: ['0vh', '110vh'] }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 5,
              }}
            >
              {Array.from({ length: 20 }, () => Math.random() > 0.5 ? '1' : '0').join('\n')}
            </motion.div>
          ))}
        </div>
        
        {/* Floating particles */}
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-red-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: '0 0 10px rgba(239, 68, 68, 0.5)',
            }}
            animate={{
              y: [0, -80, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        
        <motion.div
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(239, 68, 68, 0.2) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{ scale: [1, 1.3, 1], x: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(251, 146, 60, 0.2) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{ scale: [1.3, 1, 1.3], x: [0, -50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left side - Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">Let's Talk </span>
                <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Architecture</span>
              </h1>
              
              <p className="text-xl text-slate-400 mb-12 leading-relaxed">
                Book a free 30-minute session with a Databricks Solution Architect Champion to discuss your data platform challenges.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">30-Minute Consult</h3>
                    <p className="text-slate-400">No strings attached. Let's explore if we're a fit.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Direct Contact</h3>
                    <p className="text-slate-400">hello@aidatafoundry.com</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right side - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {!submitted ? (
                <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 md:p-10">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-slate-300">Name</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="bg-slate-800/50 border-slate-700 focus:border-red-500 text-white"
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-slate-300">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="bg-slate-800/50 border-slate-700 focus:border-red-500 text-white"
                          placeholder="you@company.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-slate-300">Company</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="bg-slate-800/50 border-slate-700 focus:border-red-500 text-white"
                        placeholder="Company name"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="inquiryType" className="text-slate-300">Type of Inquiry</Label>
                      <Select
                        value={formData.inquiryType}
                        onValueChange={(value) => setFormData({ ...formData, inquiryType: value })}
                      >
                        <SelectTrigger className="bg-slate-800/50 border-slate-700 focus:border-red-500 text-white">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="consultation">Consultation</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="support">Support</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {formData.inquiryType === 'partnership' && (
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="companySize" className="text-slate-300">Company Size</Label>
                          <Select
                            value={formData.companySize}
                            onValueChange={(value) => setFormData({ ...formData, companySize: value })}
                          >
                            <SelectTrigger className="bg-slate-800/50 border-slate-700 focus:border-red-500 text-white">
                              <SelectValue placeholder="Select size" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1-10">1-10 employees</SelectItem>
                              <SelectItem value="11-50">11-50 employees</SelectItem>
                              <SelectItem value="51-200">51-200 employees</SelectItem>
                              <SelectItem value="201-500">201-500 employees</SelectItem>
                              <SelectItem value="501-1000">501-1000 employees</SelectItem>
                              <SelectItem value="1000+">1000+ employees</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="role" className="text-slate-300">Your Role</Label>
                          <Input
                            id="role"
                            value={formData.role}
                            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                            className="bg-slate-800/50 border-slate-700 focus:border-red-500 text-white"
                            placeholder="e.g. CTO, Data Lead"
                          />
                        </div>
                      </div>
                    )}

                    {formData.inquiryType === 'support' && (
                      <>
                        <div className="space-y-2">
                          <Label htmlFor="affectedService" className="text-slate-300">Affected Service</Label>
                          <Select
                            value={formData.affectedService}
                            onValueChange={(value) => setFormData({ ...formData, affectedService: value })}
                          >
                            <SelectTrigger className="bg-slate-800/50 border-slate-700 focus:border-red-500 text-white">
                              <SelectValue placeholder="Select service" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="platform-review">Data Platform Review</SelectItem>
                              <SelectItem value="architecture">Platform Architecture</SelectItem>
                              <SelectItem value="migration">Migrations & Modernization</SelectItem>
                              <SelectItem value="etl">Metadata-Driven ETL</SelectItem>
                              <SelectItem value="governance">Security & Governance</SelectItem>
                              <SelectItem value="delivery">Platform Velocity</SelectItem>
                              <SelectItem value="poc">Databricks POC</SelectItem>
                              <SelectItem value="workshops">Governance Workshops</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="issueDescription" className="text-slate-300">Issue Description</Label>
                          <Textarea
                            id="issueDescription"
                            value={formData.issueDescription}
                            onChange={(e) => setFormData({ ...formData, issueDescription: e.target.value })}
                            className="bg-slate-800/50 border-slate-700 focus:border-red-500 text-white min-h-[100px]"
                            placeholder="Please describe the issue you're experiencing"
                          />
                        </div>
                      </>
                    )}

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-slate-300">
                        {formData.inquiryType === 'support' ? 'Additional Details' : 'Tell us about your project'}
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="bg-slate-800/50 border-slate-700 focus:border-red-500 text-white min-h-[120px]"
                        placeholder={formData.inquiryType === 'support' 
                          ? 'Any additional information that might help us assist you' 
                          : 'What challenges are you facing with your data platform?'}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-slate-300">Attach Document (Optional)</Label>
                      <div className="relative">
                        <input
                          type="file"
                          id="file-upload"
                          className="hidden"
                          onChange={handleFileChange}
                          accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg"
                        />
                        <label
                          htmlFor="file-upload"
                          className="flex items-center justify-center gap-2 w-full px-4 py-3 border-2 border-dashed border-slate-700 rounded-xl bg-slate-800/30 hover:bg-slate-800/50 hover:border-slate-600 cursor-pointer transition-all"
                        >
                          <Upload className="w-5 h-5 text-slate-400" />
                          <span className="text-slate-400">
                            {uploadedFile ? uploadedFile.name : 'Click to upload or drag and drop'}
                          </span>
                        </label>
                        {uploadedFile && (
                          <button
                            type="button"
                            onClick={removeFile}
                            className="absolute top-3 right-3 p-1 rounded-full bg-slate-700 hover:bg-slate-600 transition-colors"
                          >
                            <X className="w-4 h-4 text-white" />
                          </button>
                        )}
                      </div>
                      <p className="text-xs text-slate-500">Supported: PDF, DOC, DOCX, TXT, PNG, JPG (Max 10MB)</p>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-500 hover:to-orange-400 py-6 text-lg rounded-xl"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-10 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
                  <p className="text-slate-400">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}