import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { products } from '@/content/storefrontData';
import { ShoppingCart } from 'lucide-react';
import { Product } from '@/content/storefrontData';

interface ProductsSectionProps {
  onAddToCart: (product: Product) => void;
}

export function ProductsSection({ onAddToCart }: ProductsSectionProps) {
  return (
    <section id="products" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 text-center">
            Our Products
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Handpicked selection of authentic South Indian products
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-3 right-3" variant="secondary">
                      {product.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 p-4">
                  <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                  <p className="text-sm text-muted-foreground mb-3">
                    {product.description}
                  </p>
                  <p className="text-2xl font-bold text-primary">
                    ₹{product.price.toLocaleString('en-IN')}
                  </p>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button
                    className="w-full"
                    onClick={() => onAddToCart(product)}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
