
'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Ballpit from './ballpit';

export function Hero() {
  return (
    <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
      <Ballpit
        className="absolute inset-0"
        colors={[0xbbe5ff, 0x1f66ff, 0x5a27d1, 0x000000]}
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <h1 className="font-headline text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
          Embark on Your Wonderlight Adventure
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-white/80 md:text-xl">
          Discover exclusive opportunities and premium courses designed for the elite. Your adventure begins here.
        </p>
        <div className="mt-8 flex gap-4">
          <Button asChild size="lg">
            <Link href="/jobs">Find Your Dream Job</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
            <Link href="/courses">Explore Courses</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
