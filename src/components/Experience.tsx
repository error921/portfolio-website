import { motion } from 'motion/react';
import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: "Senior DevOps Engineer",
      company: "TechNova Solutions",
      duration: "2021 - Present",
      achievements: [
        "Architected and migrated legacy monolithic applications to a microservices architecture on AWS EKS, improving system scalability by 40%.",
        "Implemented GitOps workflows using ArgoCD, reducing deployment times from hours to under 15 minutes.",
        "Established centralized logging and monitoring using the ELK stack and Prometheus/Grafana, decreasing MTTR by 35%.",
        "Automated infrastructure provisioning using Terraform, ensuring 100% environment consistency across Dev, Staging, and Prod."
      ]
    },
    {
      role: "DevOps Engineer",
      company: "CloudScale Inc.",
      duration: "2018 - 2021",
      achievements: [
        "Designed and maintained CI/CD pipelines in Jenkins, supporting 50+ developers and facilitating daily releases.",
        "Containerized 20+ applications using Docker, optimizing resource utilization and reducing infrastructure costs by 20%.",
        "Managed AWS infrastructure (EC2, RDS, S3, VPC) and implemented automated backup and disaster recovery strategies.",
        "Wrote Python and Bash scripts to automate routine operational tasks, saving the team approximately 15 hours per week."
      ]
    },
    {
      role: "Systems Administrator",
      company: "DataFlow Systems",
      duration: "2016 - 2018",
      achievements: [
        "Administered Linux servers (Ubuntu, CentOS) ensuring 99.9% uptime for critical internal services.",
        "Implemented configuration management using Ansible to standardize server setups and security patching.",
        "Assisted in the initial migration of on-premise workloads to AWS."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-slate-900/30 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center gap-3">
            <Briefcase className="text-cyan-400" /> Professional Experience
          </h2>
          <p className="text-slate-400">
            A track record of delivering scalable infrastructure and driving automation.
          </p>
        </motion.div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              {/* Timeline dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-950 bg-cyan-500 text-slate-950 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Briefcase size={16} />
              </div>
              
              {/* Content Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-900 border border-slate-800 p-6 rounded-xl shadow-xl hover:border-cyan-500/30 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                  <h3 className="font-bold text-xl text-white">{exp.role}</h3>
                  <span className="flex items-center gap-1 text-xs font-medium text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded-full whitespace-nowrap">
                    <Calendar size={12} /> {exp.duration}
                  </span>
                </div>
                <div className="text-slate-400 font-medium mb-4 text-sm">{exp.company}</div>
                <ul className="space-y-2 text-slate-300 text-sm">
                  {exp.achievements.map((achievement, aIndex) => (
                    <li key={aIndex} className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1.5 text-[10px]">▶</span>
                      <span className="leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
