"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Route, Search, CheckCircle2, ChevronRight, Loader2 } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

export default function Home() {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-student');

  useEffect(() => {
    document.body.className = 'theme-home';
  }, []);

  const handleStartQuiz = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsTransitioning(true);
    
    // Smooth scale-out transition
    setTimeout(() => {
      router.push('/quiz');
    }, 1500);
  };

  return (
    <div className={cn(
      "flex flex-col gap-20 py-10 relative overflow-hidden transition-all duration-1000 ease-in-out",
      isTransitioning ? "scale-90 opacity-0 blur-xl" : "opacity-100"
    )}>
      <section className="container px-4 mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
        <div className="flex-1 space-y-10 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold uppercase tracking-widest animate-pulse">
            <Sparkles className="h-4 w-4" /> Next-Gen Career Discovery
          </div>
          <h1 className="text-6xl lg:text-8xl font-headline font-bold leading-[0.9] tracking-tighter">
            Build Your <br /><span className="text-primary italic">Success</span> Blueprint
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            From Grade 9 to a global professional. We provide the most detailed, AI-guided roadmaps for 100+ modern careers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              size="lg" 
              onClick={handleStartQuiz}
              disabled={isTransitioning}
              className="rounded-full px-10 h-16 text-xl font-bold bg-primary text-primary-foreground hover:bg-primary/90 cyan-glow"
            >
              {isTransitioning ? <Loader2 className="h-6 w-6 animate-spin" /> : "Start Discovery Quiz"}
            </Button>
            <Button variant="outline" asChild size="lg" className="rounded-full px-10 h-16 text-xl font-bold glass-card hover:bg-white/5">
              <Link href="/explore" className="flex items-center gap-2">Explore Paths <ChevronRight className="h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
        <div className="flex-1 relative aspect-[4/5] w-full max-w-md mx-auto group">
          <div className="absolute -inset-10 bg-primary/20 rounded-full blur-[100px] opacity-30 group-hover:opacity-50 transition-opacity" />
          {heroImage && (
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                width={600}
                height={750}
                className="object-cover"
                priority
                data-ai-hint={heroImage.imageHint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
            </div>
          )}
        </div>
      </section>

      <section className="container px-4 mx-auto py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <FeatureCard 
            icon={<Route className="h-10 w-10 text-primary" />}
            title="Grade 9+ Roadmaps"
            description="Crucial academic steps starting from school to help you pick the right subjects and streams early."
          />
          <FeatureCard 
            icon={<Search className="h-10 w-10 text-primary" />}
            title="Global Exam Data"
            description="Deep details on competitive exams like JEE, NEET, MCAT, GRE, and professional certifications."
          />
          <FeatureCard 
            icon={<CheckCircle2 className="h-10 w-10 text-primary" />}
            title="Skill Mastery"
            description="Precise technical and soft skills mapped to every career to make you market-ready."
          />
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <Card className="glass-card hover:bg-white/5 transition-all p-6 group">
      <CardHeader>
        <div className="mb-6 bg-primary/10 w-20 h-20 rounded-3xl flex items-center justify-center transition-transform group-hover:scale-110">
          {icon}
        </div>
        <CardTitle className="text-2xl font-bold mb-4">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-lg leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}