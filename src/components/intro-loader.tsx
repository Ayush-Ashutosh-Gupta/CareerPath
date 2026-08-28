"use client";

import { useState, useEffect } from 'react';
import { Rocket, Sparkles, BrainCircuit } from 'lucide-react';
import { cn } from '@/lib/utils';

export function IntroLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const [status, setStatus] = useState("Initializing Future...");

  useEffect(() => {
    const statusMessages = [
      "Mapping Industry Verticals...",
      "Calibrating Neural Pathways...",
      "Analyzing Global Job Markets...",
      "Ready to Discovery."
    ];
    
    let i = 0;
    const interval = setInterval(() => {
      if (i < statusMessages.length) {
        setStatus(statusMessages[i]);
        i++;
      }
    }, 600);

    const timer = setTimeout(() => {
      setIsFading(true);
      setTimeout(() => setIsVisible(false), 800);
    }, 2800);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className={cn(
      "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#020617] transition-all duration-1000 ease-in-out",
      isFading ? "opacity-0 scale-110 pointer-events-none" : "opacity-100 scale-100"
    )}>
      {/* Background radial effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] opacity-20 animate-pulse" />
      </div>

      <div className="relative space-y-8 flex flex-col items-center">
        <div className="relative">
          <div className="h-24 w-24 rounded-3xl bg-primary/10 border border-primary/20 flex items-center justify-center animate-bounce">
            <Rocket className="h-12 w-12 text-primary" />
          </div>
          <Sparkles className="absolute -top-4 -right-4 h-8 w-8 text-primary animate-pulse" />
          <BrainCircuit className="absolute -bottom-4 -left-4 h-8 w-8 text-accent animate-pulse delay-75" />
        </div>

        <div className="text-center space-y-4">
          <h1 className="text-4xl font-headline font-bold tracking-tighter text-white">
            CareerPath <span className="text-primary">Studio</span>
          </h1>
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-primary/60 min-w-[250px]">
              {status}
            </p>
            <div className="h-1 w-48 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-primary animate-[shimmer_2s_infinite_linear] w-full origin-left scale-x-0 animate-in slide-in-from-left duration-[2500ms]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}