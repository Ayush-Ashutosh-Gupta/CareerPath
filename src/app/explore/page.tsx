"use client";

import { useState, useMemo, useEffect } from 'react';
import { careers, CATEGORIES, Career } from '@/data/careers';
import { CareerCard } from '@/components/career-card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, FilterX } from 'lucide-react';
import { CareerDetailModal } from '@/components/career-detail-modal';
import { Button } from '@/components/ui/button';

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedCareer, setSelectedCareer] = useState<Career | null>(null);

  useEffect(() => {
    document.body.className = 'theme-explore';
  }, []);

  const filteredCareers = useMemo(() => {
    return careers.filter(career => {
      const matchesSearch = 
        career.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        career.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        career.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        career.keySkills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = activeCategory === 'All' || career.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="container px-4 mx-auto py-12 min-h-screen">
      <div className="flex flex-col gap-12">
        <div className="space-y-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-headline font-bold text-primary">The Career Universe</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Deep dive into our comprehensive database of {careers.length}+ specialized career paths.
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="sticky top-[4.5rem] z-40 space-y-6">
          <div className="bg-card/90 backdrop-blur-xl p-4 rounded-[2rem] border shadow-lg flex flex-col lg:flex-row gap-4 items-center border-primary/20">
            <div className="relative w-full lg:max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder="Search by title, skills, keywords..." 
                className="pl-12 h-14 rounded-2xl bg-secondary/30 border-none text-lg focus-visible:ring-primary/30"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex-1 w-full overflow-hidden">
              <Tabs 
                defaultValue="All" 
                className="w-full"
                onValueChange={setActiveCategory}
              >
                <TabsList className="flex h-14 p-1.5 bg-secondary/30 rounded-2xl overflow-x-auto scrollbar-hide w-full justify-start">
                  {CATEGORIES.map(category => (
                    <TabsTrigger 
                      key={category} 
                      value={category}
                      className="rounded-xl px-6 py-2 text-sm font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all shrink-0"
                    >
                      {category}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
          </div>
          
          <div className="flex justify-between items-center px-4">
            <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest">
              Found {filteredCareers.length} Paths
            </span>
          </div>
        </div>

        {/* Results Grid */}
        {filteredCareers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredCareers.map(career => (
              <CareerCard 
                key={career.id} 
                career={career} 
                onClick={(c) => setSelectedCareer(c)}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-32 text-center space-y-6 bg-card/30 rounded-[3rem] border border-dashed border-primary/20">
            <div className="h-24 w-24 bg-muted rounded-full flex items-center justify-center">
              <FilterX className="h-12 w-12 text-muted-foreground" />
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-bold font-headline">No paths found</h3>
              <p className="text-muted-foreground text-lg">Try adjusting your filters or searching for something broader.</p>
            </div>
            <Button variant="outline" onClick={() => {setSearchQuery(''); setActiveCategory('All');}} className="rounded-full px-8">
              Clear All Filters
            </Button>
          </div>
        )}
      </div>

      <CareerDetailModal 
        career={selectedCareer} 
        isOpen={!!selectedCareer} 
        onClose={() => setSelectedCareer(null)} 
      />
    </div>
  );
}
