
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Rocket, Search, Info, BarChart3, HelpCircle } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '/', icon: Rocket },
  { name: 'Explore', href: '/explore', icon: Search },
  { name: 'Compare', href: '/compare', icon: BarChart3 },
  { name: 'Quiz', href: '/quiz', icon: HelpCircle },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 mx-auto">
        <Link href="/" className="flex items-center gap-2 font-headline text-2xl font-bold text-primary">
          <Rocket className="h-6 w-6" />
          <span>CareerPath</span>
        </Link>
        <div className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href ? "text-primary" : "text-muted-foreground"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <Link href="/quiz" className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
            Take Quiz
          </Link>
        </div>
      </div>
    </nav>
  );
}
