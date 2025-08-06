export const products = [
  {
    id: 1,
    name: "Spring Romance Bouquet",
    price: 89.99,
    originalPrice: 109.99,
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=500&h=500&fit=crop",
    category: "bouquets",
    occasion: ["romance", "anniversary", "wedding"],
    description: "A stunning arrangement of pink roses, white peonies, and baby's breath. Perfect for romantic occasions.",
    careInstructions: "Trim stems daily and change water every 2-3 days. Keep away from direct sunlight.",
    inStock: true,
    featured: true,
    bestseller: true
  },
  {
    id: 2,
    name: "Sunshine Delight",
    price: 65.99,
    originalPrice: 79.99,
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&h=500&fit=crop",
    category: "bouquets",
    occasion: ["birthday", "celebration", "get-well"],
    description: "Bright yellow sunflowers mixed with white daisies and green foliage. Brings joy to any day.",
    careInstructions: "Keep in cool water and trim stems every other day. Avoid direct heat sources.",
    inStock: true,
    featured: true,
    bestseller: false
  },
  {
    id: 3,
    name: "Elegant White Roses",
    price: 95.99,
    originalPrice: 115.99,
    image: "https://images.unsplash.com/photo-1544943910-1c28cfe76561?w=500&h=500&fit=crop",
    category: "roses",
    occasion: ["wedding", "anniversary", "sympathy"],
    description: "Pure white roses in a classic arrangement. Timeless elegance for special moments.",
    careInstructions: "Change water daily and keep in a cool location. Remove any wilted petals.",
    inStock: true,
    featured: false,
    bestseller: true
  },
  {
    id: 4,
    name: "Wildflower Meadow",
    price: 75.99,
    originalPrice: 89.99,
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=500&h=500&fit=crop",
    category: "bouquets",
    occasion: ["birthday", "housewarming", "thank-you"],
    description: "A natural mix of wildflowers in soft pastels. Perfect for a rustic, garden-fresh look.",
    careInstructions: "Trim stems and change water every 2 days. Keep in indirect sunlight.",
    inStock: true,
    featured: true,
    bestseller: false
  },
  {
    id: 5,
    name: "Red Passion Roses",
    price: 85.99,
    originalPrice: 99.99,
    image: "https://images.unsplash.com/photo-1544943910-1c28cfe76561?w=500&h=500&fit=crop",
    category: "roses",
    occasion: ["romance", "anniversary", "valentine"],
    description: "Deep red roses that speak of love and passion. A classic choice for romantic gestures.",
    careInstructions: "Keep in cool water and trim stems daily. Remove any damaged petals.",
    inStock: true,
    featured: false,
    bestseller: true
  },
  {
    id: 6,
    name: "Tropical Paradise",
    price: 120.99,
    originalPrice: 140.99,
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&h=500&fit=crop",
    category: "exotic",
    occasion: ["celebration", "anniversary", "housewarming"],
    description: "Exotic orchids and tropical blooms in vibrant colors. Makes a bold statement.",
    careInstructions: "Mist daily and keep in humid environment. Avoid direct sunlight.",
    inStock: true,
    featured: true,
    bestseller: false
  },
  {
    id: 7,
    name: "Lavender Dreams",
    price: 69.99,
    originalPrice: 79.99,
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=500&h=500&fit=crop",
    category: "bouquets",
    occasion: ["birthday", "get-well", "thank-you"],
    description: "Soft lavender roses with purple accents. Calming and beautiful for any occasion.",
    careInstructions: "Change water every 2 days and keep in cool location. Trim stems as needed.",
    inStock: true,
    featured: false,
    bestseller: false
  },
  {
    id: 8,
    name: "Garden Party Mix",
    price: 55.99,
    originalPrice: 69.99,
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&h=500&fit=crop",
    category: "bouquets",
    occasion: ["birthday", "housewarming", "celebration"],
    description: "A cheerful mix of colorful garden flowers. Perfect for brightening someone's day.",
    careInstructions: "Keep in fresh water and trim stems every 2-3 days. Avoid direct heat.",
    inStock: true,
    featured: false,
    bestseller: false
  }
];

export const categories = [
  { id: "all", name: "All Flowers" },
  { id: "bouquets", name: "Bouquets" },
  { id: "roses", name: "Roses" },
  { id: "exotic", name: "Exotic" }
];

export const occasions = [
  { id: "all", name: "All Occasions" },
  { id: "birthday", name: "Birthday" },
  { id: "anniversary", name: "Anniversary" },
  { id: "romance", name: "Romance" },
  { id: "wedding", name: "Wedding" },
  { id: "sympathy", name: "Sympathy" },
  { id: "get-well", name: "Get Well" },
  { id: "thank-you", name: "Thank You" },
  { id: "housewarming", name: "Housewarming" },
  { id: "celebration", name: "Celebration" },
  { id: "valentine", name: "Valentine's Day" }
]; 