import { Card, CardContent } from '@/components/ui/card';
import { categories } from '@/content/storefrontData';

export function FeaturedCategoriesSection() {
  return (
    <section id="categories" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 text-center">
            Featured Categories
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Discover authentic South Indian products across our curated collections
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {categories.map((category) => (
              <Card
                key={category.id}
                className="overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                      {category.name}
                    </h3>
                    <p className="text-foreground/80">{category.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
