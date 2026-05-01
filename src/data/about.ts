import { CircuitBoard, Cpu, Globe, Bot, Zap, Terminal, Code, Paintbrush, Layout, Braces, Server, type LucideIcon } from "lucide-react";

export type StackItem = {
  name: string;
  icon: LucideIcon;
};

export type TimelineItem = {
  year: string;
  title: string;
  desc: string;
};

export const STACK: StackItem[] = [
  { name: "HTML", icon: Layout },
  { name: "CSS", icon: Paintbrush },
  { name: "JavaScript", icon: Code },
  { name: "Git", icon: Bot },
  { name: "Embedded C", icon: Braces },
  { name: "Arduino / ESP", icon: Cpu },
  { name: "PCB Design", icon: CircuitBoard },
  { name: "EasyEDA", icon: CircuitBoard },
];

export const TIMELINE: TimelineItem[] = [
  { year: "2026 — now", title: "BTech CSE — AI/ML", desc: "Specializing in neural systems and computer vision while building independent hardware products." },
  { year: "2026", title: "Founder @ TechyPad", desc: "Leading design, firmware, and manufacturing for a professional-grade customisable macropad startup." },
  { year: "2026", title: "Built CPL Pro Portal", desc: "Engineered a real-time cricket scoring and analytics platform with sub-100ms sync latency." },
  { year: "2026", title: "Autonomous Robotics", desc: "Developed a high-speed line-following robot with custom PID control loops and telemetry systems." },
  { year: "2022", title: "Embedded Systems Explorer", desc: "Started the journey with ESP32, ESP8266 microcontrollers, soldering irons, and a lot of burnt components." },
];

export const ABOUT_STACK = STACK;
export const ABOUT_TIMELINE = TIMELINE;
