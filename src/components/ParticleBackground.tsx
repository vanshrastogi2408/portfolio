"use client";

import { useEffect, useRef } from "react";

export function ParticleBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = () => {
      video.play().catch(() => {});
    };

    // Initial attempt
    tryPlay();

    // Resume when tab comes back from background (mobile app-switch)
    const onVisibilityChange = () => {
      if (!document.hidden) tryPlay();
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    // Some mobile browsers block autoplay until first user gesture
    document.addEventListener("touchstart", tryPlay, { once: true, passive: true });
    document.addEventListener("click", tryPlay, { once: true });

    // Also retry once the browser has buffered enough to play
    video.addEventListener("canplay", tryPlay);
    video.addEventListener("loadedmetadata", tryPlay);

    return () => {
      document.removeEventListener("visibilitychange", onVisibilityChange);
      video.removeEventListener("canplay", tryPlay);
      video.removeEventListener("loadedmetadata", tryPlay);
    };
  }, []);

  return (
    <>
      <div
        className="fixed inset-0 z-0 overflow-hidden"
        style={{ background: "hsl(201 100% 8%)" }}
        aria-hidden="true"
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ opacity: 0.55 }}
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
            type="video/mp4"
          />
        </video>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse at 50% 0%, transparent 0%, hsl(201 100% 6% / 0.35) 40%, hsl(201 100% 5% / 0.85) 100%),
              linear-gradient(180deg, transparent 0%, transparent 40%, hsl(201 100% 6% / 0.6) 70%, hsl(201 100% 5%) 100%)
            `,
          }}
        />
      </div>

      <svg
        className="fixed inset-0 z-[1] pointer-events-none w-full h-full"
        style={{ opacity: 0.4 }}
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <pattern id="dots" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="20" r="0.6" fill="white" opacity="0.5" />
            <circle cx="62" cy="54" r="0.5" fill="white" opacity="0.35" />
            <circle cx="35" cy="70" r="0.4" fill="white" opacity="0.25" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
    </>
  );
}
