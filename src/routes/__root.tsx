import * as React from "react";
import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { ChatBot } from "@/components/chat/ChatBot";
import { Terminal, Code, MessageSquare } from "lucide-react";
import { getAssistant } from "@/lib/assistant-engine";
import "@/styles.css";

// --- Safe Wrapper for Client-Only Features ---
function ClientOnly({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return <>{children}</>;
}

// --- Simple Error Boundary Fallback ---
class SafeComponent extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(error: any, info: any) { console.error("HUD/Assistant Error:", error, info); }
  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

export const Route = createRootRoute({
  head: () => (
    <>
      <HeadContent />
    </>
  ),
  component: RootComponent,
});

function AssistantHUD() {
  React.useEffect(() => {
    // Inject Lottie Player script if not present
    if (!document.getElementById("lottie-player-script")) {
      const script = document.createElement("script");
      script.id = "lottie-player-script";
      script.src = "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js";
      document.body.appendChild(script);
    }

    // Initialize Assistant Position
    const assistant = getAssistant();
    if (assistant) {
      assistant.setAnimation('idle_hud');
    }
  }, []);

  const handleNav = (target: string, msg: string) => {
    const assistant = getAssistant();
    if (assistant) {
      assistant.navigateTo(`[data-assistant-target="${target}"]`, msg);
    }
  };

  return (
    <>
      <style>{`
        #assistant-bot {
          position: fixed;
          top: 0;
          left: 0;
          width: 140px;
          height: 140px;
          z-index: 1000001;
          pointer-events: none;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 1;
        }
        #bot-bubble {
          position: absolute;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%) translateY(10px);
          background: rgba(15, 23, 42, 0.95);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 12px 18px;
          border-radius: 16px;
          color: white;
          font-size: 13px;
          font-family: 'Space Grotesk', sans-serif;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
          z-index: 1000002;
        }
        #bot-bubble.visible {
          opacity: 1;
          transform: translateX(-50%) translateY(-15px);
        }
        #botAnim {
          width: 120px;
          height: 120px;
          display: block;
        }
        .hud-panel {
          position: fixed;
          bottom: 40px;
          left: 40px;
          z-index: 1000000;
          display: flex;
          align-items: center;
          background: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 6px;
          padding-left: 110px;
          padding-right: 16px;
          border-radius: 80px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }
        .hud-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 40px;
          color: rgba(255, 255, 255, 0.5);
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }
        .hud-btn:hover {
          background: rgba(191, 255, 0, 0.1);
          color: #bfff00;
          border-color: rgba(191, 255, 0, 0.3);
        }
        .hud-label {
          position: absolute;
          top: -20px;
          left: 120px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 8px;
          color: rgba(191, 255, 0, 0.6);
          text-transform: uppercase;
          letter-spacing: 0.3em;
        }
      `}</style>

      <div id="assistant-bot">
        <div id="bot-bubble">Hey there!</div>
        {React.createElement('lottie-player', {
          id: "botAnim",
          src: "/animations/idle_hud.json",
          background: "transparent",
          speed: "1",
          loop: true,
          autoplay: true,
          style: { width: '120px', height: '120px', display: 'block' }
        })}
      </div>

      <div className="hud-panel">
        <span className="hud-label">system_active</span>
        <div className="flex items-center gap-1">
          <button className="hud-btn" onClick={() => handleNav('work', "Check out my latest projects!")}>
            <Terminal size={14} /> Work
          </button>
          <button className="hud-btn" onClick={() => handleNav('toolkit', "My toolkit and technical stack.")}>
            <Code size={14} /> Tools
          </button>
          <button className="hud-btn" onClick={() => handleNav('contact', "Let's connect and build something!")}>
            <MessageSquare size={14} /> Contact
          </button>
        </div>
      </div>
    </>
  );
}

function RootComponent() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-acid selection:text-background">
      <SiteNav />
      <Outlet />
      
      <ClientOnly>
        <SafeComponent>
          <AssistantHUD />
        </SafeComponent>
        <SafeComponent>
          <ChatBot />
        </SafeComponent>
      </ClientOnly>

      <Scripts />
    </div>
  );
}
