import type { Metadata } from "next";
import { Geist, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const SITE_URL = "https://vanshrastogi.vercel.app";

export const metadata: Metadata = {
  title: "Vansh Rastogi | Android & KMM Developer · Tech Lead · Next.js",
  description:
    "Tech Lead with 4.5 years shipping production Android & KMM apps in Kotlin and Jetpack Compose. Now leading full-stack SaaS with Next.js, TypeScript and PostgreSQL. Open to senior IC and tech-lead roles.",
  keywords: [
    "Vansh Rastogi",
    "Android Developer",
    "KMM Developer",
    "Kotlin Developer",
    "Jetpack Compose",
    "Tech Lead",
    "Next.js Developer",
    "TypeScript",
    "Mobile Developer India",
    "SaaS Developer",
    "Full Stack Developer",
    "Kotlin Multiplatform",
  ],
  authors: [{ name: "Vansh Rastogi", url: SITE_URL }],
  creator: "Vansh Rastogi",
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Vansh Rastogi",
    title: "Vansh Rastogi | Android & KMM Developer · Tech Lead",
    description:
      "Tech Lead with 4.5 years shipping Android & KMM apps in Kotlin. Now leading full-stack SaaS with Next.js. Open to senior roles.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Vansh Rastogi — Tech Lead" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vansh Rastogi | Android & KMM Developer · Tech Lead",
    description:
      "Tech Lead with 4.5 years shipping Android & KMM apps in Kotlin. Now leading full-stack SaaS with Next.js.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Vansh Rastogi",
  jobTitle: "Tech Lead",
  url: SITE_URL,
  email: "vanshrustagi.2408@gmail.com",
  telephone: "+91-96431-96870",
  address: { "@type": "PostalAddress", addressLocality: "Noida", addressCountry: "IN" },
  sameAs: [
    "https://linkedin.com/in/vansh-rastogi-906717204",
    "https://github.com/vanshrastogi2408",
  ],
  knowsAbout: [
    "Android Development", "Kotlin", "Jetpack Compose", "Kotlin Multiplatform",
    "Next.js", "TypeScript", "React", "PostgreSQL", "SaaS Development",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Jagan Institute of Management Studies",
    address: { "@type": "PostalAddress", addressLocality: "Delhi", addressCountry: "IN" },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${spaceGrotesk.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-geist)]">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
