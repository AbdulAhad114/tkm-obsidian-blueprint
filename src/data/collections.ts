import { Product } from '../types';

export interface CollectionData {
  id: string;
  title: string;
  description: string;
  image: string;
  products: Product[];
  innovations?: { title: string; subtitle?: string; description: string; image: string; align: 'left' | 'right' }[];
  highlights?: { title: string; image: string }[];
  videoBanner?: { title: string; subtitle?: string; description: string; image: string };
  subCategories?: { title: string; image: string }[];
}

const commonRichDescription = [
    {
        title: "Real Time Temperature Display",
        content: "This smart bathroom faucet has a temperature display function. When the water is flowing, the real-time water temperature will be shown on the screen; no batteries are needed. There are also three display colors on the screen: blue for cold water, green for warm, and red for hot water.",
        image: "https://images.unsplash.com/photo-1584622050111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
        align: 'right' as const
    },
    {
        title: "Multiple Outlet Modes",
        content: "The faucet has multiple water outlet modes, which can be used in different bathroom scenes, greatly improving functionality and efficiency. Stream Mode: Soft stream avoids splashing. Spray Mode: Powerful flow for rinsing. Boost Mode: For deep cleaning.",
        image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80",
        align: 'left' as const
    },
    {
        title: "1080° Free Rotation",
        content: "This bathroom faucet features a three-stage swivel function that can be rotated at any angle horizontally and vertically to meet various needs. The design allows for smooth bending and folding, enabling precise spout positioning.",
        image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
        align: 'right' as const
    },
    {
        title: "High Performance Materials",
        content: "The faucet is made of high-quality brass for excellent corrosion resistance and long life. The upgraded ceramic disc valve exceeds industry standards for a lifetime of durability.",
        image: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&w=1200&q=80",
        align: 'left' as const
    }
];

