"use client";

import { experience } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export function Experience() {
  return (
    <section id="experience" className="py-24 border-b border-white/5">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-[family-name:var(--font-display)] text-xs font-semibold text-zinc-500 tracking-widest uppercase mb-12"
      >
        Experience
      </motion.h2>
      <div className="space-y-10">
        {experience.map((job, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="grid md:grid-cols-[200px_1fr] gap-4 group"
          >
            <div className="pt-1">
              <p className="text-sm text-zinc-600 tabular-nums">{job.period}</p>
              <p className="text-sm text-zinc-700">{job.location}</p>
            </div>
            {/* gradient border card */}
            <div className="relative p-[1px] rounded-xl bg-gradient-to-br from-violet-500/0 via-blue-500/0 to-cyan-500/0 group-hover:from-violet-500/30 group-hover:via-blue-500/20 group-hover:to-cyan-500/30 transition-all duration-500">
              <div className="bg-[#0f0f1e] rounded-xl p-5">
                <h3 className="font-[family-name:var(--font-display)] font-semibold text-zinc-100 text-lg">{job.role}</h3>
                <p className="text-violet-400/80 text-sm mb-3">{job.company}</p>
                <p className="text-zinc-400 leading-relaxed mb-4 text-sm">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  {job.tech.map((t) => (
                    <Badge
                      key={t}
                      variant="secondary"
                      className="text-xs font-normal bg-white/5 text-zinc-400 border border-white/10 hover:border-violet-500/40 hover:text-violet-300 transition-colors cursor-default"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
