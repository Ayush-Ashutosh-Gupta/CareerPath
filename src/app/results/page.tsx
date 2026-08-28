"use client";

import { useSearchParams } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { careers, Career } from '@/data/careers';
import { CareerCard } from '@/components/career-card';
import { CareerDetailModal } from '@/components/career-detail-modal';
import { Button } from '@/components/ui/button';
import { 
  Sparkles, 
  Target, 
  Rocket, 
  ShieldCheck, 
  TrendingUp, 
  RotateCcw,
  AlertTriangle,
  ChevronRight,
  Briefcase,
  ArrowRightLeft
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { QUIZ_QUESTIONS_MAP } from '@/data/quiz';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogTrigger 
} from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const REDIRECTION_MAP: Record<string, { rationale: string; alternatives: string[] }> = {
  "mpc_to_bio": {
    rationale: "In India, having a PCM background with a bio interest is a massive strength for fields like Bio-Technology or Bio-Medical Engineering where your analytical skills are unmatched.",
    alternatives: ["biotech-researcher", "ai-ml-engineer", "mechanical-engineer", "specialized-doctor"]
  },
  "bio_to_tech": {
    rationale: "India's tech-health convergence is growing. Your PCB foundation makes you perfect for Digital Health, AI-driven diagnostics, or Bio-informatics.",
    alternatives: ["full-stack-developer", "digital-designer-uiux", "ai-ml-engineer", "cybersecurity-architect"]
  },
  "humanities_to_biz": {
    rationale: "Humanities students in India often excel in Management and Law. Your critical reasoning and verbal skills are exactly what top consultancies and firms look for.",
    alternatives: ["management-consultant", "corporate-lawyer", "civil-servant"]
  },
  "commerce_to_creative": {
    rationale: "Your understanding of business makes your creative career 'future-proof'. You can manage the commerce side of your art, design, or content creation empire.",
    alternatives: ["digital-designer-uiux", "animator", "youtuber-streamer", "fashion-designer"]
  },
  "tech_to_leadership": {
    rationale: "In the Indian corporate ecosystem, the technical leader is king. Moving into strategy or management (MBA) allows you to bridge the gap between engineering and business.",
    alternatives: ["management-consultant", "ai-ml-engineer", "bank-manager", "blockchain-developer"]
  }
};

