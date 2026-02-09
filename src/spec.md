# Specification

## Summary
**Goal:** Convert the existing portfolio homepage into a single-page “South Essentials” ecommerce storefront with the tagline “your one stop shop for south indian products”, including static browsing and a client-side cart.

**Planned changes:**
- Replace portfolio branding and writer-focused homepage sections with storefront-style content using “South Essentials” and the tagline exactly as provided (nav brand text, hero text, primary CTA).
- Add single-page ecommerce sections: Featured Categories (temples, silk sarees, South Indian snacks, traditional South Indian dance forms), Products (static frontend data with name/price/image/category), and a client-side cart with subtotal plus a “Checkout (Coming Soon)” placeholder.
- Update top navigation links to scroll to the new storefront sections.
- Add themed default images for the four requested category themes (stored in `frontend/public/assets/generated`) and reference them in the UI.
- Update `frontend/index.html` SEO/share metadata (title, description, Open Graph, Twitter) to reflect “South Essentials” and include the tagline.

**User-visible outcome:** Visitors see a “South Essentials” shop homepage with featured categories, a product list, and a working in-page cart (add/remove/update quantities and subtotal), plus a clearly-labeled placeholder checkout and updated storefront metadata.
