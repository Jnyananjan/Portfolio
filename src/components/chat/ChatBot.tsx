import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User, Sparkles, AlertCircle } from "lucide-react";
import { chatWithAI } from "@/server/chatFunctions";
import { cn } from "@/lib/utils";
import { getAssistant } from "@/lib/assistant-engine";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const MAX_MESSAGES = 5;

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [chatCount, setChatCount] = useState(0);
  const [error, setError] = useState<string | null>(null);
  
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedCount = localStorage.getItem("chat_count");
    if (savedCount) {
      setChatCount(parseInt(savedCount, 10));
    }
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const incrementChatCount = () => {
    const newCount = chatCount + 1;
    setChatCount(newCount);
    localStorage.setItem("chat_count", newCount.toString());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    if (chatCount >= MAX_MESSAGES) {
      setError("You've reached the message limit for this session. Let's build something for real—hit the contact page!");
      return;
    }

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    setError(null);

    try {
      // Filter roles to what the server expects (system prompt is added on server)
      const apiMessages = [...messages, userMessage].map(m => ({
        role: m.role,
        content: m.content
      })) as any[];

      const result = await chatWithAI({
        data: { messages: apiMessages }
      });

      if (result && result.message) {
        setMessages((prev) => [...prev, result.message as Message]);
        incrementChatCount();
      }
    } catch (err: any) {
      console.error("Chat error:", err);
      // Try to extract the error message from TanStack Start's error object
      const errorMessage = err.message || "AI is currently offline. Maybe checking out some circuits?";
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100001] font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[90vw] sm:w-[400px] h-[500px] bg-card border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-primary p-4 flex items-center justify-between text-primary-foreground">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center border border-primary-foreground/30">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-sm tracking-tight">Builder.exe AI</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[10px] opacity-80 uppercase tracking-widest font-mono">online</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="hover:bg-primary-foreground/10 p-2 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 bg-background/50 scroll-smooth"
            >
              {messages.length === 0 && (
                <div className="flex flex-col items-center justify-center h-full text-center space-y-4 opacity-60">
                  <Sparkles className="w-8 h-8 text-acid" />
                  <p className="text-sm px-8">
                    Hey! I'm Jnyananjan's AI double. Ask me anything about his work, TechyPad, or just say hi!
                  </p>
                  <button 
                    onClick={() => {
                      setIsOpen(false);
                      const assistant = getAssistant();
                      if (assistant) assistant.startTour();
                    }}
                    className="flex items-center gap-2 px-4 py-2 border border-acid text-acid rounded-full hover:bg-acid hover:text-primary-foreground transition-all text-xs font-mono"
                  >
                    <Bot className="w-3 h-3" />
                    START VIRTUAL TOUR
                  </button>
                </div>
              )}

              {messages.map((msg, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "flex w-full animate-in fade-in slide-in-from-bottom-2 duration-300",
                    msg.role === "user" ? "justify-end" : "justify-start"
                  )}
                >
                  <div className={cn(
                    "max-w-[85%] p-3 rounded-2xl text-sm",
                    msg.role === "user" 
                      ? "bg-primary text-primary-foreground rounded-tr-none" 
                      : "bg-muted text-foreground rounded-tl-none border border-border"
                  )}>
                    {msg.content}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-muted p-3 rounded-2xl rounded-tl-none border border-border flex gap-1">
                    <span className="w-1.5 h-1.5 bg-foreground/30 rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-foreground/30 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 bg-foreground/30 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}

              {error && (
                <div className="flex items-center gap-2 p-3 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive text-xs">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <p>{error}</p>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border bg-card">
              <div className="flex justify-between items-center mb-2 text-[10px] text-muted-foreground uppercase tracking-widest font-mono">
                <span>{chatCount} / {MAX_MESSAGES} messages used</span>
                {chatCount >= MAX_MESSAGES && <span className="text-destructive">Limit reached</span>}
              </div>
              <form onSubmit={handleSubmit} className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={chatCount >= MAX_MESSAGES ? "Limit reached..." : "Ask me something..."}
                  disabled={chatCount >= MAX_MESSAGES || isLoading}
                  className="w-full bg-background border border-border rounded-full py-2.5 pl-4 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading || chatCount >= MAX_MESSAGES}
                  className="absolute right-1 top-1 bottom-1 w-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300",
          isOpen 
            ? "bg-card border border-border text-foreground" 
            : "bg-primary text-primary-foreground hover:shadow-primary/20"
        )}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
        {!isOpen && chatCount < MAX_MESSAGES && (
          <span className="absolute -top-1 -right-1 flex h-5 w-5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-acid opacity-75"></span>
            <span className="relative inline-flex rounded-full h-5 w-5 bg-acid text-[10px] font-bold text-primary-foreground items-center justify-center">
              !
            </span>
          </span>
        )}
      </motion.button>
    </div>
  );
}