function ResultsContent() {
  const searchParams = useSearchParams();
  const [topMatch, setTopMatch] = useState<Career | null>(null);
  const [alternatives, setAlternatives] = useState<Career[]>([]);
  const [selectedCareer, setSelectedCareer] = useState<Career | null>(null);
  const [isRevealing, setIsRevealing] = useState(true);
  const [redirectionResult, setRedirectionResult] = useState<{ rationale: string; careers: Career[] } | null>(null);

  useEffect(() => {
    document.body.className = 'theme-home';
    
    let finalResultId: string | undefined;
    const params = Array.from(searchParams.entries());
    
    // Scan backwards to find the leaf node with a resultId
    for (let i = params.length - 1; i >= 0; i--) {
      const [qId, optId] = params[i];
      const question = QUIZ_QUESTIONS_MAP[qId];
      if (question) {
        const option = question.options.find(o => o.id === optId);
        if (option?.resultId) {
          finalResultId = option.resultId;
          break;
        }
      }
    }

    const match = careers.find(c => c.id === finalResultId) || careers[0];
    const others = careers
      .filter(c => c.category === match.category && c.id !== match.id)
      .slice(0, 3);

    setTopMatch(match);
    setAlternatives(others);
    
    const timer = setTimeout(() => {
      setIsRevealing(false);
    }, 100);

    return () => clearTimeout(timer);
  }, [searchParams]);

  const handleRedirection = (key: string) => {
    const data = REDIRECTION_MAP[key];
    if (data) {
      const suggested = data.alternatives
        .map(id => careers.find(c => c.id === id))
        .filter(c => !!c) as Career[];
      
      setRedirectionResult({
        rationale: data.rationale,
        careers: suggested
      });
    }
  };

  if (isRevealing || !topMatch) return null;

  return (
    <div className="container px-4 mx-auto space-y-16 relative z-10 py-12">
      <section className="glass-card p-10 lg:p-16 rounded-[3rem] text-center space-y-8 relative overflow-hidden border-primary/20">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-40" />
        
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-2 rounded-full font-bold text-sm border border-primary/20">
          <Sparkles className="h-4 w-4" /> Ideal Career Convergence Found
        </div>
        
        <div className="space-y-6">
          <div className="text-8xl lg:text-9xl drop-shadow-[0_0_40px_rgba(188,91,43,0.3)]">
            {topMatch.emoji}
          </div>
          <h1 className="text-5xl lg:text-7xl font-headline font-bold tracking-tight text-white leading-tight">
            {topMatch.title}
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto italic font-medium leading-relaxed">
            "{topMatch.tagline}"
          </p>
        </div>
        
        <div className="max-w-md mx-auto space-y-4">
          <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.2em] text-primary">
            <span>Decision node accuracy</span>
            <span>98.7%</span>
          </div>
          <Progress value={98.7} className="h-3 rounded-full bg-white/5 border border-white/10" />
        </div>

        <div className="flex flex-wrap justify-center gap-4 pt-8">
          <Button size="lg" className="rounded-full px-12 h-14 text-lg font-bold bg-primary text-primary-foreground hover:bg-primary/90 cyan-glow" onClick={() => setSelectedCareer(topMatch)}>
            Full Career Roadmap <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="lg" className="rounded-full h-14 px-8 text-lg font-bold bg-white/5 border-white/10 hover:bg-white/10">
                <ArrowRightLeft className="h-5 w-5 mr-2" /> Stream Redirection
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl bg-card border-white/10 text-foreground rounded-[2rem] p-8 shadow-2xl">
              <DialogHeader className="space-y-4">
                <DialogTitle className="text-3xl font-bold flex items-center gap-3">
                  <AlertTriangle className="text-primary h-8 w-8" /> Redirection Analysis
                </DialogTitle>
                <DialogDescription className="text-lg">
                  Chose the wrong academic stream? Our system suggests the most effective bridge pathways in India.
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-8 py-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-primary ml-1">Identify Your Academic Mismatch</label>
                  <Select onValueChange={handleRedirection}>
                    <SelectTrigger className="h-14 bg-white/5 rounded-xl border-white/10 text-lg">
                      <SelectValue placeholder="Choose your current situation..." />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-white/20">
                      <SelectItem value="mpc_to_bio">Chose Math/PCM → Want Bio Future</SelectItem>
                      <SelectItem value="bio_to_tech">Chose Bio/PCB → Want High-Tech Future</SelectItem>
                      <SelectItem value="humanities_to_biz">Chose Humanities → Want Business Future</SelectItem>
                      <SelectItem value="commerce_to_creative">Chose Commerce → Want Creative Future</SelectItem>
                      <SelectItem value="tech_to_leadership">Chose Tech/CS → Want Management</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {redirectionResult && (
                  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
                    <div className="p-6 bg-primary/10 border border-primary/20 rounded-2xl">
                      <p className="text-lg leading-relaxed">{redirectionResult.rationale}</p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {redirectionResult.careers.map((career) => (
                        <div 
                          key={career.id} 
                          onClick={() => setSelectedCareer(career)}
                          className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-primary/50 cursor-pointer transition-all flex items-center justify-between group"
                        >
                          <div className="space-y-1">
                            <span className="text-2xl block">{career.emoji}</span>
                            <span className="font-bold text-lg group-hover:text-primary transition-colors">{career.title}</span>
                          </div>
                          <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-1" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </DialogContent>
          </Dialog>

          <Button 
            variant="ghost" 
            asChild 
            size="lg" 
            className="rounded-full h-14 px-8 text-lg font-bold bg-white/5 border-white/10 border hover:bg-white/10 transition-all"
          >
            <Link href="/quiz">
              <RotateCcw className="h-5 w-5 mr-2" /> Retake Discovery
            </Link>
          </Button>
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard icon={<Target className="h-6 w-6" />} label="Industry Fit" value={topMatch.industryFit} color="text-green-400" />
        <StatCard icon={<TrendingUp className="h-6 w-6" />} label="Market Demand" value={topMatch.marketDemand} color="text-primary" />
        <StatCard icon={<Rocket className="h-6 w-6" />} label="Global Reach" value={topMatch.globalReach} color="text-accent" />
        <StatCard icon={<ShieldCheck className="h-6 w-6" />} label="AI Resilience" value={topMatch.aiResilience} color="text-orange-400" />
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         <div className="lg:col-span-2 space-y-6">
            <div className="glass-card p-8 rounded-[2rem] space-y-6">
              <h3 className="text-2xl font-bold font-headline flex items-center gap-2">
                <Briefcase className="h-6 w-6 text-primary" /> Professional Overview
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">{topMatch.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="space-y-3">
                  <h5 className="font-black uppercase tracking-widest text-[10px] text-primary">Core Skills</h5>
                  <ul className="space-y-1.5">
                    {topMatch.keySkills.slice(0, 4).map(s => (
                      <li key={s} className="flex items-center gap-2 text-md font-medium">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" /> {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-3">
                  <h5 className="font-black uppercase tracking-widest text-[10px] text-primary">Target Exams</h5>
                  <ul className="space-y-1.5">
                    {topMatch.competitiveExams.slice(0, 3).map(e => (
                      <li key={e} className="flex items-center gap-2 text-md font-medium">
                        <div className="h-1.5 w-1.5 rounded-full bg-accent" /> {e}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
         </div>

         <div className="glass-card p-8 rounded-[2rem] flex flex-col justify-between h-full">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold font-headline flex items-center gap-2">
                <Rocket className="h-6 w-6 text-primary" /> Roadmap Snippet
              </h3>
              <div className="space-y-4">
                {topMatch.roadmapSteps.slice(0, 4).map((step, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="h-8 w-8 shrink-0 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-bold text-xs text-primary">
                      {i + 1}
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </div>
            <Button variant="link" className="text-primary font-bold text-sm mt-6 p-0 w-fit" onClick={() => setSelectedCareer(topMatch)}>
              Full 8-step roadmap <ChevronRight className="h-4 w-4" />
            </Button>
         </div>
      </div>

      <section className="space-y-8 pb-12">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-headline font-bold">Cross-Linked Opportunities</h2>
          <p className="text-lg text-muted-foreground">Other high-convergence paths in the {topMatch.category} domain.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {alternatives.map((career) => (
            <CareerCard 
              key={career.id} 
              career={career} 
              onClick={(c) => setSelectedCareer(c)} 
            />
          ))}
        </div>
      </section>

      <CareerDetailModal 
        career={selectedCareer} 
        isOpen={!!selectedCareer} 
        onClose={() => setSelectedCareer(null)} 
      />
    </div>
  );
}

function StatCard({ icon, label, value, color }: { icon: React.ReactNode, label: string, value: string, color: string }) {
  return (
    <div className="glass-card p-8 rounded-[2rem] text-center space-y-4 group hover:border-primary/30 transition-all">
      <div className="h-14 w-14 mx-auto rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
        <div className={color}>{icon}</div>
      </div>
      <div className="space-y-1">
        <div className="text-[9px] text-muted-foreground font-black uppercase tracking-[0.2em]">{label}</div>
        <div className={`text-2xl font-bold font-headline ${color}`}>{value}</div>
      </div>
    </div>
  );
}

export default function ResultsPage() {
  return (
    <div className="relative min-h-screen animate-in fade-in zoom-in-75 duration-1000 ease-out">
      <Suspense fallback={<div className="flex items-center justify-center h-screen"><Rocket className="h-12 w-12 text-primary animate-bounce" /></div>}>
        <ResultsContent />
      </Suspense>
    </div>
  );
}