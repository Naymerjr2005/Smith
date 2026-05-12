/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Newspaper, Briefcase, GraduationCap, X, Wallet, ExternalLink, Github, Disc, Menu, FileText, Youtube, Search, MapPin, Filter, RotateCcw } from 'lucide-react';

const SAMPLE_JOBS = [
  { id: 1, title: 'Senior Solidity Developer', company: 'Chainlink', location: 'Remote', category: 'Engineering', salary: '$140k - $200k' },
  { id: 2, title: 'Web3 Content Creator', company: 'Verse', location: 'Global', category: 'Marketing', salary: 'Performance Based' },
  { id: 3, title: 'Smart Contract Auditor', company: 'OpenZeppelin', location: 'Remote', category: 'Security', salary: '$160k - $250k' },
  { id: 4, title: 'DeFi Product Designer', company: 'Uniswap', location: 'New York / Remote', category: 'Design', salary: '$120k - $180k' },
  { id: 5, title: 'Community Manager', company: 'Polygon', location: 'Remote', category: 'Marketing', salary: '$80k - $120k' },
  { id: 6, title: 'Full Stack Web3 Engineer', company: 'Aave', location: 'London / Remote', category: 'Engineering', salary: '$130k - $190k' },
];

export default function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');

  const filteredJobs = SAMPLE_JOBS.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || job.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const categories = ['All', ...new Set(SAMPLE_JOBS.map(j => j.category))];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="relative min-h-screen font-sans selection:bg-brand selection:text-white overflow-x-hidden flex flex-col bg-[#0a0a0a]">
      {/* Navigation Header - Changed from absolute to relative/sticky-like behavior with padding */}
      <nav className="w-full p-6 md:px-12 md:py-8 flex justify-between items-center z-50 bg-[#0a0a0a]/80 backdrop-blur-md sticky top-0 border-b border-white/5">
        <motion.div 
          className="text-2xl font-display font-black tracking-tighter text-white"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          VERSE
        </motion.div>
        <motion.a 
          href="https://t.me/GetVerse/177601/461295"
          target="_blank"
          rel="no-referrer"
          className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-xs md:text-sm font-medium text-white transition-all hover:scale-105 active:scale-95"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <FileText className="w-4 h-4 text-brand" />
          <span>2026 Work Plan</span>
        </motion.a>
      </nav>

      {/* Background Ambient Glows */}
      <div className="hidden lg:block absolute top-0 left-[-100px] w-[700px] h-[700px] rounded-full bg-radial from-[rgba(168,85,247,0.1)] to-transparent blur-[80px] pointer-events-none" />
      <div className="hidden lg:block absolute top-1/2 right-[-100px] w-[700px] h-[700px] rounded-full bg-radial from-[rgba(217,70,239,0.08)] to-transparent blur-[80px] pointer-events-none" />

      {/* Main Container - Added vertical padding to ensure no collision with header */}
      <motion.div 
        className="container mx-auto px-4 z-10 text-center max-w-5xl py-20 md:py-32"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold text-white leading-[1.1] mb-6 md:mb-8"
          variants={itemVariants}
        >
          A Web3 Ecosystem for <br className="hidden md:block" />
          <span className="text-brand drop-shadow-[0_0_25px_rgba(168,85,247,0.4)]">
            Everyone
          </span>
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl lg:text-2xl text-gray-400 font-light leading-relaxed max-w-3xl mx-auto mb-12 md:mb-16"
          variants={itemVariants}
        >
          Gain the knowledge, unlock new opportunities, and grow your Web3 career with the industry's leading community and tools.
        </motion.p>

        <motion.div 
          className="flex flex-wrap justify-center gap-6"
          variants={itemVariants}
        >
          <Button 
            href="https://cryptonews.com/" 
            label="Crypto News" 
            icon={<Newspaper className="w-5 h-5" />} 
          />
          
          <button 
            onClick={() => {
              const el = document.getElementById('jobs');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative flex items-center gap-3 bg-linear-to-r from-brand to-brand-light text-white px-8 py-4 rounded-xl text-lg md:text-xl font-bold transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-[0_0_25px_rgba(168,85,247,0.3)] hover:shadow-[0_0_35px_rgba(217,70,239,0.6)] cursor-pointer"
          >
            <Briefcase className="w-5 h-5" />
            <span>Web3 Jobs</span>
          </button>

          <Button 
            href="https://t.me/GetVerse/177601" 
            label="Web3 Courses" 
            icon={<GraduationCap className="w-5 h-5" />} 
          />
        </motion.div>

        {/* Web3 Details Section */}
        <motion.div 
          className="mt-20 text-left bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto"
          variants={itemVariants}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-brand/10 rounded-lg">
              <GraduationCap className="w-6 h-6 text-brand" />
            </div>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white">What is Web3?</h2>
          </div>
          
          <div className="space-y-4 text-gray-400 text-lg leading-relaxed mb-8">
            <p>
              Web3 is the next generation of the internet, where users have true ownership of their data and digital assets through blockchain technology. 
              It moves away from centralized control by large corporations, enabling a decentralized web that is more transparent, secure, and permissionless.
            </p>
            <p>
              By leveraging smart contracts, Web3 allows for trustless interactions and peer-to-peer financial systems without intermediaries. 
              This shift empowers individuals to participate in global digital economies and govern the platforms they use directly.
            </p>
            <p>
              As a developer or enthusiast, learning Web3 is crucial for staying ahead in the rapidly evolving tech landscape. 
              It opens doors to new careers in decentralized finance (DeFi), NFTs, and decentralized autonomous organizations (DAOs).
            </p>
          </div>

          <motion.a 
            href="https://youtu.be/nHhAEkG1y2U?si=Aj4hhPHp5kxap5yW" 
            target="_blank"
            rel="no-referrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-red-600/10 hover:bg-red-600/20 border border-red-600/30 rounded-xl text-red-500 font-bold transition-all hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Youtube className="w-5 h-5" />
            <span>Watch: Introduction to Web3</span>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Jobs Explorer Section */}
      <section id="jobs" className="relative w-full bg-[#0d0d0d] border-y border-white/5 py-24 md:py-32">
        <div className="container mx-auto px-4 max-w-6xl z-10 relative text-center md:text-left">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div className="max-w-2xl mx-auto md:mx-0">
              <div className="flex items-center gap-2 text-brand font-bold text-sm bg-brand/5 w-fit px-3 py-1 rounded-full border border-brand/10 mb-4 mx-auto md:mx-0">
                <Search className="w-4 h-4" />
                Live Job Board
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
                Explore Web3 <span className="text-brand">Opportunities</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Find your next role in the decentralized world. Filter by specialty or search for specific projects.
              </p>
            </div>
            
            <div className="flex flex-col gap-4 w-full md:w-auto">
              {/* Search Bar */}
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-brand transition-colors" />
                <input 
                  type="text" 
                  placeholder="Search titles, companies..." 
                  className="w-full md:w-80 bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-hidden focus:border-brand/50 focus:ring-1 focus:ring-brand/20 transition-all font-medium"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Category Pills */}
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setCategoryFilter(cat)}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                      categoryFilter === cat 
                        ? 'bg-brand/20 border-brand text-brand shadow-[0_0_15px_rgba(168,85,247,0.2)]' 
                        : 'bg-white/5 border-white/10 text-gray-500 hover:border-white/20 hover:text-gray-300'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Jobs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <motion.div 
                    key={job.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="group bg-[#111111] border border-white/5 rounded-2xl p-6 hover:border-brand/30 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.4)] flex flex-col h-full text-left"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-3 bg-brand/5 rounded-xl border border-brand/10 text-brand">
                        <Briefcase className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] uppercase tracking-wider font-bold text-gray-500 bg-white/5 px-2 py-1 rounded">
                        {job.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-brand transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-gray-400 font-medium mb-6">{job.company}</p>
                    
                    <div className="flex flex-col gap-3 mt-auto border-t border-white/5 pt-4">
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <MapPin className="w-4 h-4 text-brand/50" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-2 text-xs font-mono text-[#39ff14]/70">
                        <Wallet className="w-4 h-4 text-[#39ff14]/50" />
                        {job.salary}
                      </div>
                    </div>

                    <button 
                      onClick={() => setIsPopupOpen(true)}
                      className="mt-6 w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-linear-to-r from-brand to-brand-light text-sm font-bold text-white opacity-90 hover:opacity-100 transition-all shadow-lg active:scale-95"
                    >
                      Apply Now
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </motion.div>
                ))
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-full py-20 text-center flex flex-col items-center"
                >
                  <div className="p-4 bg-white/5 rounded-full mb-6">
                    <RotateCcw className="w-10 h-10 text-gray-600" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">No jobs matched your search</h3>
                  <p className="text-gray-500 mb-8 max-w-sm">Try adjusting your filters or search keywords to find what you're looking for.</p>
                  <button 
                    onClick={() => { setSearchQuery(''); setCategoryFilter('All'); }}
                    className="px-8 py-3 bg-brand/10 border border-brand/30 text-brand rounded-xl font-bold hover:bg-brand/20 transition-all active:scale-95"
                  >
                    Reset Filters
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Popup Modal */}
      <AnimatePresence>
        {isPopupOpen && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsPopupOpen(false)}
          >
            <motion.div 
              className="relative max-w-2xl w-full bg-[#111111] border border-brand/20 rounded-2xl p-8 shadow-[0_0_40px_rgba(168,85,247,0.15)] overflow-hidden"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsPopupOpen(false)}
                className="absolute top-4 right-4 p-2 text-gray-500 hover:text-white transition-colors"
                aria-label="Close popup"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="text-center mb-8">
                <h2 className="text-3xl font-display font-bold text-brand mb-2">Before Entering Web3 Jobs</h2>
                <div className="w-20 h-1 bg-linear-to-r from-transparent via-brand to-transparent mx-auto opacity-50" />
              </div>

              <div className="space-y-6 text-left">
                <p className="flex items-center gap-2 text-white font-semibold text-lg">
                  <Wallet className="w-5 h-5 text-brand" />
                  How to add your rewards wallet:
                </p>

                <ul className="space-y-4 text-gray-300">
                  <Step num={1} text="Visit hub.vgdh.io" />
                  <Step 
                    num={2} 
                    text={
                      <span className="inline-flex items-center gap-2 flex-wrap">
                        Sign in with <EmailIcon /> Email, <Github className="w-4 h-4 inline" /> GitHub or <Disc className="w-4 h-4 inline" /> Discord account
                      </span>
                    } 
                  />
                  <Step num={3} text="Visit the /rewards section" />
                  <Step num={4} text="Connect Polygon rewards wallet and sign to confirm" />
                </ul>
              </div>

              <motion.a 
                href="http://hub.vgdh.io" 
                target="_blank"
                rel="no-referrer"
                className="mt-10 inline-flex items-center justify-center gap-2 w-full bg-linear-to-r from-brand to-brand-light text-white py-4 rounded-xl text-lg font-bold transition-all hover:scale-[1.02] shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Continue to Web3 Jobs
                <ExternalLink className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="absolute bottom-6 left-0 w-full text-center text-gray-700 text-sm">
        <p>&copy; {new Date().getFullYear()} Web3 Ecosystem. All rights reserved.</p>
      </footer>
    </div>
  );
}

function Button({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
  return (
    <motion.a 
      href={href} 
      target="_blank"
      rel="no-referrer"
      className="flex items-center gap-3 bg-linear-to-r from-brand to-brand-light text-white px-8 py-4 rounded-xl text-lg md:text-xl font-bold transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-[0_0_25px_rgba(168,85,247,0.3)] hover:shadow-[0_0_35px_rgba(217,70,239,0.6)]"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
      <span>{label}</span>
    </motion.a>
  );
}

function Step({ num, text }: { num: number; text: React.ReactNode }) {
  return (
    <li className="flex gap-4 items-start group">
      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand/10 border border-brand/30 flex items-center justify-center text-brand font-bold text-sm transition-colors group-hover:bg-brand group-hover:text-white">
        {num}
      </span>
      <p className="pt-1 leading-relaxed">{text}</p>
    </li>
  );
}

function EmailIcon() {
  return (
    <svg className="w-4 h-4 inline" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  );
}
