import { Bot, Globe, GraduationCap, Keyboard, type LucideIcon } from "lucide-react";

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
  story: string[];
  highlights: { label: string; value: string }[];
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
    year: "2024 — present",
    role: "Founder · Hardware · Firmware",
    stack: ["KiCad", "QMK", "Embedded C", "USB HID", "3D Printing"],
    story: [
      "TechyPad started as a frustration: too many keyboard shortcuts, too little muscle memory. I designed a compact, programmable macropad that lets creators map any combo, macro, or media action to a satisfying mechanical key.",
      "From schematic to PCB to firmware to packaging — every layer is mine. Each unit ships with a web-based configurator so users can remap on the fly, no software install required.",
      "It's not just a product. It's the proof that a student in a dorm room can take a hardware idea from KiCad sketch to paying customer.",
    ],
    highlights: [
      { label: "stage", value: "Shipping" },
      { label: "iterations", value: "v3.2" },
      { label: "keys", value: "Fully remap" },
    ],
  },
  {
    slug: "line-following-robot",
    n: "02",
    tag: "ROBOTICS",
    title: "Line-Following Robot",
    blurb:
      "Sensors, motors, and tight feedback loops. Built from scratch — the project that proved circuits could carry intent.",
    icon: Bot,
    year: "2023",
    role: "Builder · Firmware · Tuning",
    stack: ["Arduino", "IR Sensors", "L298N Driver", "PID Control", "C++"],
    story: [
      "My first real hardware project. Five IR sensors reading reflectance, a PID loop translating that into differential motor speeds, and a chassis I cut and screwed together myself.",
      "The hard part wasn't the wiring — it was the tuning. Hours spent watching the bot oscillate, adjusting Kp/Ki/Kd until it carved curves like it knew where it was going.",
      "This was the project that made everything click. Code could move metal. From here, every idea felt buildable.",
    ],
    highlights: [
      { label: "sensors", value: "5x IR" },
      { label: "control", value: "PID Loop" },
      { label: "result", value: "Smooth tracking" },
    ],
  },
  {
    slug: "ai-sites",
    n: "03",
    tag: "WEB / AI-AUGMENTED",
    title: "Two Concept Sites",
    blurb:
      "My ideas, my direction — built fast with AI as the collaborator. Proof that taste and intent matter more than the keyboard.",
    icon: Globe,
    year: "2024",
    role: "Concept · Design Direction · Prompting",
    stack: ["React", "Tailwind", "AI Pair-Programming", "Vercel"],
    story: [
      "Two web projects where I owned the idea, the design intent, and the product decisions — and used AI as a relentless collaborator to ship them at speed.",
      "It taught me something important: the bottleneck in modern building isn't typing speed, it's clarity of intent. Knowing exactly what to build, and why, is the moat.",
      "Both sites went from blank canvas to live in days, not months.",
    ],
    highlights: [
      { label: "shipped", value: "2 sites" },
      { label: "method", value: "AI-augmented" },
      { label: "ownership", value: "100% mine" },
    ],
  },
  {
    slug: "education",
    n: "04",
    tag: "EDUCATION",
    title: "BTech CSE — AI/ML",
    blurb:
      "Currently studying. Neural nets, systems, algorithms — the theory beneath the things I solder and ship.",
    icon: GraduationCap,
    year: "Ongoing",
    role: "Student · Researcher · Tinkerer",
    stack: ["Python", "PyTorch", "TensorFlow", "Numpy", "Linux"],
    story: [
      "BTech in Computer Science with a specialisation in AI and Machine Learning. Coursework covers everything from data structures and operating systems to deep learning and computer vision.",
      "What I love most is the overlap — applying ML to the hardware I'm already building. Gesture detection on the macropad. Vision experiments on the robot. The two worlds keep feeding each other.",
      "Still very much learning, still very much building.",
    ],
    highlights: [
      { label: "degree", value: "BTech CSE" },
      { label: "track", value: "AI / ML" },
      { label: "mode", value: "Build + study" },
    ],
  },
];

export const getProject = (slug: string) => PROJECTS.find((p) => p.slug === slug);
