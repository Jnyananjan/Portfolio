import { Bot, Globe, Keyboard, Watch, Zap, Trophy, type LucideIcon } from "lucide-react";

export type Project = {
  slug: string;
  n: string;
  tag: string;
  title: string;
  blurb: string;
  icon: LucideIcon;
  year: string;
  role: string;
  stack: string[];
  overview: string;
  problem: string;
  solution: string;
  story: string[];
  highlights: { label: string; value: string }[];
  challenge?: string;
  badge?: string;
  subBadge?: string;
  isLive?: boolean;
  websiteUrl?: string;
  gallery?: { url: string; caption: string }[];
  management?: string;
  experience?: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "techypad",
    n: "01",
    tag: "STARTUP / HARDWARE",
    title: "TechyPad",
    blurb:
      "A customisable macropad startup. Designed, prototyped, and shipped — turning keystrokes into superpowers for creators and devs.",
    icon: Keyboard,
    year: "2026 — present",
    role: "Founder · Hardware · Firmware",
    stack: ["KiCad", "QMK", "Embedded C", "USB HID", "3D Printing"],
    isLive: true,
    badge: "🚀 Live Product",
    subBadge: "RP2040 Powered • Hotswap • QMK",
    websiteUrl: "https://techypad.in/",
    gallery: [
      { url: "/projects/techypad-hero.png", caption: "Final Product" },
      { url: "/projects/techypad-pcb.png", caption: "Internal PCB" },
      { url: "/projects/techypad-assembly.png", caption: "Assembly" },
      { url: "/projects/techypad-lifestyle.png", caption: "In Use" },
    ],
    overview: "TechyPad is a professional-grade, programmable macropad designed to streamline creative and development workflows. It bridges the gap between high-end custom keyboards and accessible productivity tools.",
    problem: "Creators often find themselves repeating complex keyboard shortcuts or menu navigations. Existing solutions were either too expensive, lacked customization, or required proprietary software that felt bloated.",
    solution: "I developed a compact 9-key macropad with hotswap support and an RP2040 core. By utilizing open-source QMK/VIA firmware, I gave users total control without forcing them to install heavy background processes.",
    story: [
      "TechyPad started as a frustration: too many keyboard shortcuts, too little muscle memory. I designed a compact, programmable macropad that lets creators map any combo, macro, or media action to a satisfying mechanical key.",
      "The hardware features an RP2040 core, hotswap sockets, and a custom PCB designed in KiCad. The firmware is built on QMK, allowing for infinite customization via a web-based configurator.",
      "From schematic to PCB to firmware to packaging — every layer is mine. Each unit ships with a custom 3D-printed case and a braided USB cable. It's not just a product; it's the proof that a student in a dorm room can take a hardware idea from KiCad sketch to paying customer."
    ],
    highlights: [
      { label: "stage", value: "Shipping" },
      { label: "iterations", value: "v3.2" },
      { label: "mcu", value: "RP2040" },
    ],
    featured: true,
  },
  {
    slug: "line-following-robot",
    n: "02",
    tag: "ROBOTICS / EMBEDDED",
    title: "Line-Following Robot",
    blurb:
      "Sensors, motors, and tight feedback loops. Built from scratch — a high-performance system for precision at speed.",
    icon: Bot,
    year: "2026",
    role: "System Architect · Firmware · PID Tuning",
    stack: ["ESP32-S3", "N20 DC Motors", "PID Control", "FreeRTOS", "C++"],
    badge: "⚡ High-Speed Robotics System",
    subBadge: "ESP32-S3 • N20 Motors • PID",
    isLive: true,
    gallery: [
      { url: "/projects/robot-hero.png", caption: "Main Assembly" },
      { url: "/projects/robot-sensors.png", caption: "IR Sensor Array" },
      { url: "/projects/robot-pcb.png", caption: "ESP32-S3 Logic" },
      { url: "/projects/robot-track.png", caption: "Track Testing" },
    ],
    overview: "A high-performance autonomous robotics platform powered by an ESP32-S3, utilizing advanced PID control loops to navigate complex courses at high speed with sub-centimeter precision.",
    problem: "Traditional line-followers often struggle with the 'oscillation problem' at high speeds, where over-correction leads to the robot flying off the track at sharp corners.",
    solution: "By migrating to the ESP32-S3 and implementing a dual-core processing strategy — one core for 1kHz sensor sampling and the other for motor PWM calculations — I achieved a rock-solid PID loop that handles sharp hairpins with zero lag.",
    story: [
      "This wasn't just about following a line; it was about the engineering of high-speed feedback systems. The heart of the bot is an ESP32-S3, which gives me enough horsepower to run real-time filtering on the IR sensor data.",
      "The drive system uses N20 High-RPM gear motors powered by a 2S 7.4V LiPo battery. This combination provides the high torque-to-weight ratio required for rapid acceleration out of corners.",
      "Tuning the PID constants was a masterclass in patience. Using a custom telemetry system, I mapped out the robot's error rate and adjusted the constants until the path was perfectly smooth. The result is a bot that feels like it's glued to the white line."
    ],
    highlights: [
      { label: "mcu", value: "ESP32-S3" },
      { label: "motors", value: "N20 1000RPM" },
      { label: "power", value: "7.4V LiPo" },
    ],
    featured: true,
  },
  {
    slug: "led-watch",
    n: "03",
    tag: "HARDWARE / WEARABLE",
    title: "LED Matrix Watch",
    blurb: "A wrist-mounted light show. 72 discrete LEDs, custom STM32-powered circular PCB.",
    icon: Watch,
    year: "2026",
    role: "Lead Hardware Designer · PCB Artist",
    stack: ["KiCad", "STM32", "C++", "Power Optimization"],
    badge: "⌚ Custom Wearable Hardware",
    subBadge: "72 LEDs • STM32 Powered • Fully Custom PCB",
    isLive: true,
    gallery: [
      { url: "/projects/watch-hero.png", caption: "Watch Face (ON)" },
      { url: "/projects/watch-off.png", caption: "Raw PCB (OFF)" },
      { url: "/projects/watch-pcb.png", caption: "Layout & Routing" },
      { url: "/projects/watch-side.png", caption: "Side Profile" },
    ],
    overview: "A precision-engineered wearable device featuring a custom-designed circular 5x7 LED matrix driven by an STM32, optimized for both aesthetic expression and ultra-low power consumption.",
    problem: "Wearable devices often sacrifice artistic character for standardized screen utility. I wanted to build a device that celebrated the beauty of raw electronic components while solving the problem of high-density LED control in a small footprint.",
    solution: "I designed a multi-layer 38mm circular PCB that packs 60 bi-color and 12 single-color LEDs. By using Charlieplexing and optimized STM32 low-power modes, I achieved complex animations with a standby current of just 2.4μA.",
    challenge: "Designing a dense LED matrix on a circular PCB required precise routing and symmetry balancing. Managing the power consumption of 72 LEDs in a constrained 150mAh LiPo system while ensuring uniform brightness across the matrix was the primary engineering hurdle.",
    story: [
      "I wanted a watch that didn't look like a screen. This uses a 5x7 matrix of discrete 0603 LEDs to scroll time and notifications in a beautiful, low-fi aesthetic. The circular PCB was a challenge in KiCad, requiring hundreds of manual trace adjustments to maintain symmetry.",
      "The firmware is built on bare-metal C++ for the STM32, implementing a custom animation engine that handles multiplexing with zero flicker. I integrated a dedicated charging circuit and LiPo management system to ensure the watch is as practical as it is visual."
    ],
    highlights: [
      { label: "leds", value: "72 Discrete" },
      { label: "controller", value: "STM32" },
      { label: "diameter", value: "38mm" }
    ],
    featured: true,
  },
  {
    slug: "pizzahut-menu",
    n: "04",
    tag: "WEB / UI-UX",
    title: "Pizza Hut Web Menu",
    blurb: "Redesigning the digital dining experience. 60FPS fluid transitions and high-fidelity ordering UI.",
    icon: Globe,
    year: "2025",
    role: "Lead Frontend Dev · UI Designer",
    stack: ["React", "Framer Motion", "Tailwind CSS", "Vite"],
    badge: "🍕 High-Fidelity UI/UX System",
    subBadge: "60FPS • Motion-Driven • Mobile-First",
    websiteUrl: "https://pizzahutwebmenu.netlify.app/",
    gallery: [
      { url: "/projects/pizzahut-hero.png", caption: "Homepage Hero" },
      { url: "/projects/pizzahut-menu.png", caption: "Menu Browsing UI" },
      { url: "/projects/pizzahut-detail.png", caption: "Pizza Detail View" },
      { url: "/projects/pizzahut-mobile.png", caption: "Mobile Experience" },
    ],
    overview: "A high-fidelity digital reimagining of the Pizza Hut ordering experience, focused on performance, physics-based animations, and visual craving triggers to reduce friction in the digital dining journey.",
    problem: "Most legacy food ordering systems prioritize utility over emotion, resulting in a cold, disjointed experience. I wanted to solve the 'clunky menu' problem by building a system that feels as satisfying to use as the meal itself.",
    solution: "I implemented a motion-first architecture using Framer Motion and React. By leveraging hardware-accelerated transitions and optimized rendering patterns, I achieved a consistent 60FPS experience even on low-end mobile devices.",
    challenge: "The primary UX strategy focused on 'visual craving triggers' — using high-resolution imagery and dynamic lighting to simulate the physical menu experience. I prioritized a mobile-first interaction model with one-handed navigation and physics-based feedback for every user action.",
    story: [
      "This wasn't just a redesign; it was a reconstruction of the digital ordering flow. I built custom animation hooks to handle complex layout transitions between categories, ensuring that users never feel 'lost' in the menu.",
      "The tech stack (React + Vite + Tailwind) was chosen for maximum performance. Every image is lazily loaded and optimized via a custom CDN pipeline, allowing for a 100/100 Lighthouse score while maintaining high-fidelity visuals."
    ],
    highlights: [
      { label: "fps", value: "60 FPS" },
      { label: "perf", value: "100/100" },
      { label: "stack", value: "React" }
    ],
    featured: true,
  },
  {
    slug: "cricket-score",
    n: "05",
    tag: "WEB / REAL-TIME",
    title: "Cricket Score Display",
    blurb: "Sub-second real-time data streaming. Built with Supabase to handle concurrent live match updates.",
    icon: Trophy,
    year: "2025",
    role: "Fullstack Engineer · Real-time Systems",
    stack: ["React", "Supabase", "PostgreSQL", "WebSockets"],
    badge: "⚡ Real-Time Data System",
    subBadge: "<100ms Latency • Live Sync • Scalable",
    websiteUrl: "https://cpls3.netlify.app/",
    gallery: [
      { url: "/projects/cricket-hero.png", caption: "Live Match Dashboard" },
      { url: "/projects/cricket-hero.png", caption: "Scoreboard Analytics" },
      { url: "/projects/cricket-hero.png", caption: "Mobile Live Feed" },
      { url: "/projects/cricket-hero.png", caption: "System Health Monitor" },
    ],
    overview: "A low-latency, real-time distributed system designed to broadcast ball-by-ball cricket scores to thousands of concurrent users with sub-100ms synchronization.",
    problem: "Traditional scoring apps often suffer from 'refresh lag' or high latency, where the broadcast is several balls behind the actual match. Handling concurrent writes and immediate global broadcasts is a complex state synchronization problem.",
    solution: "I built a real-time engine on top of Supabase (PostgreSQL + Realtime). By utilizing WebSocket-based broadcast channels and database change listeners, I eliminated manual polling, ensuring that every score update is pushed instantly to all connected clients.",
    challenge: "Maintaining strict data consistency across thousands of concurrent observers during high-frequency updates (e.g., tight over finishes) was the primary hurdle. I implemented an optimistic UI update pattern combined with a robust server-side state machine to ensure the UI remains fluid even under heavy load.",
    story: [
      "The core of the system is a Supabase Realtime implementation that listens for INSERT/UPDATE events on the match table. When a scorer enters data, the change is broadcasted globally in less than 100ms.",
      "The frontend is built with React, using specialized hooks to handle the incoming stream and trigger smooth number transitions. It's a production-level architecture designed to handle traffic bursts without dropping a single ball update."
    ],
    highlights: [
      { label: "latency", value: "<100ms" },
      { label: "sync", value: "Real-time" },
      { label: "stack", value: "Supabase" }
    ],
    featured: true,
  },
  {
    slug: "link-hub",
    n: "06",
    tag: "WEB / UTILITY",
    title: "Link Hub Website",
    blurb: "A central directory for all my live projects and social presence. Built for instant access and zero lag.",
    icon: Globe,
    year: "2026",
    role: "Developer · Designer",
    stack: ["Vite", "React", "Tailwind", "Framer Motion"],
    badge: "🔗 Personal Link Infrastructure",
    subBadge: "100 Lighthouse • Instant Load • Scalable",
    websiteUrl: "https://jnyananjan.github.io/links_hub/",
    gallery: [
      { url: "/projects/linkhub-hero.png", caption: "Main Dashboard" },
      { url: "/projects/linkhub-full.png", caption: "Full Directory View" },
      { url: "/projects/linkhub-mobile.png", caption: "Mobile Optimization" },
      { url: "/projects/linkhub-hover.png", caption: "Interaction State" },
    ],
    overview: "A high-performance, dynamic personal link management system designed to consolidate my entire digital ecosystem into a single, high-fidelity entry point.",
    problem: "Sharing multiple project links and social profiles often leads to a disjointed user experience and friction in discovery. I needed a central 'routing layer' that was as fast as it was beautiful.",
    solution: "I built a unified directory using React and Vite, featuring a modular card-based architecture. The system is optimized for a perfect 100/100 Lighthouse score and utilizes a CMS-like data structure for rapid updates.",
    challenge: "Achieving an instant 'perceived' load time while maintaining a rich aesthetic was the primary engineering hurdle. I utilized static optimization and lightweight glassmorphism to ensure the UI remains fluid on all devices.",
    management: "I implemented a decoupled data layer that acts as a simple CMS. This allows me to update links, descriptions, and icons in a central JSON file, which the UI consumes to generate cards dynamically.",
    experience: "Designed for rapid navigation, the hub features high-speed micro-interactions and a thumb-friendly mobile layout. Every element is refined for one-handed use, ensuring launch-ready accessibility.",
    story: [
      "As my portfolio grew, I realized I needed more than just a link tree; I needed a personal infrastructure. Link Hub acts as the central brain of my digital presence, connecting hardware prototypes, software apps, and social identities.",
      "The tech stack (React + Vite + Tailwind) ensures that the hub is future-proof and scalable. It's a minimalist product that prioritizes the user's intent: finding the right project, right now, with zero friction."
    ],
    highlights: [
      { label: "perf", value: "100/100" },
      { label: "load", value: "Instant" },
      { label: "stack", value: "Vite" }
    ],
    featured: true,
  },
];

export const getProject = (slug: string) => PROJECTS.find((p) => p.slug === slug);
