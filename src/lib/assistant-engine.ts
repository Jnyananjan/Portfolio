import gsap from 'gsap';

type AssistantMode = 'HUD' | 'WORLD';

class AssistantEngine {
  private bot: HTMLElement | null = null;
  private bubble: HTMLElement | null = null;
  private anim: any = null;
  private isBusy: boolean = false;
  private currentAnim: string = 'idle_hud';
  private lastTalkTime: number = 0;
  private userInteracted: boolean = false;
  public tourActive: boolean = false;
  public mode: AssistantMode = 'HUD';

  private ANIMATIONS: Record<string, string> = {
    idle_hud: "idle_hud.json",
    idle_world: "idle_world.json",
    react: "react.json",
    exit_hud: "exit_hud.json",
    enter_hud: "enter_hud.json",
    walk: "walk.json",
    fly_takeoff: "fly_takeoff.json",
    fly_loop: "fly_loop.json",
    fly_land: "fly_land.json",
    point: "point.json",
    highlight: "highlight.json",
    jump: "jump.json"
  };

  constructor() { }

  private async init() {
    if (typeof window === 'undefined') return;

    try {
      const { ScrollToPlugin } = await import('gsap/ScrollToPlugin');
      gsap.registerPlugin(ScrollToPlugin);

      this.bot = document.getElementById('assistant-bot');
      this.bubble = document.getElementById('bot-bubble');
      this.anim = document.getElementById('botAnim');

      console.log("Assistant Engine Initialized", { bot: !!this.bot, anim: !!this.anim });

      if (this.bot && this.mode === 'HUD') {
        gsap.set(this.bot, {
          x: 55,
          y: window.innerHeight - 135,
          scale: 0.8,
          rotation: 0
        });
      }

      this.setupGlobalListeners();
    } catch (e) {
      console.error("Assistant init failed:", e);
    }
  }

  private setupGlobalListeners() {
    if (typeof document === 'undefined') return;
    document.addEventListener('mousedown', () => {
      this.userInteracted = true;
      if (this.tourActive) this.tourActive = false;
    });
  }

  private async ensureReady() {
    if (typeof window === 'undefined') return false;
    if (!this.bot || !this.anim) {
      await this.init();
    }
    // Final check for DOM elements
    this.bot = document.getElementById('assistant-bot');
    this.anim = document.getElementById('botAnim');
    return !!(this.bot && this.anim);
  }

  /**
   * High-res animation switcher
   */
  async setAnimation(name: string) {
    if (!(await this.ensureReady())) return;
    if (!this.anim || this.currentAnim === name) return;

    console.log(`Switching Animation: ${this.currentAnim} -> ${name}`);
    this.currentAnim = name;

    const file = this.ANIMATIONS[name] || "man.json";
    const path = `/animations/${file}`;

    // Use the component's internal methods if available, otherwise fallback to attribute
    try {
      if (this.anim.load) {
        this.anim.load(path);
      } else {
        this.anim.setAttribute('src', path);
      }

      // Force play after a tiny delay to ensure load started
      setTimeout(() => {
        if (this.anim && this.anim.play) this.anim.play();
      }, 50);
    } catch (err) {
      console.error("Failed to load animation:", name, err);
    }
  }

  wait(ms: number) {
    return new Promise(r => setTimeout(r, ms));
  }

  async exitHUD() {
    if (!(await this.ensureReady())) return;
    if (this.mode === 'WORLD') return;
    this.isBusy = true;

    console.log("Exiting HUD...");
    await this.setAnimation('react');
    await this.wait(600);

    await this.setAnimation('exit_hud');
    await gsap.to(this.bot, {
      y: window.innerHeight - 250,
      scale: 1,
      duration: 0.8,
      ease: "power2.out"
    });

    this.mode = 'WORLD';
    await this.setAnimation('idle_world');
    this.isBusy = false;
  }

  async enterHUD() {
    if (!(await this.ensureReady())) return;
    if (this.mode === 'HUD') return;
    this.isBusy = true;

    console.log("Entering HUD...");
    await this.setAnimation('enter_hud');
    await gsap.to(this.bot, {
      x: 55,
      y: window.innerHeight - 135,
      scale: 0.8,
      rotation: 0,
      duration: 1,
      ease: "power2.inOut"
    });

    this.mode = 'HUD';
    await this.setAnimation('idle_hud');
    this.isBusy = false;
  }

