import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

const BOOT_LINES = [
  "> initializing builder.exe",
  "> loading modules: hardware, software, ai/ml",
  "> compiling 4 years of curiosity...",
  "> system ready ▮",
];

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [shown, setShown] = useState<string[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    let timers: NodeJS.Timeout[] = [];
    
    BOOT_LINES.forEach((line, i) => {
      const timer = setTimeout(() => {
        setShown((s) => [...s, line]);
        if (i === BOOT_LINES.length - 1) {
          const finalTimer = setTimeout(() => {
            setIsFinished(true);
            setTimeout(onComplete, 800);
          }, 1000);
          timers.push(finalTimer);
        }
      }, i * 600);
      timers.push(timer);
    });

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[999999] bg-background flex items-center justify-center p-6 overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
          
          <div className="relative w-full max-w-md">
            <div className="relative border border-acid/30 bg-background/70 backdrop-blur-xl p-8 scanline overflow-hidden shadow-[0_0_50px_rgba(180,255,0,0.1)]">
              <div className="flex items-center justify-between font-mono text-[10px] text-muted-foreground mb-6 uppercase tracking-widest">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3 h-3 text-acid" />
                  <span>system_boot_sequence</span>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-acid/20" />
                  <div className="w-2 h-2 rounded-full bg-acid/40" />
                  <div className="w-2 h-2 rounded-full bg-acid animate-pulse" />
                </div>
              </div>

              <div className="font-mono text-xs sm:text-sm text-acid/90 space-y-3">
                {shown.map((l, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -10 }} 
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {l}
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 h-1 bg-acid/10 relative overflow-hidden">
                <motion.div 
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: BOOT_LINES.length * 0.6 + 1, ease: "linear" }}
                  className="absolute inset-y-0 left-0 bg-acid shadow-[0_0_10px_rgba(180,255,0,0.5)]"
                />
              </div>

              {/* Animated Corner Brackets */}
              <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-acid/40 m-2" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-acid/40 m-2" />
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              className="mt-6 text-center font-mono text-[9px] text-muted-foreground uppercase tracking-[0.4em]"
            >
              initializing_neural_matrix...
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
