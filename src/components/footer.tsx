
import Link from 'next/link';
import { Rocket } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full border-t bg-card py-12 mt-12">
      <div className="container px-4 mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2 font-headline text-xl font-bold text-primary">
            <Rocket className="h-5 w-5" />
            <span>CareerPath</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            Empowering students to find their true calling through data and AI-guided discovery.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Platform</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/explore">Explore Careers</Link></li>
            <li><Link href="/compare">Compare Tools</Link></li>
            <li><Link href="/quiz">Career Quiz</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="#">Study Guides</Link></li>
            <li><Link href="#">Exam Tips</Link></li>
            <li><Link href="#">Scholarships</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="#">Privacy Policy</Link></li>
            <li><Link href="#">Terms of Use</Link></li>
          </ul>
        </div>
      </div>
      <div className="container px-4 mx-auto mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} CareerPath. Built for the future.
      </div>
    </footer>
  );
}
