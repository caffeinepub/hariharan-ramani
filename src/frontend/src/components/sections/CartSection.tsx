import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CartItem } from '@/hooks/useCart';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';

interface CartSectionProps {
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveFromCart: (productId: string) => void;
  subtotal: number;
}

export function CartSection({
  cartItems,
  onUpdateQuantity,
  onRemoveFromCart,
  subtotal,
}: CartSectionProps) {
  return (
    <section id="cart" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 text-center">
            Shopping Cart
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Review your items and proceed to checkout
          </p>

          {cartItems.length === 0 ? (
            <Card className="text-center py-12">
              <CardContent className="space-y-4">
                <ShoppingBag className="h-16 w-16 mx-auto text-muted-foreground" />
                <p className="text-xl text-muted-foreground">Your cart is empty</p>
                <p className="text-sm text-muted-foreground">
                  Add some products to get started
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-6">
              {/* Cart Items */}
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <Card key={item.id}>
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-24 h-24 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            {item.description}
                          </p>
                          <p className="text-lg font-bold text-primary">
                            ₹{item.price.toLocaleString('en-IN')}
                          </p>
                        </div>
                        <div className="flex flex-col items-end justify-between">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => onRemoveFromCart(item.id)}
                            className="text-destructive hover:text-destructive"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() =>
                                onUpdateQuantity(item.id, item.quantity - 1)
                              }
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="w-12 text-center font-semibold">
                              {item.quantity}
                            </span>
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() =>
                                onUpdateQuantity(item.id, item.quantity + 1)
                              }
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Cart Summary */}
              <Card className="bg-muted/50">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between text-lg">
                    <span>Subtotal:</span>
                    <span className="font-semibold">
                      ₹{subtotal.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Shipping:</span>
                    <span>Calculated at checkout</span>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-3">
                  <div className="w-full flex justify-between text-xl font-bold border-t pt-4">
                    <span>Total:</span>
                    <span className="text-primary">
                      ₹{subtotal.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <Button size="lg" className="w-full" disabled>
                    Checkout (Coming Soon)
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    Payment integration will be available soon
                  </p>
                </CardFooter>
              </Card>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
