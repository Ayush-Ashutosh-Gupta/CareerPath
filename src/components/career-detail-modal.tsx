
"use client";

import { Career } from '@/data/careers';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle2, Trophy, DollarSign, Globe, Map } from 'lucide-react';

interface CareerDetailModalProps {
  career: Career | null;
  isOpen: boolean;
  onClose: () => void;
}

export function CareerDetailModal({ career, isOpen, onClose }: CareerDetailModalProps) {
  if (!career) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="text-5xl bg-secondary p-4 rounded-3xl">{career.emoji}</div>
            <div className="space-y-1">
              <DialogTitle className="text-3xl font-headline font-bold">{career.title}</DialogTitle>
              <div className="flex gap-2">
                <Badge className="bg-primary">{career.category}</Badge>
                <Badge variant="outline">{career.salaryRanges.entryLevel} Entry</Badge>
              </div>
            </div>
          </div>
          <DialogDescription className="text-lg font-medium text-foreground">
            {career.tagline}
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="about" className="mt-6">
          <TabsList className="grid grid-cols-4 w-full bg-secondary/50 rounded-xl">
            <TabsTrigger value="about">Overview</TabsTrigger>
            <TabsTrigger value="skills">Skills & Exams</TabsTrigger>
            <TabsTrigger value="roadmap">Roadmap</TabsTrigger>
            <TabsTrigger value="market">Market Info</TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="space-y-6 pt-4">
            <div className="space-y-3">
              <h4 className="text-xl font-bold flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" /> About this Career
              </h4>
              <p className="text-muted-foreground leading-relaxed">{career.description}</p>
            </div>
            <div className="space-y-3">
              <h4 className="text-xl font-bold">What you'll do daily</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {career.dayToDayActivities.map((activity, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground bg-secondary/30 p-3 rounded-lg">
                    <div className="h-2 w-2 rounded-full bg-primary mt-1.5 shrink-0" />
                    {activity}
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="skills" className="space-y-6 pt-4">
            <div className="space-y-3">
              <h4 className="text-xl font-bold flex items-center gap-2">
                <Trophy className="h-5 w-5 text-primary" /> Key Skills Required
              </h4>
              <div className="flex flex-wrap gap-2">
                {career.keySkills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1">{skill}</Badge>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="text-xl font-bold">Competitive Exams</h4>
              <div className="grid grid-cols-1 gap-2">
                {career.competitiveExams.map((exam) => (
                  <div key={exam} className="bg-card border p-4 rounded-xl flex justify-between items-center shadow-sm">
                    <span className="font-bold">{exam}</span>
                    <Badge variant="outline" className="text-primary border-primary">Recommended</Badge>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="roadmap" className="space-y-6 pt-4">
            <h4 className="text-xl font-bold flex items-center gap-2">
              <Map className="h-5 w-5 text-primary" /> 8-Step Path to Success
            </h4>
            <div className="relative space-y-6 pl-10 before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-[2px] before:bg-primary/20">
              {career.roadmapSteps.map((step, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[30px] top-1 h-10 w-10 rounded-full bg-background border-2 border-primary flex items-center justify-center font-bold text-primary z-10 shadow-sm">
                    {i + 1}
                  </div>
                  <div className="bg-card p-4 rounded-xl border shadow-sm">
                    <p className="font-medium text-sm leading-relaxed">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="market" className="space-y-6 pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-primary/5 p-6 rounded-2xl border border-primary/20 space-y-4">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Salary Expectations</h4>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Entry Level</span>
                      <span className="font-bold">{career.salaryRanges.entryLevel}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Senior Level</span>
                      <span className="font-bold">{career.salaryRanges.seniorLevel}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-accent/5 p-6 rounded-2xl border border-accent/20 space-y-4">
                <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Globe className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Global Opportunities</h4>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                    {career.globalOpportunities}
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
