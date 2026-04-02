import { motion } from 'motion/react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      skills: ["AWS (EC2, S3, RDS, VPC, IAM)", "Microsoft Azure", "Google Cloud Platform"]
    },
    {
      title: "Containerization & Orchestration",
      skills: ["Docker", "Kubernetes (EKS, AKS)", "Helm", "Docker Compose"]
    },
    {
      title: "CI/CD & Version Control",
      skills: ["Jenkins", "GitHub Actions", "GitLab CI", "Git", "Bitbucket"]
    },
    {
      title: "Infrastructure as Code (IaC)",
      skills: ["Terraform", "Ansible", "CloudFormation", "Pulumi"]
    },
    {
      title: "Monitoring & Observability",
      skills: ["Prometheus", "Grafana", "ELK Stack", "Datadog", "CloudWatch"]
    },
    {
      title: "Scripting & Languages",
      skills: ["Python", "Bash/Shell", "Go", "Node.js"]
    }
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Arsenal</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building, deploying, and maintaining scalable cloud-native applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-slate-900 border border-slate-800 p-6 rounded-xl"
            >
              <h3 className="text-lg font-semibold text-cyan-400 mb-4 font-mono border-b border-slate-800 pb-2">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIndex) => (
                  <span
                    key={sIndex}
                    className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-md border border-slate-700 hover:border-cyan-500/50 hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
