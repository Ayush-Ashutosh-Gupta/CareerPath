
"use client";

import { Career } from '@/data/careers';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Star } from 'lucide-react';

interface CareerCardProps {
  career: Career;
  onClick?: (career: Career) => void;
}

export function CareerCard({ career, onClick }: CareerCardProps) {
  return (
    <Card 
      className="glass-card group cursor-pointer hover:border-primary/50 transition-all duration-500 rounded-[2rem]"
      onClick={() => onClick?.(career)}
    >
      <CardHeader className="p-6">
        <div className="flex justify-between items-start mb-6">
          <div className="text-5xl p-4 bg-primary/10 rounded-[1.5rem] shadow-inner group-hover:scale-110 transition-transform duration-500">
            {career.emoji}
          </div>
          <Badge variant="secondary" className="bg-primary/10 text-primary border-none text-[10px] uppercase tracking-widest px-3 py-1">
            {career.category}
          </Badge>
        </div>
        <h3 className="text-2xl font-headline font-bold group-hover:text-primary transition-colors">
          {career.title}
        </h3>
      </CardHeader>
      <CardContent className="px-6 pb-6">
        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
          {career.tagline}
        </p>
      </CardContent>
      <CardFooter className="px-6 pb-8 pt-0 flex justify-between items-center">
        <div className="flex items-center gap-1.5 text-xs font-bold text-primary">
           <Star className="h-3 w-3 fill-primary" />
           {career.marketDemand} Demand
        </div>
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
          <ArrowRight className="h-5 w-5" />
        </div>
      </CardFooter>
    </Card>
  );
}
