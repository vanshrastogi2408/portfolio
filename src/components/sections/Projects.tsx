"use client";

import { projects } from "@/data/portfolio";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const techColors: Record<string, string> = {
  "KMM": "bg-blue-500/10 text-blue-300 border-blue-500/20",
  "Kotlin": "bg-violet-500/10 text-violet-300 border-violet-500/20",
  "Jetpack Compose": "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
  "Next.js": "bg-white/10 text-zinc-200 border-white/20",
  "TypeScript": "bg-blue-500/10 text-blue-300 border-blue-500/20",
};

function getTechStyle(t: string) {
  return techColors[t] ?? "bg-white/5 text-zinc-400 border-white/10";
}

function ProjectCard({ project, index }: { project: typeof projects[number]; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: (index % 2) * 0.1 }}
      className="group relative p-[1px] rounded-xl bg-gradient-to-br from-violet-500/10 via-blue-500/5 to-cyan-500/10 hover:from-violet-500/40 hover:via-blue-500/30 hover:to-cyan-500/40 transition-all duration-500 cursor-pointer"
      onClick={() => setExpanded((e) => !e)}
      whileHover={{ y: -4, scale: 1.005 }}
    >
      <div className="bg-[#0f0f1e] rounded-xl p-6 h-full flex flex-col gap-3">
        <div className="flex items-start justify-between">
          <h3 className="font-[family-name:var(--font-display)] font-semibold text-zinc-100 group-hover:text-white transition-colors">{project.name}</h3>
          <div className="flex items-center gap-2 ml-2 shrink-0">
            <span className="text-xs text-zinc-600 tabular-nums">{project.period}</span>
            <motion.div
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.25 }}
            >
              <ChevronDown size={14} className="text-zinc-600 group-hover:text-violet-400 transition-colors" />
            </motion.div>
          </div>
        </div>

        <p className="text-zinc-400 text-sm leading-relaxed">{project.description}</p>

        <motion.div
          initial={false}
          animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <ul className="mb-3 space-y-1 pt-1">
            {project.highlights.map((h, j) => (
              <li key={j} className="text-xs text-violet-300/70 flex items-start gap-2">
                <span className="text-violet-500/50 mt-0.5 shrink-0">◆</span>
                {h}
              </li>
            ))}
          </ul>
        </motion.div>

        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.tech.map((t) => (
            <span
              key={t}
              className={`text-xs px-2.5 py-0.5 rounded-full border ${getTechStyle(t)}`}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-24 border-b border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-end justify-between mb-12"
      >
        <h2 className="font-[family-name:var(--font-display)] text-xs font-semibold text-zinc-500 tracking-widest uppercase">
          Projects
        </h2>
        <p className="text-xs text-zinc-700">Click a card to expand details</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
