"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const observers: IntersectionObserver[] = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Close mobile menu when user starts scrolling
  useEffect(() => {
    if (!menuOpen) return;
    const close = () => setMenuOpen(false);
    window.addEventListener("scroll", close, { once: true, passive: true });
    return () => window.removeEventListener("scroll", close);
  }, [menuOpen]);

  const navBg = scrolled || menuOpen
    ? "border-b border-white/5 shadow-[0_1px_40px_rgba(0,0,0,0.6)]"
    : "";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
      style={scrolled || menuOpen ? { background: "hsl(201 100% 8% / 0.88)", backdropFilter: "blur(20px)" } : {}}
    >
      <nav className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <motion.a
          href="#hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-[family-name:var(--font-display)] text-base font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent"
          aria-label="Back to top"
        >
          VR
        </motion.a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="relative px-3 py-1.5 text-sm rounded-md transition-colors"
              style={{ color: active === link.href.slice(1) ? "#c4b5fd" : "#6b7280" }}
            >
              {active === link.href.slice(1) && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-violet-500/10 border border-violet-500/20 rounded-md"
                  transition={{ type: "spring", stiffness: 400, damping: 35 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </motion.a>
          ))}
        </div>

        {/* Hamburger — mobile only */}
        <button
          className="md:hidden flex items-center justify-center w-9 h-9 rounded-md text-zinc-400 hover:text-white transition-colors"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="md:hidden overflow-hidden border-t border-white/5"
          >
            <div className="px-6 py-2 flex flex-col">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-3.5 text-base border-b border-white/5 last:border-0 transition-colors"
                  style={{ color: active === link.href.slice(1) ? "#c4b5fd" : "#9ca3af" }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
