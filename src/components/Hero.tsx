import { motion } from 'motion/react';
import { Terminal, Cloud, ShieldCheck, ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[300px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-slate-800 text-cyan-400 text-sm font-mono mb-8"
          >
            <Terminal size={16} />
            <span>sys.status == "operational"</span>
          </motion.div>

          {/* Name & Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-white">
              Nihar Ranjan Panda
            </h1>
            <h2 className="text-2xl md:text-3xl text-slate-400 font-medium mb-6">
              DevOps Engineer | Cloud & Automation Specialist
            </h2>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Designing resilient systems, accelerating software delivery, and transforming infrastructure into code.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#experience" className="flex items-center justify-center gap-2 px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg font-semibold transition-all hover:shadow-[0_0_20px_rgba(8,145,178,0.4)] w-full sm:w-auto">
              View Work <ArrowRight size={18} />
            </a>
            <a href="#" className="flex items-center justify-center gap-2 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 rounded-lg font-semibold transition-all w-full sm:w-auto">
              <Download size={18} /> Download Resume
            </a>
          </motion.div>

          {/* Core Strengths Quick View */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20 pt-10 border-t border-slate-800/50 flex flex-wrap justify-center gap-8 text-slate-500 font-mono text-sm"
          >
            <span className="flex items-center gap-2"><Cloud size={16} className="text-blue-400" /> Cloud Native</span>
            <span className="flex items-center gap-2"><Terminal size={16} className="text-green-400" /> CI/CD Automation</span>
            <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-purple-400" /> DevSecOps</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
