export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  description: string;
}

export const categories: Category[] = [
  {
    id: 'temples',
    name: 'South Indian Temples',
    image: '/assets/generated/south-temple-hero.dim_1920x1080.png',
    description: 'Explore spiritual artifacts and temple-inspired decor',
  },
  {
    id: 'sarees',
    name: 'Silk Sarees',
    image: '/assets/generated/silk-sarees-category.dim_1200x800.png',
    description: 'Authentic handwoven silk sarees from South India',
  },
  {
    id: 'snacks',
    name: 'South Indian Snacks',
    image: '/assets/generated/south-snacks-category.dim_1200x800.png',
    description: 'Traditional snacks and delicacies',
  },
  {
    id: 'dance',
    name: 'Traditional Dance Forms',
    image: '/assets/generated/south-dance-category.dim_1200x800.png',
    description: 'Dance costumes, accessories, and learning materials',
  },
];

export const products: Product[] = [
  {
    id: 'temple-1',
    name: 'Brass Temple Bell',
    price: 1299,
    image: '/assets/generated/south-temple-hero.dim_1920x1080.png',
    category: 'temples',
    description: 'Handcrafted brass bell with intricate temple designs',
  },
  {
    id: 'temple-2',
    name: 'Temple Lamp Set',
    price: 2499,
    image: '/assets/generated/south-temple-hero.dim_1920x1080.png',
    category: 'temples',
    description: 'Traditional brass lamp set for pooja',
  },
  {
    id: 'saree-1',
    name: 'Kanchipuram Silk Saree',
    price: 8999,
    image: '/assets/generated/silk-sarees-category.dim_1200x800.png',
    category: 'sarees',
    description: 'Pure silk saree with traditional zari work',
  },
  {
    id: 'saree-2',
    name: 'Mysore Silk Saree',
    price: 6499,
    image: '/assets/generated/silk-sarees-category.dim_1200x800.png',
    category: 'sarees',
    description: 'Elegant Mysore silk with rich colors',
  },
  {
    id: 'snack-1',
    name: 'Murukku Variety Pack',
    price: 399,
    image: '/assets/generated/south-snacks-category.dim_1200x800.png',
    category: 'snacks',
    description: 'Assorted traditional murukku flavors',
  },
  {
    id: 'snack-2',
    name: 'Mixture & Snacks Combo',
    price: 599,
    image: '/assets/generated/south-snacks-category.dim_1200x800.png',
    category: 'snacks',
    description: 'Authentic South Indian mixture and snacks',
  },
  {
    id: 'dance-1',
    name: 'Bharatanatyam Costume',
    price: 4999,
    image: '/assets/generated/south-dance-category.dim_1200x800.png',
    category: 'dance',
    description: 'Complete Bharatanatyam dance costume set',
  },
  {
    id: 'dance-2',
    name: 'Ghungroo Ankle Bells',
    price: 899,
    image: '/assets/generated/south-dance-category.dim_1200x800.png',
    category: 'dance',
    description: 'Traditional ankle bells for classical dance',
  },
];
