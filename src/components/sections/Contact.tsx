"use client";

import { personal } from "@/data/portfolio";
import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import type { ComponentType, SVGProps } from "react";

function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16} {...props}>
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.341-3.369-1.341-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16} {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

type IconComponent = ComponentType<SVGProps<SVGSVGElement>> | ComponentType<{ size?: number; className?: string }>;

const links: { icon: IconComponent; label: string; href: string; color: string }[] = [
  { icon: Mail, label: personal.email, href: `mailto:${personal.email}`, color: "hover:text-violet-400" },
  { icon: Phone, label: personal.phone, href: `tel:${personal.phone}`, color: "hover:text-blue-400" },
  { icon: GithubIcon, label: "github.com/vanshrastogi2408", href: personal.github, color: "hover:text-cyan-400" },
  { icon: LinkedinIcon, label: "linkedin.com/in/vansh-rastogi-906717204", href: personal.linkedin, color: "hover:text-blue-400" },
];

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-[family-name:var(--font-display)] text-xs font-semibold text-zinc-500 tracking-widest uppercase mb-12"
      >
        Contact
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-zinc-400 text-lg mb-10 max-w-lg leading-relaxed"
      >
        Open to interesting roles, collaborations, or just a good conversation about building software.
      </motion.p>

      <div className="space-y-4">
        {links.map(({ icon: Icon, label, href, color }, i) => (
          <motion.a
            key={href}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            whileHover={{ x: 6 }}
            className={`flex items-center gap-3 text-zinc-500 ${color} transition-colors group w-fit`}
          >
            <span className="opacity-60 group-hover:opacity-100 transition-opacity">
              <Icon size={16} />
            </span>
            <span>{label}</span>
          </motion.a>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-16 pt-8 border-t border-white/5 text-center text-xs text-zinc-700"
      >
        © {new Date().getFullYear()} Vansh Rustagi
      </motion.div>
    </section>
  );
}
