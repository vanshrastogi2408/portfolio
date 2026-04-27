"use client";

import { projects } from "@/data/portfolio";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";

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

function PlayStoreIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.18 23.76c.3.17.64.24.99.2l12.6-11.62L13.23 9l-10.05 14.76zm16.7-11.05L16.9 11l-3.67 3.38 3.67 3.38 2.99-1.73a1.47 1.47 0 0 0 0-2.55v.03zM3.03.25A1.47 1.47 0 0 0 2.5 1.4v21.2c0 .44.2.82.53 1.16L13.23 12.5 3.03.25zm10.2 11.13L3.17.24c-.05-.04-.1-.06-.14-.1L16.2 7.94l-2.97 3.44z"/>
    </svg>
  );
}

function AppStoreIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.18 1.27-2.16 3.79.03 3.02 2.65 4.03 2.68 4.04l-.07.29zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[number]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const hasLinks = project.links.playStore || project.links.appStore;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: (index % 2) * 0.1 }}
      className="group relative p-[1px] rounded-xl bg-gradient-to-br from-violet-500/10 via-blue-500/5 to-cyan-500/10 hover:from-violet-500/40 hover:via-blue-500/30 hover:to-cyan-500/40 transition-all duration-500 cursor-pointer"
      onClick={() => setExpanded((e) => !e)}
      whileHover={{ y: -4, scale: 1.005 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="rounded-xl p-5 sm:p-6 h-full flex flex-col gap-3" style={{ background: "hsl(201 60% 7%)" }}>
        <div className="flex items-start justify-between">
          <h3 className="font-[family-name:var(--font-display)] font-semibold text-zinc-100 group-hover:text-white transition-colors">{project.name}</h3>
          <div className="flex items-center gap-2 ml-2 shrink-0">
            <span className="text-xs text-zinc-600 tabular-nums">{project.period}</span>
            <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.25 }}>
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
            <span key={t} className={`text-xs px-2.5 py-0.5 rounded-full border ${getTechStyle(t)}`}>
              {t}
            </span>
          ))}
        </div>

        {/* Store links */}
        {hasLinks && (
          <div className="flex items-center gap-2 pt-1" onClick={(e) => e.stopPropagation()}>
            {project.links.playStore && (
              <a
                href={project.links.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border border-white/10 text-zinc-400 hover:border-violet-500/40 hover:text-violet-300 transition-all"
              >
                <PlayStoreIcon />
                Play Store
                <ExternalLink size={10} className="opacity-50" />
              </a>
            )}
            {project.links.appStore && (
              <a
                href={project.links.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border border-white/10 text-zinc-400 hover:border-blue-500/40 hover:text-blue-300 transition-all"
              >
                <AppStoreIcon />
                App Store
                <ExternalLink size={10} className="opacity-50" />
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 border-b border-white/5 scroll-mt-20">
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
        <p className="text-xs text-zinc-700">
          <span className="hidden sm:inline">Click</span>
          <span className="sm:hidden">Tap</span>
          {" "}a card to expand
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
