"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { QUIZ_QUESTIONS_MAP, QuizOption } from '@/data/quiz';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function QuizPage() {
  const [currentQuestionId, setCurrentQuestionId] = useState<string>("start");
  const [history, setHistory] = useState<string[]>([]);
  const [answers, setAnswers] = useState<Record<string, QuizOption>>({});
  const [isFinishing, setIsFinishing] = useState(false);
  const router = useRouter();

  useEffect(() => {
    document.body.className = 'theme-quiz';
  }, []);

  const currentQuestion = QUIZ_QUESTIONS_MAP[currentQuestionId];
  const progressHeuristic = Math.min(95, ((history.length) / 7) * 100);

  const handleOptionSelect = (option: QuizOption) => {
    setAnswers(prev => ({ ...prev, [currentQuestionId]: option }));
  };

  const nextStep = () => {
    const selectedOption = answers[currentQuestionId];
    if (!selectedOption) return;

    if (selectedOption.nextQuestionId === null) {
      setIsFinishing(true);
      
      const queryParams = new URLSearchParams();
      const finalAnswers = { ...answers, [currentQuestionId]: selectedOption };
      Object.entries(finalAnswers).forEach(([qId, opt]) => {
        queryParams.append(qId, opt.id);
      });
      
      // Smooth zoom transition out
      setTimeout(() => {
        router.push(`/results?${queryParams.toString()}`);
      }, 1000);
    } else {
      setHistory(prev => [...prev, currentQuestionId]);
      setCurrentQuestionId(selectedOption.nextQuestionId!);
    }
  };

  const prevStep = () => {
    if (history.length > 0) {
      const lastId = history[history.length - 1];
      setHistory(prev => prev.slice(0, -1));
      setCurrentQuestionId(lastId);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className={cn(
        "container px-4 mx-auto py-12 max-w-5xl relative z-10 transition-all duration-1000 ease-in-out",
        isFinishing ? "scale-150 opacity-0 blur-3xl" : "opacity-100 scale-100"
      )}>
        <div className="space-y-12">
          <div className="space-y-6 text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/50 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-muted-foreground border border-white/5">
              Adaptive Neural Mapping
            </div>
            <h1 className="text-4xl lg:text-6xl font-headline font-bold drop-shadow-lg text-primary">Career Discovery</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Breaking down traditional barriers.</p>
          </div>

          <div className="space-y-6 bg-card/40 backdrop-blur-md p-4 rounded-3xl border border-white/10 shadow-xl">
            <div className="flex justify-between items-center text-sm font-bold uppercase tracking-widest">
              <span className="text-primary">Step {history.length + 1}</span>
              <span className="text-muted-foreground">{Math.round(progressHeuristic)}% Computed</span>
            </div>
            <Progress value={progressHeuristic} className="h-4 rounded-full bg-secondary/50" />
          </div>

          <div className="bg-card/80 backdrop-blur-xl p-10 lg:p-16 rounded-[3rem] shadow-2xl border border-border/50 min-h-[600px] flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-primary/20 group-hover:bg-primary/40 transition-colors" />
            
            <div className="space-y-12">
              <div className="space-y-4">
                 <h2 className="text-3xl lg:text-4xl font-bold leading-tight font-headline">{currentQuestion.text}</h2>
                 <div className="h-1.5 w-24 bg-primary rounded-full shadow-[0_0_15px_rgba(255,215,0,0.5)]" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentQuestion.options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleOptionSelect(option)}
                    className={cn(
                      "flex items-center justify-between p-8 rounded-[2rem] border-2 text-left transition-all duration-300 group/btn relative overflow-hidden",
                      answers[currentQuestionId]?.id === option.id 
                        ? "border-primary bg-primary/10 text-primary shadow-[0_0_25px_rgba(255,215,0,0.15)] scale-[1.02]" 
                        : "border-transparent bg-secondary/40 hover:bg-secondary/70 hover:border-border/50"
                    )}
                  >
                    <span className="font-bold text-lg lg:text-xl pr-4 leading-snug relative z-10">{option.label}</span>
                    <div className={cn(
                      "h-8 w-8 rounded-full border-2 flex items-center justify-center transition-all shrink-0 relative z-10",
                      answers[currentQuestionId]?.id === option.id 
                        ? "bg-primary border-primary text-white scale-110" 
                        : "border-muted group-hover/btn:border-primary/50"
                    )}>
                      {answers[currentQuestionId]?.id === option.id && <CheckCircle2 className="h-5 w-5" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center mt-16 pt-8 border-t border-border/30">
              <Button 
                variant="ghost" 
                onClick={prevStep} 
                disabled={history.length === 0}
                className="rounded-full h-14 px-8 gap-2 text-lg font-bold hover:bg-white/5"
              >
                <ChevronLeft className="h-5 w-5" /> Previous
              </Button>
              <Button 
                onClick={nextStep} 
                disabled={!answers[currentQuestionId]}
                className="rounded-full h-14 px-12 text-lg font-bold gap-3 bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl transition-all active:scale-95 group"
              >
                {answers[currentQuestionId]?.nextQuestionId === null ? 'Complete Mapping' : 'Next Node'} 
                {answers[currentQuestionId]?.nextQuestionId !== null && <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}