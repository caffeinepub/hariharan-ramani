import { Hero } from './components/Hero';
import { TopNav } from './components/TopNav';
import { FeaturedCategoriesSection } from './components/sections/FeaturedCategoriesSection';
import { ProductsSection } from './components/sections/ProductsSection';
import { CartSection } from './components/sections/CartSection';
import { ContactSection } from './components/sections/ContactSection';
import { Layout } from './components/Layout';
import { useCart } from './hooks/useCart';

function App() {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    getSubtotal,
    getItemCount,
  } = useCart();

  return (
    <div className="min-h-screen">
      <TopNav cartItemCount={getItemCount()} />
      <Layout>
        <Hero />
        <FeaturedCategoriesSection />
        <ProductsSection onAddToCart={addToCart} />
        <CartSection
          cartItems={cartItems}
          onUpdateQuantity={updateQuantity}
          onRemoveFromCart={removeFromCart}
          subtotal={getSubtotal()}
        />
        <ContactSection />
      </Layout>
      <footer className="border-t border-border bg-muted/30 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>
            © 2026. Built with <span className="text-primary">♥</span> using{' '}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
