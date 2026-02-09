import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 text-center">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Have questions about our products? We're here to help you find the perfect South Indian essentials.
          </p>

          <Card className="shadow-lg">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <a
                      href="mailto:support@southessentials.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      support@southessentials.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <a
                      href="tel:+911800123456"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      1800-123-456
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">Location</h3>
                    <p className="text-muted-foreground">South India</p>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-6">
                  <Button
                    size="lg"
                    className="w-full md:w-auto"
                    asChild
                  >
                    <a href="mailto:support@southessentials.com">
                      Send an Email
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