  async say(text: string | string[], duration: number = 3000) {
    if (!(await this.ensureReady())) return;
    if (!this.bubble) this.bubble = document.getElementById('bot-bubble');
    if (!this.bubble) return;

    this.lastTalkTime = Date.now();
    const line = Array.isArray(text) ? text[Math.floor(Math.random() * text.length)] : text;
    this.bubble.innerText = line;
    this.bubble.classList.add('visible');

    return new Promise((resolve) => {
      setTimeout(() => {
        this.bubble?.classList.remove('visible');
        setTimeout(resolve, 300);
      }, duration);
    });
  }

  async flyTo(selector: string) {
    if (!(await this.ensureReady())) return;
    const target = document.querySelector(selector);
    if (!this.bot || !target) {
      console.warn("Fly target not found:", selector);
      return;
    }

    console.log("Flying to:", selector);
    const targetRect = target.getBoundingClientRect();
    const botRect = this.bot.getBoundingClientRect();

    await this.setAnimation('fly_takeoff');
    await gsap.to(this.bot, { y: "-=60", duration: 0.4, ease: "power2.out" });
    await this.wait(200);

    await this.setAnimation('fly_loop');

    let scrollY = window.scrollY + targetRect.top - (window.innerHeight / 2) + (targetRect.height / 2);
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    scrollY = Math.min(Math.max(0, scrollY), maxScroll);

    const finalViewportY = (targetRect.top + window.scrollY - scrollY) + (targetRect.height / 2) - 60;
    const finalViewportX = targetRect.left - 130;

    const tl = gsap.timeline();
    tl.to(window, { scrollTo: { y: scrollY, autoKill: false }, duration: 1.5, ease: "power2.inOut" }, 0);
    tl.to(this.bot, {
      x: Math.max(20, finalViewportX),
      y: Math.max(20, Math.min(window.innerHeight - 140, finalViewportY)),
      duration: 1.5,
      ease: "power2.inOut",
      rotation: finalViewportX > botRect.left ? 15 : -15
    }, 0);

    await tl;

    await this.setAnimation('fly_land');
    await gsap.to(this.bot, { rotation: 0, duration: 0.4 });
    await this.wait(400);

    await this.setAnimation('idle_world');
  }

  async interact(selector: string, effect: gsap.TweenVars = { y: -10, duration: 0.2, yoyo: true, repeat: 1 }) {
    const target = document.querySelector(selector);
    if (!target) return;
    await gsap.to(target, { ...effect, ease: "power2.out" });
  }

  async navigateTo(targetSelector: string, message: string | string[]) {
    if (this.isBusy) {
      console.log("Assistant is busy, skipping navigation.");
      return;
    }

    try {
      await this.exitHUD();
      await this.flyTo(targetSelector);
      await this.setAnimation('point');
      await this.interact(targetSelector, { scale: 1.05, duration: 0.3, yoyo: true, repeat: 1 });
      await this.say(message);
      await this.wait(1000);
      await this.enterHUD();
    } catch (err) {
      console.error("Navigation error:", err);
      this.isBusy = false;
      this.mode = 'HUD'; // Reset to safe state
    }
  }

  async startTour() {
    if (this.isBusy) return;
    this.tourActive = true;
    await this.navigateTo('[data-assistant-target="work"]', ["Welcome to the workshop!"]);
    if (!this.tourActive) return;
    await this.navigateTo('[data-assistant-target="toolkit"]', ["My toolkit. A mix of precision and caffeine."]);
    if (!this.tourActive) return;
    await this.navigateTo('[data-assistant-target="contact"]', ["End of the tour!"]);
    this.tourActive = false;
  }
}

let assistantInstance: AssistantEngine | null = null;
export const getAssistant = () => {
  if (typeof window === 'undefined') return null;
  if (!assistantInstance) assistantInstance = new AssistantEngine();
  return assistantInstance;
};
