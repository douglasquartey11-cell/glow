export interface Product {
  id: string;
  name: string;
  category: 'Skincare' | 'Room Decor' | 'Bundles';
  price: number;
  originalPrice?: number;
  activeIngredient: string;
  badge?: string;
  description: string;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  isCampusFavorite?: boolean;
}

export const initialProducts: Product[] = [
  {
    id: 'prod-1',
    name: 'Balancing Green Tea & Niacinamide Cleanser',
    category: 'Skincare',
    price: 22,
    originalPrice: 28,
    activeIngredient: 'Organic Camellia + 4% Niacinamide',
    badge: 'ECO-CERT 99.4%',
    description: 'Gentle pH 5.5 daily gel cleanser that clears pore congestion without stripping natural lipid barriers.',
    imageUrl: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1000&q=80',
    rating: 4.9,
    reviewCount: 142,
    isCampusFavorite: true,
  },
  {
    id: 'prod-2',
    name: 'Chamomile Deep Sleep Hydrosol Mist',
    category: 'Skincare',
    price: 19,
    activeIngredient: 'Steam-Distilled German Chamomile',
    badge: 'NON-COMEDOGENIC',
    description: 'Soothing bedtime facial and pillow mist formulated to relieve skin tightness and study-induced stress.',
    imageUrl: 'https://images.unsplash.com/photo-1608248597359-0524458d34a4?auto=format&fit=crop&w=1000&q=80',
    rating: 4.8,
    reviewCount: 98,
    isCampusFavorite: false,
  },
  {
    id: 'prod-3',
    name: 'Amber Ceramic Ultrasonic Aroma Diffuser',
    category: 'Room Decor',
    price: 38,
    originalPrice: 48,
    activeIngredient: '2200K Warm Ambient Glow + Whisper Mist',
    badge: 'DORM SAFETY CERTIFIED',
    description: 'Flameless, silent ambient diffuser with warm amber LED lighting. Safe for dorm rooms and late-night study sessions.',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
    rating: 5.0,
    reviewCount: 215,
    isCampusFavorite: true,
  },
  {
    id: 'prod-4',
    name: 'Ceramide Barrier Restorative Crème',
    category: 'Skincare',
    price: 26,
    activeIngredient: 'Phytoceramides + Cold-Pressed Jojoba',
    badge: 'CLINICAL GRADE',
    description: 'Velvety botanical cream that locks in 48-hour cellular hydration against harsh university AC and heating.',
    imageUrl: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80',
    rating: 4.9,
    reviewCount: 86,
    isCampusFavorite: false,
  },
  {
    id: 'prod-5',
    name: 'Handcrafted Terracotta Botanical Vessel',
    category: 'Room Decor',
    price: 24,
    activeIngredient: 'Natural Raw Earth Clay & Moss Base',
    badge: 'HANDMADE ARTISAN',
    description: 'Minimalist earthy room accent and succulent holder engineered to ground your desk space in natural warmth.',
    imageUrl: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1000&q=80',
    rating: 4.7,
    reviewCount: 64,
    isCampusFavorite: false,
  },
  {
    id: 'prod-6',
    name: 'Dorm Sanctuary Starter Ritual Bundle',
    category: 'Bundles',
    price: 54,
    originalPrice: 68,
    activeIngredient: 'Trio Actives + Ceramic Aroma Stone',
    badge: 'CAMPUS VALUE 20% OFF',
    description: 'The ultimate semester self-care package: Cleanser, Soothing Mist, Barrier Cream, and an infused terracotta stone.',
    imageUrl: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1000&q=80',
    rating: 5.0,
    reviewCount: 310,
    isCampusFavorite: true,
  },
];
