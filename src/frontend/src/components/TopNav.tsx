import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { scrollToSection } from './scrollToSection';
import { Menu, X, ShoppingCart } from 'lucide-react';

interface TopNavProps {
  cartItemCount?: number;
}

export function TopNav({ cartItemCount = 0 }: TopNavProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Categories', id: 'categories' },
    { label: 'Products', id: 'products' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-sm border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo/Brand */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <span className="font-serif text-xl md:text-2xl font-bold text-foreground">
              South Essentials
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Button
                key={link.id}
                variant="ghost"
                onClick={() => handleNavClick(link.id)}
                className="text-foreground/80 hover:text-foreground hover:bg-accent/50"
              >
                {link.label}
              </Button>
            ))}
            <Button
              variant="ghost"
              onClick={() => handleNavClick('cart')}
              className="text-foreground/80 hover:text-foreground hover:bg-accent/50 relative"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
                >
                  {cartItemCount}
                </Badge>
              )}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Button
                  key={link.id}
                  variant="ghost"
                  onClick={() => handleNavClick(link.id)}
                  className="justify-start text-foreground/80 hover:text-foreground hover:bg-accent/50"
                >
                  {link.label}
                </Button>
              ))}
              <Button
                variant="ghost"
                onClick={() => handleNavClick('cart')}
                className="justify-start text-foreground/80 hover:text-foreground hover:bg-accent/50"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Cart
                {cartItemCount > 0 && (
                  <Badge variant="destructive" className="ml-2">
                    {cartItemCount}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
