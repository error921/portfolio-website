import { motion } from 'motion/react';
import { Server, Zap, GitBranch } from 'lucide-react';

export default function About() {
  const strengths = [
    {
      icon: <GitBranch className="text-cyan-400" size={24} />,
      title: "CI/CD Pipelines",
      description: "Architecting zero-downtime deployment pipelines that accelerate release cycles and minimize human error."
    },
    {
      icon: <Server className="text-purple-400" size={24} />,
      title: "Cloud Infrastructure",
      description: "Designing highly available, scalable, and cost-optimized architectures on AWS and Azure."
    },
    {
      icon: <Zap className="text-yellow-400" size={24} />,
      title: "Automation",
      description: "Replacing manual toil with robust Infrastructure as Code (IaC) and configuration management."
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-900/50 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About Me</h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            I am a DevOps Engineer passionate about bridging the gap between development and operations. 
            With a strong foundation in cloud computing and automation, I specialize in building robust CI/CD pipelines, 
            managing infrastructure as code, and ensuring system reliability. My goal is to empower engineering teams 
            to ship code faster, safer, and more efficiently.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {strengths.map((strength, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-800/50 border border-slate-700/50 p-8 rounded-2xl hover:bg-slate-800 transition-colors"
            >
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-6 border border-slate-700">
                {strength.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{strength.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {strength.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
