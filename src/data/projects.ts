import { Bot, Globe, Keyboard, Watch, Zap, type LucideIcon } from "lucide-react";

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
  featured?: boolean;
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
    tag: "ROBOTICS",
    title: "Line-Following Robot",
    blurb:
      "Sensors, motors, and tight feedback loops. Built from scratch — the project that proved circuits could carry intent.",
    icon: Bot,
    year: "2026",
    role: "Builder · Firmware · Tuning",
    stack: ["Arduino", "IR Sensors", "L298N Driver", "PID Control", "C++"],
    overview: "A high-speed autonomous robot designed to navigate complex paths using infrared reflectance sensing and real-time processing.",
    problem: "Most entry-level robots are either slow or unstable on sharp curves. Achieving high speed while maintaining accuracy requires a delicate balance of sensor sampling rates and motor response times.",
    solution: "I implemented a PID (Proportional-Integral-Derivative) control loop that allows for smooth, predictive steering. By fine-tuning the constants and optimizing the chassis weight distribution, the bot can handle tight hairpins at high speeds.",
    story: [
      "My first real hardware project. Five IR sensors reading reflectance, a PID loop translating that into differential motor speeds, and a chassis I cut and screwed together myself.",
      "The hard part wasn't the wiring — it was the tuning. Hours spent watching the bot oscillate, adjusting Kp, Ki, and Kd until it carved curves like it knew where it was going.",
      "The robot features a custom motor driver board and an optimized power management system for consistent performance. This project was the foundation of my understanding of embedded systems and real-time control loops."
    ],
    highlights: [
      { label: "sensors", value: "5x IR" },
      { label: "control", value: "PID Loop" },
      { label: "speed", value: "High-RPM" },
    ],
    featured: true,
  },
  {
    slug: "led-watch",
    n: "03",
    tag: "HARDWARE / WEARABLE",
    title: "LED Matrix Watch",
    blurb: "A wrist-mounted light show. Discrete LEDs, custom PCB, and a minimalist time-telling algorithm.",
    icon: Watch,
    year: "2026",
    role: "Designer · PCB Artist · Firmware",
    stack: ["KiCad", "ESP32-C3", "C++", "LiPo Management"],
    overview: "A wearable device featuring a custom-designed 5x7 LED matrix for displaying time, notifications, and animations.",
    problem: "Modern smartwatches are often bulky and prioritize screen real estate over artistic expression. I wanted something that felt like 'jewelry that tells time'.",
    solution: "I used discrete 0603 LEDs on a circular PCB, driven by an ESP32-C3. This allowed for Wi-Fi time syncing while maintaining a raw, industrial aesthetic.",
    story: [
      "I wanted a watch that didn't look like a screen. This uses a 5x7 matrix of discrete 0603 LEDs to scroll time and notifications in a beautiful, low-fi aesthetic.",
      "The PCB is a multi-layer design optimized for a 38mm circular footprint. The challenge was power management: fitting a LiPo battery and a charging circuit into a tiny space while keeping the standby current low enough to last a week."
    ],
    highlights: [
      { label: "leds", value: "35x Discrete" },
      { label: "battery", value: "150mAh" },
      { label: "size", value: "38mm" }
    ],
    featured: true,
  },
  {
    slug: "pizzahut-menu",
    n: "04",
    tag: "WEB / UI-UX",
    title: "Pizza Hut Web Menu",
    blurb: "Redesigning the digital dining experience. Fast, visual, and focused on the perfect slice.",
    icon: Globe,
    year: "2025",
    role: "Frontend Dev · UI Designer",
    stack: ["React", "Framer Motion", "Tailwind CSS", "Vite"],
    overview: "A high-fidelity concept for a modern, fluid digital menu for one of the world's largest pizza chains.",
    problem: "Current digital ordering systems are often utilitarian and lack the visual 'craving' factor that a physical menu provides.",
    solution: "I focused on high-resolution assets, dynamic lighting effects in the UI, and smooth physics-based transitions that make the ordering process feel as satisfying as the meal itself.",
    story: [
      "Digital menus are often clunky and slow. I rebuilt this concept to focus on high-fidelity food imagery and smooth, appetizing animations using Framer Motion.",
      "The interface is designed to be mobile-first, with a focus on ease of customization. Every transition is designed to be fluid and satisfying."
    ],
    highlights: [
      { label: "perf", value: "98/100" },
      { label: "fps", value: "60fps" },
      { label: "tech", value: "React" }
    ],
    featured: true,
  },
  {
    slug: "cricket-score",
    n: "05",
    tag: "WEB / REAL-TIME",
    title: "Cricket Score Display",
    blurb: "Live match analytics and scoring. Built for the heat of the game.",
    icon: Zap,
    year: "2026",
    role: "Lead Developer",
    stack: ["React", "Supabase", "Real-time DB", "Tailwind"],
    overview: "A real-time scoring dashboard designed for local sports tournaments, providing sub-second updates to thousands of viewers.",
    problem: "Maintaining data consistency across thousands of concurrent users during a fast-paced game is technically challenging for traditional databases.",
    solution: "Leveraging Supabase Realtime, I built a system that pushes score updates with sub-100ms latency. I also implemented an edge-cached analytics engine for player stats.",
    story: [
      "Built for local tournaments like CPL, this dashboard provides ball-by-ball updates and live analytics for fans and players. It's designed to handle high-traffic bursts.",
      "The system uses Supabase Realtime to push updates to thousands of users simultaneously. I implemented complex calculations for Strike Rates and Economy Rates that update instantly."
    ],
    highlights: [
      { label: "latency", value: "<100ms" },
      { label: "sync", value: "Real-time" },
      { label: "db", value: "Supabase" }
    ],
    featured: false,
  },
  {
    slug: "link-hub",
    n: "06",
    tag: "WEB / UTILITY",
    title: "Link Hub Website",
    blurb: "A central directory for all my live projects and social presence.",
    icon: Globe,
    year: "2026",
    role: "Developer · Designer",
    stack: ["Vite", "React", "Tailwind", "Framer Motion"],
    overview: "A high-performance landing page that consolidates all my digital touchpoints into a single, cohesive interface.",
    problem: "Sharing multiple project links and social profiles often leads to a disjointed user experience.",
    solution: "I created a unified directory with a perfect 100/100 Lighthouse score, featuring interactive glassmorphism cards and global search functionality.",
    story: [
      "As my portfolio grew, I needed a central hub to manage all my project links. The Link Hub Website is a minimalist, high-performance directory.",
      "It features a clean, responsive layout with interactive cards. I integrated a simple CMS-like system where I can update links without redeploying."
    ],
    highlights: [
      { label: "pagespeed", value: "100/100" },
      { label: "type", value: "Hub" },
      { label: "stack", value: "Vite" }
    ],
    featured: false,
  },
];

export const getProject = (slug: string) => PROJECTS.find((p) => p.slug === slug);
