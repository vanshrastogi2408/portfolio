"use client";

import { skills } from "@/data/portfolio";
import { motion } from "framer-motion";

const groupColors: Record<string, string> = {
  "Architecture": "from-violet-400 to-purple-400",
  "Android / KMM": "from-blue-400 to-cyan-400",
  "Web / Full-Stack": "from-cyan-400 to-emerald-400",
  "Tools & Infra": "from-pink-400 to-orange-400",
};

const badgeColors: Record<string, string> = {
  "Architecture": "border-violet-500/20 text-violet-300 hover:border-violet-400/50 hover:bg-violet-500/10",
  "Android / KMM": "border-blue-500/20 text-blue-300 hover:border-blue-400/50 hover:bg-blue-500/10",
  "Web / Full-Stack": "border-cyan-500/20 text-cyan-300 hover:border-cyan-400/50 hover:bg-cyan-500/10",
  "Tools & Infra": "border-pink-500/20 text-pink-300 hover:border-pink-400/50 hover:bg-pink-500/10",
};

export function Skills() {
  return (
    <section id="skills" className="py-24 border-b border-white/5">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-[family-name:var(--font-display)] text-xs font-semibold text-zinc-500 tracking-widest uppercase mb-12"
      >
        Skills
      </motion.h2>
      <div className="space-y-8">
        {skills.map((group, gi) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: gi * 0.08 }}
            className="grid md:grid-cols-[200px_1fr] gap-4 items-start"
          >
            <p className={`text-sm font-semibold pt-1 bg-gradient-to-r ${groupColors[group.category] ?? "from-zinc-400 to-zinc-300"} bg-clip-text text-transparent`}>
              {group.category}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill, si) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: gi * 0.06 + si * 0.04 }}
                  whileHover={{ scale: 1.07, y: -1 }}
                  className={`inline-block text-sm px-3 py-1 rounded-full border bg-white/[0.03] cursor-default select-none transition-all duration-200 ${badgeColors[group.category] ?? "border-zinc-700 text-zinc-300"}`}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
