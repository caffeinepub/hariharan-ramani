import { Button } from '@/components/ui/button';
import { scrollToSection } from './scrollToSection';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(/assets/generated/south-temple-hero.dim_1920x1080.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background/90" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Brand Name */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground tracking-tight">
            South Essentials
          </h1>

          {/* Tagline */}
          <p className="text-2xl md:text-3xl lg:text-4xl font-light text-foreground/90 tracking-wide">
            Your one stop shop for south indian products
          </p>

          {/* CTA */}
          <div className="pt-8">
            <Button
              size="lg"
              onClick={() => scrollToSection('products')}
              className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Shop Products
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-12 animate-bounce">
            <button
              onClick={() => scrollToSection('categories')}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Scroll to content"
            >
              <ArrowDown className="h-6 w-6 mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
