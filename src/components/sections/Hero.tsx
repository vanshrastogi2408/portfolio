"use client";

import { personal } from "@/data/portfolio";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { SVGProps } from "react";

function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={20} height={20} {...props}>
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.341-3.369-1.341-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={20} height={20} {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const ROLES = ["Tech Lead", "Android Developer", "KMM Engineer", "Full-Stack Builder"];

function Typewriter() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[index];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && displayed.length < current.length) {
      t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 65);
    } else if (!deleting && displayed.length === current.length) {
      t = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      t = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 38);
    } else {
      setDeleting(false);
      setIndex((i) => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(t);
  }, [displayed, deleting, index]);

  return (
    <span className="inline-flex items-center gap-1.5 justify-center">
      <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
        {displayed}
      </span>
      <span className="inline-block w-[2px] h-6 bg-violet-400/70 animate-pulse" />
    </span>
  );
}

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } };
const fadeUp = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } };

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center border-b border-white/5 overflow-hidden px-6"
    >
      {/* ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-violet-700/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-blue-700/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-cyan-700/8 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.7 }}
        className="relative z-10 flex flex-col items-center max-w-4xl"
      >
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="text-xs font-semibold text-violet-400/60 tracking-[0.25em] uppercase mb-6"
        >
          Available for opportunities
        </motion.p>

        <motion.h1
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="font-[family-name:var(--font-display)] text-7xl md:text-[7.5rem] font-bold leading-[0.95] tracking-tight mb-6"
        >
          <span className="text-white">{personal.name.split(" ")[0]}</span>{" "}
          <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
            {personal.name.split(" ")[1]}
          </span>
        </motion.h1>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-light text-zinc-400 mb-6 h-10"
        >
          <Typewriter />
        </motion.div>

        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="text-zinc-500 text-lg leading-relaxed max-w-2xl mb-10"
        >
          {personal.bio}
        </motion.p>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4"
        >
          <a
            href={`mailto:${personal.email}`}
            className="flex items-center gap-2.5 text-sm font-semibold px-7 py-3 rounded-full bg-white text-black hover:bg-zinc-100 transition-all shadow-[0_0_40px_rgba(139,92,246,0.15)]"
          >
            <Mail size={15} />
            Get in touch
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium px-5 py-3 rounded-full border border-white/10 text-zinc-400 hover:border-violet-500/40 hover:text-violet-300 transition-all"
          >
            <GithubIcon />
            GitHub
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium px-5 py-3 rounded-full border border-white/10 text-zinc-400 hover:border-blue-500/40 hover:text-blue-300 transition-all"
          >
            <LinkedinIcon />
            LinkedIn
          </a>
        </motion.div>
      </motion.div>

      {/* scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-zinc-700"
      >
        <span className="text-[10px] font-semibold tracking-[0.2em] uppercase">Explore Now</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="flex flex-col gap-0.5"
        >
          <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
            <path d="M1 1L8 8L15 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <svg width="16" height="10" viewBox="0 0 16 10" fill="none" className="opacity-40 -mt-1">
            <path d="M1 1L8 8L15 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