export const collections: Record<string, CollectionData> = {
  'bathroom-faucets-imported': {
    id: 'bathroom-faucets-imported',
    title: 'Bathroom Faucets',
    description: 'Explore our imported bathroom faucets collection, featuring premium designs in various finishes including Silver, Black, Gold, and Chrome to match your bathroom style.',
    image: 'https://images.unsplash.com/photo-1584622050111-993a426fbf0a?auto=format&fit=crop&w=1920&q=80',
    products: [
      { 
        id: 'bf1', 
        name: 'Vanity Water Fall Faucet', 
        category: 'Bathroom Faucets', 
        price: 'From PKR 5,000.00',
        image: 'https://tkmtradingshop.com/cdn/shop/files/WhatsAppImage2025-10-25at3.55.26AM.jpg?v=1761473726&width=1206', 
        badge: 'Popular',
        rating: 4.5,
        reviews: 128,
        description: 'Elegant waterfall design vanity faucet available in Silver, Black, and Gold finishes. Features a modern waterfall spout for a luxurious bathroom experience.',
        gallery: [
            'https://images.unsplash.com/photo-1584622050111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80'
        ],
        colors: [
            { name: 'Silver', hex: '#C0C0C0' },
            { name: 'Black', hex: '#000000' },
            { name: 'Gold', hex: '#FFD700' }
        ],
        features: [
            'Waterfall spout design',
            'Premium brass construction',
            'Easy installation',
            'Multiple finish options'
        ],
        richDescription: commonRichDescription
      },
      { 
        id: 'bf2', 
        name: 'Brass Basin Faucet', 
        category: 'Bathroom Faucets', 
        price: 'From PKR 4,500.00',
        image: 'https://tkmtradingshop.com/cdn/shop/files/WhatsAppImage2025-08-14at3.33.15AM.jpg?v=1755168371&width=720', 
        badge: 'Best Seller',
        rating: 4.7,
        reviews: 203,
        description: 'High-quality brass basin faucet with five finish options: Silver, Black, Gold, Grey, and White. Durable construction with smooth operation.',
        gallery: [
            'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1584622050111-993a426fbf0a?auto=format&fit=crop&w=800&q=80'
        ],
        colors: [
            { name: 'Silver', hex: '#C0C0C0' },
            { name: 'Black', hex: '#000000' },
            { name: 'Gold', hex: '#FFD700' },
            { name: 'Grey', hex: '#808080' },
            { name: 'White', hex: '#FFFFFF' }
        ],
        features: [
            'Solid brass construction',
            'Ceramic disc valve',
            'Five finish options',
            'Easy maintenance'
        ],
        richDescription: commonRichDescription
      },
      { 
        id: 'bf3', 
        name: 'Brass Basin Faucet', 
        category: 'Bathroom Faucets', 
        price: 'From PKR 4,500.00',
        image: 'https://tkmtradingshop.com/cdn/shop/files/WhatsAppImage2025-08-13at2.22.52AM.jpg?v=1755108552&width=720', 
        rating: 4.6,
        reviews: 156,
        description: 'Classic brass basin faucet design available in Silver, Black, and Gold finishes. Perfect for modern and traditional bathroom styles.',
        gallery: [
            'https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80'
        ],
        colors: [
            { name: 'Silver', hex: '#C0C0C0' },
            { name: 'Black', hex: '#000000' },
            { name: 'Gold', hex: '#FFD700' }
        ],
        features: [
            'Premium brass material',
            'Three finish options',
            'Reliable performance',
            'Long-lasting durability'
        ],
        richDescription: commonRichDescription
      },
      { 
        id: 'bf4', 
        name: 'Vanity Brass Faucet', 
        category: 'Bathroom Faucets', 
        price: 'From PKR 5,700.00',
        image: 'https://tkmtradingshop.com/cdn/shop/files/WhatsAppImage2025-08-15at9.21.54AM.jpg?v=1755280522&width=720', 
        badge: 'Premium',
        rating: 4.8,
        reviews: 189,
        description: 'Premium vanity brass faucet with elegant design. Available in Silver, Black, and Gold finishes to complement your bathroom decor.',
        gallery: [
            'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1584622050111-993a426fbf0a?auto=format&fit=crop&w=800&q=80'
        ],
        colors: [
            { name: 'Silver', hex: '#C0C0C0' },
            { name: 'Black', hex: '#000000' },
            { name: 'Gold', hex: '#FFD700' }
        ],
        features: [
            'Premium brass construction',
            'Elegant design',
            'Multiple finish options',
            'Smooth operation'
        ],
        richDescription: commonRichDescription
      },
      { 
        id: 'bf5', 
        name: 'Brass Basin Faucet | Silver - Black - Gold', 
        category: 'Bathroom Faucets', 
        price: 'From PKR 6,000.00',
        image: 'https://images.unsplash.com/photo-1584622050111-993a426fbf0a?auto=format&fit=crop&w=800&q=80', 
        rating: 4.6,
        reviews: 142,
        description: 'High-end brass basin faucet featuring superior quality and design. Available in Silver, Black, and Gold finishes.',
        gallery: [
            'https://images.unsplash.com/photo-1584622050111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80'
        ],
        colors: [
            { name: 'Silver', hex: '#C0C0C0' },
            { name: 'Black', hex: '#000000' },
            { name: 'Gold', hex: '#FFD700' }
        ],
        features: [
            'Superior brass quality',
            'Premium finish',
            'Durable construction',
            'Modern design'
        ],
        richDescription: commonRichDescription
      },
      { 
        id: 'bf6', 
        name: 'Electric Heating Kitchen & Bathroom Faucet', 
        category: 'Bathroom Faucets', 
        price: 'PKR 4,500.00',
        image: 'https://images.unsplash.com/photo-1616486788371-62d930495c44?auto=format&fit=crop&w=800&q=80', 
        badge: 'Innovation',
        rating: 4.9,
        reviews: 267,
        description: 'Advanced electric heating faucet for instant hot water. Perfect for both kitchen and bathroom use with energy-efficient design.',
        gallery: [
            'https://images.unsplash.com/photo-1616486788371-62d930495c44?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1584622050111-993a426fbf0a?auto=format&fit=crop&w=800&q=80'
        ],
        features: [
            'Instant hot water',
            'Energy efficient',
            'Safe operation',
            'Dual purpose (kitchen & bathroom)'
        ],
        richDescription: commonRichDescription
      },
      { 
        id: 'bf7', 
        name: 'Waterfall Bathroom Faucet | Silver - Black - Gold', 
        category: 'Bathroom Faucets', 
        price: 'From PKR 5,100.00',
        image: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=800&q=80', 
        badge: 'Trending',
        rating: 4.7,
        reviews: 198,
        description: 'Stylish waterfall bathroom faucet with contemporary design. Creates a beautiful cascading water effect. Available in Silver, Black, and Gold.',
        gallery: [
            'https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80'
        ],
        colors: [
            { name: 'Silver', hex: '#C0C0C0' },
            { name: 'Black', hex: '#000000' },
            { name: 'Gold', hex: '#FFD700' }
        ],
        features: [
            'Waterfall spout design',
            'Modern aesthetics',
            'Smooth water flow',
            'Multiple finish options'
        ],
        richDescription: commonRichDescription
      },
      { 
        id: 'bf8', 
        name: 'Brass Concealed Basin Faucet | Silver - Black - Gold', 
        category: 'Bathroom Faucets', 
        price: 'From PKR 12,500.00',
        image: 'https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&w=800&q=80', 
        badge: 'Luxury',
        rating: 4.9,
        reviews: 89,
        description: 'Premium concealed basin faucet with minimalist design. The concealed installation creates a clean, modern look. Available in Silver, Black, and Gold.',
        gallery: [
            'https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1584622050111-993a426fbf0a?auto=format&fit=crop&w=800&q=80'
        ],
        colors: [
            { name: 'Silver', hex: '#C0C0C0' },
            { name: 'Black', hex: '#000000' },
            { name: 'Gold', hex: '#FFD700' }
        ],
        features: [
            'Concealed installation',
            'Minimalist design',
            'Premium quality',
            'Luxury finish'
        ],
        richDescription: commonRichDescription
      },
      { 
        id: 'bf9', 
        name: 'Polo Bathroom Faucet | Chrome', 
        category: 'Bathroom Faucets', 
        price: 'PKR 1,990.00',
        image: 'https://images.unsplash.com/photo-1599815049516-7d3122c54f49?auto=format&fit=crop&w=800&q=80', 
        badge: 'Sale',
        rating: 4.4,
        reviews: 312,
        description: 'Classic polo-style bathroom faucet in chrome finish. Affordable and reliable option for any bathroom.',
        gallery: [
            'https://images.unsplash.com/photo-1599815049516-7d3122c54f49?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80'
        ],
        colors: [
            { name: 'Chrome', hex: '#E8E8E8' }
        ],
        features: [
            'Classic polo design',
            'Chrome finish',
            'Affordable price',
            'Easy installation'
        ],
        richDescription: commonRichDescription
      },
      { 
        id: 'bf10', 
        name: 'Smart Bathroom Faucet | Chrome', 
        category: 'Bathroom Faucets', 
        price: 'PKR 1,890.00',
        image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&q=80', 
        badge: 'Smart',
        rating: 4.5,
        reviews: 245,
        description: 'Smart bathroom faucet with modern technology features. Chrome finish with intelligent water flow control.',
        gallery: [
            'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1584622050111-993a426fbf0a?auto=format&fit=crop&w=800&q=80'
        ],
        colors: [
            { name: 'Chrome', hex: '#E8E8E8' }
        ],
        features: [
            'Smart technology',
            'Water-saving design',
            'Chrome finish',
            'Modern features'
        ],
        richDescription: commonRichDescription
      },
      { 
        id: 'bf11', 
        name: 'Bathroom Vanity Faucet | Chrome', 
        category: 'Bathroom Faucets', 
        price: 'PKR 2,090.00',
        image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80', 
        rating: 4.6,
        reviews: 178,
        description: 'Elegant vanity faucet in chrome finish. Perfect for bathroom vanities with contemporary styling.',
        gallery: [
            'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80'
        ],
        colors: [
            { name: 'Chrome', hex: '#E8E8E8' }
        ],
        features: [
            'Vanity design',
            'Chrome finish',
            'Contemporary style',
            'Reliable quality'
        ],
        richDescription: commonRichDescription
      },
      { 
        id: 'bf12', 
        name: 'Side Handle Bathroom Faucet | Silver - Black', 
        category: 'Bathroom Faucets', 
        price: 'From PKR 5,500.00',
        image: 'https://images.unsplash.com/photo-1605634591546-f9478a87071e?auto=format&fit=crop&w=800&q=80', 
        badge: 'Unique',
        rating: 4.7,
        reviews: 134,
        description: 'Unique side handle design bathroom faucet. Available in Silver and Black finishes for a distinctive look.',
        gallery: [
            'https://images.unsplash.com/photo-1605634591546-f9478a87071e?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1584622050111-993a426fbf0a?auto=format&fit=crop&w=800&q=80'
        ],
        colors: [
            { name: 'Silver', hex: '#C0C0C0' },
            { name: 'Black', hex: '#000000' }
        ],
        features: [
            'Side handle design',
            'Unique styling',
            'Two finish options',
            'Easy operation'
        ],
        richDescription: commonRichDescription
      },
      { 
        id: 'bf13', 
        name: 'Lifted Lever Bathroom Faucet | Silver - Black - Gold', 
        category: 'Bathroom Faucets', 
        price: 'From PKR 3,800.00',
        image: 'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&w=800&q=80', 
        rating: 4.5,
        reviews: 167,
        description: 'Modern lifted lever bathroom faucet with ergonomic design. Available in Silver, Black, and Gold finishes.',
        gallery: [
            'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80'
        ],
        colors: [
            { name: 'Silver', hex: '#C0C0C0' },
            { name: 'Black', hex: '#000000' },
            { name: 'Gold', hex: '#FFD700' }
        ],
        features: [
            'Lifted lever design',
            'Ergonomic operation',
            'Three finish options',
            'Modern aesthetics'
        ],
        richDescription: commonRichDescription
      },
      { 
        id: 'bf14', 
        name: 'Electric Heating Kitchen & Bathroom Faucet', 
        category: 'Bathroom Faucets', 
        price: 'PKR 3,500.00',
        image: 'https://images.unsplash.com/photo-1616486788371-62d930495c44?auto=format&fit=crop&w=800&q=80', 
        badge: 'Value',
        rating: 4.6,
        reviews: 223,
        description: 'Economical electric heating faucet for instant hot water. Suitable for both kitchen and bathroom applications.',
        gallery: [
            'https://images.unsplash.com/photo-1616486788371-62d930495c44?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1584622050111-993a426fbf0a?auto=format&fit=crop&w=800&q=80'
        ],
        features: [
            'Instant hot water',
            'Cost-effective',
            'Dual purpose',
            'Energy efficient'
        ],
        richDescription: commonRichDescription
      },
      { 
        id: 'bf15', 
        name: 'Brass Spiral Bathroom Faucet | Silver - Black - Gold', 
        category: 'Bathroom Faucets', 
        price: 'From PKR 4,200.00',
        image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80', 
        badge: 'Design',
        rating: 4.7,
        reviews: 191,
        description: 'Unique spiral design bathroom faucet with artistic appeal. Premium brass construction available in Silver, Black, and Gold.',
        gallery: [
            'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80'
        ],
        colors: [
            { name: 'Silver', hex: '#C0C0C0' },
            { name: 'Black', hex: '#000000' },
            { name: 'Gold', hex: '#FFD700' }
        ],
        features: [
            'Spiral design',
            'Artistic appeal',
            'Premium brass',
            'Multiple finishes'
        ],
        richDescription: commonRichDescription
      },
    ],
    innovations: [
      {
        title: 'Built-In Hydroelectric Turbine',
        subtitle: 'Smart Technology',
        description: 'The LED temperature display function requires no batteries, and the water temperature is easily visible.',
        image: 'https://images.unsplash.com/photo-1616486788371-62d930495c44?auto=format&fit=crop&w=1200&q=80',
        align: 'right'
      },
      {
        title: 'Multiple Water Outlet Modes',
        subtitle: 'Versatility',
        description: 'Multiple water outlet modes can be used in different bathroom scenes, greatly improving functionality and efficiency.',
        image: 'https://images.unsplash.com/photo-1584622050111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
        align: 'left'
      }
    ],
    highlights: [
      { title: 'Secure Docking', image: 'https://images.unsplash.com/photo-1599815049516-7d3122c54f49?auto=format&fit=crop&w=600&q=80' },
      { title: 'Water Efficiency', image: 'https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&w=600&q=80' },
      { title: 'Perfect Finish', image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=600&q=80' }
    ],
    videoBanner: {
      title: 'Digital Temperature Display',
      subtitle: 'Innovation',
      description: 'Temperature display function to ensure that the water is at the most comfortable temperature. (Non-battery or electricity required)',
      image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1600&q=80'
    },
    subCategories: [
      { title: 'Single Handle', image: 'https://images.unsplash.com/photo-1599815049516-7d3122c54f49?auto=format&fit=crop&w=600&q=80' },
      { title: 'Widespread Faucets', image: 'https://images.unsplash.com/photo-1584622050111-993a426fbf0a?auto=format&fit=crop&w=600&q=80' },
      { title: 'Wall Mount', image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=600&q=80' }
    ]
  },
  'kitchen-faucets-imported': {
    id: 'kitchen-faucets-imported',
    title: 'Kitchen Faucets',
    description: 'Professional grade kitchen mixers designed for the modern culinary space. Explore our imported collection featuring premium designs in various finishes.',
    image: 'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&w=1920&q=80',
    products: [
      { 
        id: 'kf1', 
        name: 'Victorian Dual Kitchen Faucet | Silver - Black', 
        category: 'Kitchen Faucets', 
        price: 'From PKR 7,500.00',
        image: 'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&w=800&q=80', 
        badge: 'Premium',
        rating: 4.7,
        reviews: 156,
        description: 'Elegant Victorian-style dual kitchen faucet with classic design. Available in Silver and Black finishes for a timeless kitchen aesthetic.',
        gallery: [
            'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1616486788371-62d930495c44?auto=format&fit=crop&w=800&q=80'
        ],
        colors: [
            { name: 'Silver', hex: '#C0C0C0' },
            { name: 'Black', hex: '#000000' }
        ],
        features: [
            'Victorian design',
            'Dual handle operation',
            'Premium construction',
            'Two finish options'
        ],
        richDescription: commonRichDescription
      },
      { 
        id: 'kf2', 
        name: 'Sleek Imported Kitchen Faucet | Silver - Black - Gold', 
        category: 'Kitchen Faucets', 
        price: 'From PKR 9,200.00',
        image: 'https://images.unsplash.com/photo-1616486788371-62d930495c44?auto=format&fit=crop&w=800&q=80', 
        badge: 'Best Seller',
        rating: 4.8,
        reviews: 203,
        description: 'Sleek and modern imported kitchen faucet with contemporary design. Available in Silver, Black, and Gold finishes for a sophisticated look.',
        gallery: [
            'https://images.unsplash.com/photo-1616486788371-62d930495c44?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&w=800&q=80'
        ],
        colors: [
            { name: 'Silver', hex: '#C0C0C0' },
            { name: 'Black', hex: '#000000' },
            { name: 'Gold', hex: '#FFD700' }
        ],
        features: [
            'Sleek modern design',
            'Imported quality',
            'Three finish options',
            'Premium materials'
        ],
        richDescription: commonRichDescription
      },
      { 
        id: 'kf3', 
        name: '360° Movable Dual Kitchen Faucet | Silver - Black - Gold', 
        category: 'Kitchen Faucets', 
        price: 'From PKR 7,500.00',
        image: 'https://images.unsplash.com/photo-1584622050111-993a426fbf0a?auto=format&fit=crop&w=800&q=80', 
        badge: 'Innovation',
        rating: 4.6,
        reviews: 178,
        description: 'Advanced 360° movable dual kitchen faucet with full rotation capability. Perfect for multi-sink setups. Available in Silver, Black, and Gold.',
        gallery: [
            'https://images.unsplash.com/photo-1584622050111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&w=800&q=80'
        ],
        colors: [
            { name: 'Silver', hex: '#C0C0C0' },
            { name: 'Black', hex: '#000000' },
            { name: 'Gold', hex: '#FFD700' }
        ],
        features: [
            '360° rotation',
            'Dual handle design',
            'Full sink coverage',
            'Multiple finish options'
        ],
        richDescription: commonRichDescription
      },
      { 
        id: 'kf4', 
        name: 'Kitchen Pullout Faucet | Silver - Black', 
        category: 'Kitchen Faucets', 
        price: 'PKR 2,750.00',
        image: 'https://images.unsplash.com/photo-1599815049516-7d3122c54f49?auto=format&fit=crop&w=800&q=80', 
        badge: 'Popular',
        rating: 4.5,
        reviews: 234,
        description: 'Convenient pullout kitchen faucet with flexible spray head. Easy to use for cleaning and filling. Available in Silver and Black finishes.',
        gallery: [
            'https://images.unsplash.com/photo-1599815049516-7d3122c54f49?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1616486788371-62d930495c44?auto=format&fit=crop&w=800&q=80'
        ],
        colors: [
            { name: 'Silver', hex: '#C0C0C0' },
            { name: 'Black', hex: '#000000' }
        ],
        features: [
            'Pullout spray head',
            'Flexible hose',
            'Easy operation',
            'Two finish options'
        ],
        richDescription: commonRichDescription
      },
      { 
        id: 'kf5', 
        name: 'Stainless Steel Round Kitchen Faucet | Silver - Black - Gold', 
        category: 'Kitchen Faucets', 
        price: 'From PKR 2,200.00',
        image: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=800&q=80', 
        rating: 4.4,
        reviews: 189,
        description: 'Durable stainless steel round kitchen faucet with modern design. Resistant to corrosion and easy to maintain. Available in Silver, Black, and Gold.',
        gallery: [
            'https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&w=800&q=80'
        ],
        colors: [
            { name: 'Silver', hex: '#C0C0C0' },
            { name: 'Black', hex: '#000000' },
            { name: 'Gold', hex: '#FFD700' }
        ],
        features: [
            'Stainless steel construction',
            'Round spout design',
            'Corrosion resistant',
            'Three finish options'
        ],
        richDescription: commonRichDescription
      },
      { 
        id: 'kf6', 
        name: '360° Movable Kitchen Faucet | Silver - Black - Gold', 
        category: 'Kitchen Faucets', 
        price: 'From PKR 5,500.00',
        image: 'https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&w=800&q=80', 
        badge: 'Flexible',
        rating: 4.7,
        reviews: 167,
        description: 'Versatile 360° movable kitchen faucet with full rotation for maximum flexibility. Perfect for busy kitchens. Available in Silver, Black, and Gold.',
        gallery: [
            'https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1616486788371-62d930495c44?auto=format&fit=crop&w=800&q=80'
        ],
        colors: [
            { name: 'Silver', hex: '#C0C0C0' },
            { name: 'Black', hex: '#000000' },
            { name: 'Gold', hex: '#FFD700' }
        ],
        features: [
            '360° rotation',
            'Maximum flexibility',
            'Easy to maneuver',
            'Multiple finish options'
        ],
        richDescription: commonRichDescription
      },
      { 
        id: 'kf7', 
        name: 'Stainless Steel Square Kitchen Faucet | Silver - Black', 
        category: 'Kitchen Faucets', 
        price: 'From PKR 2,300.00',
        image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80', 
        rating: 4.5,
        reviews: 145,
        description: 'Modern square design stainless steel kitchen faucet. Contemporary aesthetics with durable construction. Available in Silver and Black.',
        gallery: [
            'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&w=800&q=80'
        ],
        colors: [
            { name: 'Silver', hex: '#C0C0C0' },
            { name: 'Black', hex: '#000000' }
        ],
        features: [
            'Square spout design',
            'Stainless steel build',
            'Modern aesthetics',
            'Two finish options'
        ],
        richDescription: commonRichDescription
      },
      { 
        id: 'kf8', 
        name: 'Electric Heating Kitchen & Bathroom Faucet', 
        category: 'Kitchen Faucets', 
        price: 'PKR 3,500.00',
        image: 'https://images.unsplash.com/photo-1616486788371-62d930495c44?auto=format&fit=crop&w=800&q=80', 
        badge: 'Innovation',
        rating: 4.6,
        reviews: 198,
        description: 'Advanced electric heating faucet providing instant hot water. Energy-efficient design perfect for both kitchen and bathroom use.',
        gallery: [
            'https://images.unsplash.com/photo-1616486788371-62d930495c44?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&w=800&q=80'
        ],
        features: [
            'Instant hot water',
            'Energy efficient',
            'Dual purpose',
            'Safe operation'
        ],
        richDescription: commonRichDescription
      },
      { 
        id: 'kf9', 
        name: 'Stainless Steel L-Shape Kitchen Faucet | Silver - Black', 
        category: 'Kitchen Faucets', 
        price: 'From PKR 3,500.00',
        image: 'https://images.unsplash.com/photo-1605634591546-f9478a87071e?auto=format&fit=crop&w=800&q=80', 
        badge: 'Design',
        rating: 4.5,
        reviews: 123,
        description: 'Unique L-shape design stainless steel kitchen faucet. Space-saving design with modern appeal. Available in Silver and Black.',
        gallery: [
            'https://images.unsplash.com/photo-1605634591546-f9478a87071e?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&w=800&q=80'
        ],
        colors: [
            { name: 'Silver', hex: '#C0C0C0' },
            { name: 'Black', hex: '#000000' }
        ],
        features: [
            'L-shape design',
            'Space-saving',
            'Stainless steel',
            'Two finish options'
        ],
        richDescription: commonRichDescription
      },
      { 
        id: 'kf10', 
        name: 'Brass Kitchen Faucet With Soap Holder | Silver', 
        category: 'Kitchen Faucets', 
        price: 'PKR 7,500.00',
        image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&q=80', 
        badge: 'Convenience',
        rating: 4.7,
        reviews: 156,
        description: 'Premium brass kitchen faucet with integrated soap holder. Combines functionality with elegance. Available in Silver finish.',
        gallery: [
            'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&w=800&q=80'
        ],
        colors: [
            { name: 'Silver', hex: '#C0C0C0' }
        ],
        features: [
            'Integrated soap holder',
            'Premium brass',
            'Convenient design',
            'Silver finish'
        ],
        richDescription: commonRichDescription
      },
      { 
        id: 'kf11', 
        name: 'Wall Mounted Kitchen Faucet | Silver', 
        category: 'Kitchen Faucets', 
        price: 'PKR 3,700.00',
        image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80', 
        badge: 'Space Saver',
        rating: 4.6,
        reviews: 134,
        description: 'Space-efficient wall mounted kitchen faucet. Perfect for compact kitchens or modern minimalist designs. Available in Silver finish.',
        gallery: [
            'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1616486788371-62d930495c44?auto=format&fit=crop&w=800&q=80'
        ],
        colors: [
            { name: 'Silver', hex: '#C0C0C0' }
        ],
        features: [
            'Wall mounted',
            'Space efficient',
            'Modern design',
            'Silver finish'
        ],
        richDescription: commonRichDescription
      },
    ],
    innovations: [
      {
        title: '360° Swivel Rotation',
        subtitle: 'Flexibility',
        description: 'Complete kitchen sink coverage with our 360-degree swivel spout. Perfect for double bowl sinks and multitasking.',
        image: 'https://images.unsplash.com/photo-1616486788371-62d930495c44?auto=format&fit=crop&w=1200&q=80',
        align: 'left'
      },
      {
        title: 'Magnetic Docking System',
        subtitle: 'Convenience',
        description: 'The spray head snaps into place with a powerful magnet, ensuring it stays docked when not in use.',
        image: 'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&w=1200&q=80',
        align: 'right'
      }
    ],
    subCategories: [
      { title: 'Pull-Down Faucets', image: 'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&w=600&q=80' },
      { title: 'Commercial Style', image: 'https://images.unsplash.com/photo-1616486788371-62d930495c44?auto=format&fit=crop&w=600&q=80' },
      { title: 'Touchless Faucets', image: 'https://images.unsplash.com/photo-1585913217436-3e2a5d5e533c?auto=format&fit=crop&w=600&q=80' }
    ]
  },
  'bathroom-wall-mounted-showers-imported': {
    id: 'bathroom-wall-mounted-showers-imported',
    title: 'Bathroom Wall Showers',
    description: 'Transform your shower experience with our advanced wall-mounted shower systems.',
    image: 'https://images.unsplash.com/photo-1520032525096-7bd04a94b568?auto=format&fit=crop&w=1920&q=80',
    products: [
      { id: 'ws1', name: 'Rain Shower System Black', category: 'Showers', price: 'PKR 899.00', image: 'https://images.unsplash.com/photo-1520032525096-7bd04a94b568?auto=format&fit=crop&w=600&q=80', badge: 'Popular' },
      { id: 'ws2', name: 'Thermostatic Shower Mixer Chrome', category: 'Showers', price: 'PKR 1,200.00', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80' },
      { id: 'ws3', name: 'Square Head Shower Set', category: 'Showers', price: 'PKR 750.00', image: 'https://images.unsplash.com/photo-1631729371254-42c2a89dd659?auto=format&fit=crop&w=600&q=80' },
      { id: 'ws4', name: 'Gold Rainfall Shower Kit', category: 'Showers', price: 'PKR 1,500.00', image: 'https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&w=600&q=80' },
    ],
    innovations: [
      {
        title: 'Thermostatic Precision',
        subtitle: 'Safety',
        description: 'Maintains your desired water temperature within 0.4°C, preventing sudden scalding or freezing shocks.',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80',
        align: 'right'
      },
      {
        title: 'Air Injection Technology',
        subtitle: 'Performance',
        description: 'Mixes air with water to create softer, fuller drops while reducing water consumption by up to 30%.',
        image: 'https://images.unsplash.com/photo-1631729371254-42c2a89dd659?auto=format&fit=crop&w=1200&q=80',
        align: 'left'
      }
    ],
    videoBanner: {
      title: 'Piano Key Controls',
      subtitle: 'Modern Design',
      description: 'Intuitive piano key buttons allow for easy switching between different shower modes.',
      image: 'https://images.unsplash.com/photo-1520032525096-7bd04a94b568?auto=format&fit=crop&w=1600&q=80'
    },
    subCategories: [
      { title: 'Rain Showers', image: 'https://images.unsplash.com/photo-1520032525096-7bd04a94b568?auto=format&fit=crop&w=600&q=80' },
      { title: 'Exposed Systems', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80' },
      { title: 'Concealed Sets', image: 'https://images.unsplash.com/photo-1631729371254-42c2a89dd659?auto=format&fit=crop&w=600&q=80' }
    ]
  },
  'bathroom-hand-showers-imported': {
    id: 'bathroom-hand-showers-imported',
    title: 'Bathroom Hand Showers',
    description: 'Versatile and stylish hand showers for added convenience and comfort.',
    image: 'https://images.unsplash.com/photo-1605634591546-f9478a87071e?auto=format&fit=crop&w=1920&q=80',
    products: [
      { id: 'hs1', name: '3-Mode Hand Shower Head', category: 'Hand Showers', price: 'PKR 150.00', image: 'https://images.unsplash.com/photo-1605634591546-f9478a87071e?auto=format&fit=crop&w=600&q=80' },
      { id: 'hs2', name: 'Stick Hand Shower Black', category: 'Hand Showers', price: 'PKR 120.00', image: 'https://images.unsplash.com/photo-1599815049516-7d3122c54f49?auto=format&fit=crop&w=600&q=80' },
      { id: 'hs3', name: 'Shower Rail Set Chrome', category: 'Hand Showers', price: 'PKR 350.00', image: 'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&w=600&q=80' },
    ],
    innovations: [
      {
        title: 'Easy Clean Nozzles',
        subtitle: 'Maintenance',
        description: 'Silicone nozzles allow you to wipe away limescale build-up with a simple touch of your finger.',
        image: 'https://images.unsplash.com/photo-1605634591546-f9478a87071e?auto=format&fit=crop&w=1200&q=80',
        align: 'left'
      }
    ],
    subCategories: [
      { title: 'Round Heads', image: 'https://images.unsplash.com/photo-1605634591546-f9478a87071e?auto=format&fit=crop&w=600&q=80' },
      { title: 'Stick Hands', image: 'https://images.unsplash.com/photo-1599815049516-7d3122c54f49?auto=format&fit=crop&w=600&q=80' },
      { title: 'Massage Sets', image: 'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&w=600&q=80' }
    ]
  },
  'kitchen-sinks': {
    id: 'kitchen-sinks',
    title: 'Kitchen Sinks',
    description: 'Durable and stylish stainless steel sinks for every modern kitchen.',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1920&q=80',
    products: [
      { id: 's1', name: 'Handmade Undermount Sink', category: 'Kitchen Sinks', price: 'PKR 603.00', image: 'https://images.unsplash.com/photo-1584622050111-993a426fbf0a?auto=format&fit=crop&w=600&q=80', badge: 'Sale' },
      { id: 's2', name: 'Single Bowl Sink', category: 'Kitchen Sinks', price: 'PKR 350.00', image: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=600&q=80' },
      { id: 's3', name: 'Inset Sink Single Bowl', category: 'Kitchen Sinks', price: 'PKR 258.00', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80' },
      { id: 's4', name: 'Nano Black Workstation Sink', category: 'Kitchen Sinks', price: 'PKR 1,250.00', image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=600&q=80', badge: 'Premium' },
    ],
    innovations: [
      {
        title: 'Nano Coating Technology',
        subtitle: 'Durability',
        description: 'Oil-resistant and scratch-resistant nano coating ensures your sink stays cleaner for longer and is easy to maintain.',
        image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80',
        align: 'left'
      },
      {
        title: 'Sound Dampening Pads',
        subtitle: 'Quiet',
        description: 'Extra thick rubber pads cover over 80% of the sink base to absorb noise from dishwashing and waste disposal.',
        image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80',
        align: 'right'
      }
    ],
    subCategories: [
      { title: 'Single Bowl', image: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=600&q=80' },
      { title: 'Double Bowl', image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=600&q=80' },
      { title: 'Workstation', image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=600&q=80' }
    ]
  },
  'kitchen-sink-organisers': {
    id: 'kitchen-sink-organisers',
    title: 'Sink Organisers',
    description: 'Keep your kitchen sink area tidy and efficient with our organizers.',
    image: 'https://images.unsplash.com/photo-1584622050111-993a426fbf0a?auto=format&fit=crop&w=1920&q=80',
    products: [
      { id: 'so1', name: 'Stainless Steel Drainer Basket', category: 'Organisers', price: 'PKR 120.00', image: 'https://images.unsplash.com/photo-1584622050111-993a426fbf0a?auto=format&fit=crop&w=600&q=80' },
      { id: 'so2', name: 'Sink Caddy Organizer', category: 'Organisers', price: 'PKR 65.00', image: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=600&q=80' },
      { id: 'so3', name: 'Roll-up Drying Rack', category: 'Organisers', price: 'PKR 45.00', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80' },
    ],
    innovations: [
      {
        title: 'Space Saving Design',
        subtitle: 'Efficiency',
        description: 'Maximize your countertop space with our roll-up drying racks and over-the-sink colanders.',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
        align: 'left'
      }
    ]
  },
  'kitchen-accessories': {
    id: 'kitchen-accessories',
    title: 'Kitchen Accessories',
    description: 'Essential add-ons for a functional and stylish kitchen.',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1920&q=80',
    products: [
       { id: 'ka1', name: 'Soap Dispenser Matte Black', category: 'Kitchen Accessories', price: 'PKR 95.00', image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=600&q=80' },
       { id: 'ka2', name: 'Colander for Sink', category: 'Kitchen Accessories', price: 'PKR 150.00', image: 'https://images.unsplash.com/photo-1565183928294-7063f23ce0f8?auto=format&fit=crop&w=600&q=80' },
       { id: 'ka3', name: 'Cutting Board Wood', category: 'Kitchen Accessories', price: 'PKR 85.00', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80' },
    ],
    innovations: [
       {
         title: 'Premium Materials',
         subtitle: 'Quality',
         description: 'Accessories made from food-grade stainless steel and solid wood for long-lasting performance.',
         image: 'https://images.unsplash.com/photo-1565183928294-7063f23ce0f8?auto=format&fit=crop&w=1200&q=80',
         align: 'right'
       }
    ],
     subCategories: [
      { title: 'Dispensers', image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=600&q=80' },
      { title: 'Colanders', image: 'https://images.unsplash.com/photo-1565183928294-7063f23ce0f8?auto=format&fit=crop&w=600&q=80' },
      { title: 'Cutting Boards', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80' }
    ]
  },
  'featured-products': {
    id: 'featured-products',
    title: 'Featured Products',
    description: 'Our hand-picked selection of best-selling and trending items.',
    image: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1200&q=80',
    products: [
      { id: 'fp1', name: 'Luxury Gold Basin Mixer', category: 'Bathroom', price: 'PKR 450.00', image: 'https://images.unsplash.com/photo-1584622050111-993a426fbf0a?auto=format&fit=crop&w=600&q=80', badge: 'Best Seller' },
      { id: 'fp2', name: 'Pull-out Kitchen Spray', category: 'Kitchen', price: 'PKR 399.00', image: 'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&w=600&q=80' },
      { id: 'fp3', name: 'Rain Shower System Black', category: 'Bathroom', price: 'PKR 899.00', image: 'https://images.unsplash.com/photo-1520032525096-7bd04a94b568?auto=format&fit=crop&w=600&q=80', badge: 'New' },
      { id: 'fp4', name: 'Spring Neck Kitchen Tap', category: 'Kitchen', price: 'PKR 650.00', image: 'https://images.unsplash.com/photo-1616486788371-62d930495c44?auto=format&fit=crop&w=600&q=80' },
    ]
  }
};