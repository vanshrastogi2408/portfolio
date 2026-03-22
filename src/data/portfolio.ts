export const personal = {
  name: "Vansh Rustagi",
  tagline: "Tech Lead · Mobile → Full-Stack",
  bio: "4.5 years building production-grade mobile apps with Kotlin, Jetpack Compose, and KMM. Now leading full-stack SaaS development with Next.js — carrying clean architecture principles across every layer of the stack.",
  email: "vanshrustagi.2408@gmail.com",
  phone: "+91 96431 96870",
  linkedin: "https://linkedin.com/in/vansh-rastogi-906717204",
  github: "https://github.com/vanshrastogi2408",
};

export const experience = [
  {
    role: "Tech Lead",
    company: "Xynapx",
    period: "Present",
    location: "India",
    description:
      "Leading full-stack SaaS product development with a 2-person team. Currently building KAPWA — a multi-tenant SaaS platform — architected with Next.js App Router, TypeScript, PostgreSQL and Prisma.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS", "Auth.js"],
  },
  {
    role: "Software Engineer — Mobile",
    company: "Mobilecoderz Technologies Pvt Ltd",
    period: "May 2023 — Present",
    location: "Noida, IN",
    description:
      "Revamped existing apps using Jetpack Compose, built apps from scratch, and stabilised production codebases. Delivered complex feature sets including Google Assistant integration and Payment SDKs.",
    tech: ["Kotlin", "Jetpack Compose", "Hilt", "MVVM", "Payment SDK", "Crashlytics"],
  },
  {
    role: "Associate Software Engineer — Android",
    company: "Techugo Pvt Ltd",
    period: "Feb 2022 — Apr 2023",
    location: "Noida, IN",
    description:
      "Worked across existing and greenfield Android apps. Developed and published multiple apps to the Play Store with full MVVM architecture.",
    tech: ["Kotlin", "Jetpack Compose", "Hilt", "MVVM", "Firebase", "Crashlytics"],
  },
];

export const skills = [
  {
    category: "Architecture",
    items: ["MVVM", "Clean Architecture", "SOLID Principles", "Multi-tenancy"],
  },
  {
    category: "Android / KMM",
    items: ["Kotlin", "Jetpack Compose", "KMM", "CMP", "Hilt", "Dagger2", "RoomDB", "SQLDelight", "Ktor", "Retrofit"],
  },
  {
    category: "Web / Full-Stack",
    items: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Prisma", "PostgreSQL", "Zod", "Auth.js"],
  },
  {
    category: "Tools & Infra",
    items: ["pnpm", "Git", "Firebase", "Socket.IO", "OneSignal", "Agora SDK"],
  },
];

export const projects = [
  {
    name: "SNE — News App",
    period: "Dec 2024",
    description:
      "Cross-platform news app delivering current news daily for Android and iOS, built entirely from scratch.",
    highlights: ["Full KMM cross-platform", "Kotlin Multi Module Architecture"],
    tech: ["KMM", "Jetpack Compose", "SQLDelight", "Ktor"],
    links: { playStore: "#", appStore: "#" },
  },
  {
    name: "CloudPx",
    period: "May 2024",
    description:
      "Medical records management system for the Philippines combining telemedicine and appointment booking. Reduced app size by 40MB, improved load time by 80%.",
    highlights: ["10,000+ downloads", "6,000 active users", "Video consultations & real-time chat"],
    tech: ["Kotlin", "Jetpack Compose", "Agora SDK", "Socket.IO", "OneSignal", "Ktor"],
    links: { playStore: "#" },
  },
  {
    name: "CloudKart",
    period: "Dec 2023",
    description:
      "E-commerce grocery delivery app built from scratch using Jetpack Compose. Enables same-day delivery for users in Cebu City.",
    highlights: ["Built from scratch", "Cross-platform (Android + iOS)"],
    tech: ["Kotlin", "Jetpack Compose", "Room DB", "Ktor"],
    links: { playStore: "#", appStore: "#" },
  },
  {
    name: "WeFundUs POS",
    period: "Aug 2023",
    description:
      "POS billing application released on the Clover Store with barcode scanner, printer, and customer-facing screen integrations.",
    highlights: ["Clover Store release", "Hardware integrations: scanner + printer"],
    tech: ["Kotlin", "Work Manager", "Room DB", "Datastore", "Clover SDK"],
    links: {},
  },
  {
    name: "SendSprint",
    period: "Jun 2023",
    description:
      "International payment app for money transfers, gift vouchers, and scheduled payments across multiple countries. Delivered all 3 milestones solo.",
    highlights: ["Solo delivery", "Biometric auth", "Google Assistant integration"],
    tech: ["Kotlin", "Compose", "Biometric", "KeyStore", "Deep Links"],
    links: { playStore: "#" },
  },
  {
    name: "Milkbun",
    period: "Jan 2023",
    description:
      "Food delivery app for online orders, takeaway, and restaurant booking. Revamped entire app with modern architecture — improved efficiency by 100% and reduced size by 25MB.",
    highlights: ["100% efficiency improvement", "25MB size reduction"],
    tech: ["Kotlin", "Jetpack Navigation", "Socket.IO", "Retrofit"],
    links: { playStore: "#" },
  },
  {
    name: "MarriageSaga",
    period: "Jul 2022",
    description:
      "Dating app with Kundli matching, restaurant booking, and video/voice call capabilities using Agora.",
    highlights: ["Built from scratch", "Agora video calls"],
    tech: ["Kotlin", "Retrofit", "Socket.IO", "Agora"],
    links: { playStore: "#" },
  },
  {
    name: "Sterkla",
    period: "Feb 2022",
    description:
      "Life coaching marketplace connecting users with coaches via video calls. Single activity app with NavController.",
    highlights: ["Agora video calls", "Firebase notifications"],
    tech: ["Kotlin", "NavController", "Retrofit", "Firebase"],
    links: { playStore: "#" },
  },
];

export const education = {
  degree: "Bachelor of Computer Application",
  institution: "Jagan Institute of Management Studies",
  university: "GGSIPU, Delhi",
  period: "2019 — 2022",
};
