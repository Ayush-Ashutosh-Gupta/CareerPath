import type {Metadata} from 'next';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Toaster } from '@/components/ui/toaster';
import { IntroLoader } from '@/components/intro-loader';
import { 
  Stethoscope, 
  Code, 
  Briefcase, 
  Palette, 
  Scale, 
  Leaf, 
  Trophy, 
  Plane, 
  Cpu, 
  Rocket, 
  ShieldCheck,
  Target,
  FlaskConical,
  Gavel,
  Dna,
  Coins
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'CareerPath | Discover Your Future',
  description: 'AI-guided career discovery for students aged 14-22.',
};

const BackgroundDecorations = () => (
  <div id="floating-decorations" className="fixed inset-0 overflow-hidden pointer-events-none z-0">
    <Code className="floating-icon h-12 w-12 top-[15%] left-[10%]" style={{ animationDelay: '0s', animationDuration: '18s' }} />
    <Stethoscope className="floating-icon h-10 w-10 top-[30%] right-[15%] flash-variant" style={{ animationDelay: '2s', animationDuration: '22s' }} />
    <Rocket className="floating-icon h-14 w-14 top-[65%] left-[8%]" style={{ animationDelay: '4s', animationDuration: '25s' }} />
    <Palette className="floating-icon h-8 w-8 bottom-[12%] right-[18%] flash-variant" style={{ animationDelay: '1.5s', animationDuration: '20s' }} />
    <Cpu className="floating-icon h-16 w-16 top-[45%] left-[85%]" style={{ animationDelay: '3.5s', animationDuration: '30s' }} />
    <Scale className="floating-icon h-12 w-12 bottom-[25%] left-[22%] flash-variant" style={{ animationDelay: '5s', animationDuration: '24s' }} />
    <Leaf className="floating-icon h-10 w-10 top-[75%] right-[30%]" style={{ animationDelay: '0.8s', animationDuration: '19s' }} />
    <Trophy className="floating-icon h-14 w-14 top-[20%] left-[48%] flash-variant" style={{ animationDelay: '3s', animationDuration: '21s' }} />
    <Plane className="floating-icon h-12 w-12 bottom-[35%] left-[65%]" style={{ animationDelay: '4.5s', animationDuration: '28s' }} />
    <Briefcase className="floating-icon h-11 w-11 top-[80%] left-[40%] flash-variant" style={{ animationDelay: '1s', animationDuration: '23s' }} />
    <ShieldCheck className="floating-icon h-12 w-12 top-[10%] right-[40%]" style={{ animationDelay: '6s', animationDuration: '26s' }} />
    <Target className="floating-icon h-10 w-10 bottom-[5%] left-[5%] flash-variant" style={{ animationDelay: '2.5s', animationDuration: '17s' }} />
    <FlaskConical className="floating-icon h-9 w-9 top-[50%] left-[20%]" style={{ animationDelay: '7s', animationDuration: '24s' }} />
    <Gavel className="floating-icon h-10 w-10 top-[10%] left-[75%] flash-variant" style={{ animationDelay: '1.2s', animationDuration: '21s' }} />
    <Dna className="floating-icon h-14 w-14 bottom-[15%] left-[50%]" style={{ animationDelay: '4.8s', animationDuration: '29s' }} />
    <Coins className="floating-icon h-11 w-11 bottom-[45%] right-[10%] flash-variant" style={{ animationDelay: '5.2s', animationDuration: '26s' }} />
  </div>
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased min-h-screen flex flex-col relative overflow-x-hidden">
        <IntroLoader />
        <BackgroundDecorations />
        <Navbar />
        <main className="flex-grow relative z-10">
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}