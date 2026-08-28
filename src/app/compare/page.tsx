"use client";

import { useState, useEffect } from 'react';
import { careers, Career } from '@/data/careers';
import { Button } from '@/components/ui/button';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Check, X, ArrowRightLeft, Sparkles, Loader2, Trophy, DollarSign, Target } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ComparisonResult {
  career1Insights: { pros: string[], cons: string[] };
  career2Insights: { pros: string[], cons: string[] };
  overallSummary: string;
}

export default function ComparePage() {
  const [career1Id, setCareer1Id] = useState<string>('');
  const [career2Id, setCareer2Id] = useState<string>('');
  const [comparisonResults, setComparisonResults] = useState<ComparisonResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.body.className = 'theme-compare';
  }, []);

  const career1 = careers.find(c => c.id === career1Id);
  const career2 = careers.find(c => c.id === career2Id);

  const handleCompare = () => {
    if (!career1 || !career2) return;
    setIsLoading(true);
    
    // Deterministic Local Comparison Logic
    setTimeout(() => {
      const results: ComparisonResult = {
        career1Insights: {
          pros: [
            `Strong focus on ${career1.keySkills[0]} and ${career1.keySkills[1]}.`,
            `Potential for high senior-level earnings (${career1.salaryRanges.seniorLevel}).`,
            `Unique alignment with ${career1.category} industry growth.`
          ],
          cons: [
            `Requires intensive mastery of ${career1.competitiveExams[0] || 'specialized tools'}.`,
            `Day-to-day may involve more ${career1.dayToDayActivities[0].toLowerCase()} than ${career2.title}.`
          ]
        },
        career2Insights: {
          pros: [
            `Excellent opportunities in ${career2.category}.`,
            `Key mastery of ${career2.keySkills[0]} provides a competitive edge.`,
            `Roadmap includes clear steps like "${career2.roadmapSteps[0]}".`
          ],
          cons: [
            `Entry level salary (${career2.salaryRanges.entryLevel}) might be different compared to ${career1.title}.`,
            `Heavy emphasis on ${career2.keySkills[1]} might be challenging for some.`
          ]
        },
        overallSummary: `${career1.title} is a great choice if you prioritize ${career1.category} and skills like ${career1.keySkills.slice(0, 2).join(', ')}. Meanwhile, ${career2.title} offers a robust path in ${career2.category} with a focus on ${career2.keySkills.slice(0, 2).join(', ')}. Both paths are highly rewarding but cater to different professional temperaments.`
      };
      setComparisonResults(results);
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="container px-4 mx-auto py-12 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-headline font-bold text-primary">Compare Careers</h1>
        <p className="text-muted-foreground">Select two paths to see side-by-side differences and insights.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-11 items-center gap-6">
        <div className="md:col-span-5">
          <Select onValueChange={setCareer1Id}>
            <SelectTrigger className="h-14 rounded-2xl bg-card border-primary/20">
              <SelectValue placeholder="Select first career..." />
            </SelectTrigger>
            <SelectContent>
              {careers.map(c => (
                <SelectItem key={c.id} value={c.id}>{c.emoji} {c.title}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="md:col-span-1 flex justify-center">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
            <ArrowRightLeft className="h-6 w-6 text-primary rotate-90 md:rotate-0" />
          </div>
        </div>

        <div className="md:col-span-5">
          <Select onValueChange={setCareer2Id}>
            <SelectTrigger className="h-14 rounded-2xl bg-card border-primary/20">
              <SelectValue placeholder="Select second career..." />
            </SelectTrigger>
            <SelectContent>
              {careers.map(c => (
                <SelectItem key={c.id} value={c.id}>{c.emoji} {c.title}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex justify-center">
        <Button 
          size="lg" 
          onClick={handleCompare} 
          disabled={!career1Id || !career2Id || isLoading}
          className="rounded-full px-12 h-14 text-lg font-bold gap-2 bg-primary text-primary-foreground"
        >
          {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Target className="h-5 w-5" />}
          Generate Comparison
        </Button>
      </div>

      {career1 && career2 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          <ComparisonInfoCard career={career1} insights={comparisonResults?.career1Insights} />
          <ComparisonInfoCard career={career2} insights={comparisonResults?.career2Insights} />
          
          {comparisonResults && (
            <div className="lg:col-span-2 bg-primary/5 border border-primary/20 p-8 rounded-3xl space-y-4">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-primary" /> Key Findings
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {comparisonResults.overallSummary}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function ComparisonInfoCard({ career, insights }: { career: Career, insights?: { pros: string[], cons: string[] } }) {
  return (
    <div className="bg-card rounded-3xl border border-primary/20 shadow-sm p-8 space-y-8 animate-in fade-in slide-in-from-bottom-4">
      <div className="flex items-center gap-4">
        <div className="text-6xl bg-secondary p-4 rounded-3xl">{career.emoji}</div>
        <div>
          <Badge className="bg-primary mb-1">{career.category}</Badge>
          <h2 className="text-3xl font-headline font-bold">{career.title}</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <h5 className="font-bold flex items-center gap-2 text-sm">
            <Trophy className="h-4 w-4 text-primary" /> Key Skills
          </h5>
          <div className="flex flex-wrap gap-1">
            {career.keySkills.slice(0, 4).map(s => (
              <Badge key={s} variant="secondary" className="text-[10px]">{s}</Badge>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <h5 className="font-bold flex items-center gap-2 text-sm">
            <DollarSign className="h-4 w-4 text-primary" /> Salary Range
          </h5>
          <span className="text-xs font-bold text-primary">{career.salaryRanges.entryLevel}</span>
        </div>
      </div>

      {insights && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-primary/10">
          <div className="space-y-3">
            <h5 className="font-bold text-green-500 flex items-center gap-2 text-sm uppercase tracking-wider">
              <Check className="h-4 w-4" /> Advantages
            </h5>
            <ul className="space-y-2">
              {insights.pros.map((pro, i) => (
                <li key={i} className="text-xs text-muted-foreground leading-relaxed border-l-2 border-green-500/30 pl-3">{pro}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <h5 className="font-bold text-red-500 flex items-center gap-2 text-sm uppercase tracking-wider">
              <X className="h-4 w-4" /> Considerations
            </h5>
            <ul className="space-y-2">
              {insights.cons.map((con, i) => (
                <li key={i} className="text-xs text-muted-foreground leading-relaxed border-l-2 border-red-500/30 pl-3">{con}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
