"use client";

import { education } from "@/data/portfolio";
import { motion } from "framer-motion";

export function Education() {
  return (
    <section id="education" className="py-24 border-b border-white/5">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-[family-name:var(--font-display)] text-xs font-semibold text-zinc-500 tracking-widest uppercase mb-12"
      >
        Education
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="p-[1px] rounded-xl bg-gradient-to-br from-violet-500/20 via-blue-500/10 to-cyan-500/20 w-fit"
      >
        <div className="bg-[#0f0f1e] rounded-xl p-6 grid md:grid-cols-[160px_1fr] gap-4">
          <p className="text-sm text-zinc-600 tabular-nums">{education.period}</p>
          <div>
            <h3 className="font-semibold text-zinc-100">{education.degree}</h3>
            <p className="text-violet-400/80 text-sm">{education.institution}</p>
            <p className="text-zinc-600 text-sm">{education.university}</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
