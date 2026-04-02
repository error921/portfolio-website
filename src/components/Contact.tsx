import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's Connect</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <a href="mailto:hello@niharpanda.dev" className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition-colors group">
                  <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                    <Mail size={20} className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Email</p>
                    <p className="font-medium">hello@niharpanda.dev</p>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition-colors group">
                  <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                    <Linkedin size={20} className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">LinkedIn</p>
                    <p className="font-medium">linkedin.com/in/niharpanda</p>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition-colors group">
                  <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                    <Github size={20} className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">GitHub</p>
                    <p className="font-medium">github.com/niharpanda</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form className="bg-slate-900 border border-slate-800 p-8 rounded-2xl space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
