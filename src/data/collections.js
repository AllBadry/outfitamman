import { IMG } from './images';

export const collections = [
  {
    slug: 'bespoke-suits',
    id: '01',
    title: 'Bespoke Suits',
    subtitle: 'Signature Tailoring',
    description:
      'Two fittings, one silhouette. Half-canvas construction in Italian wools, cut to your measure.',
    hero: IMG.model,
    products: [
      { name: 'The Midnight Classic', cat: 'Three-Piece Suit', price: 780, image: '/products/mannnn.avif', tag: 'Icon' },
      { name: 'Charcoal Two-Piece', cat: 'Bespoke Suits', price: 695, image: '/products/suit-01.jpg' },
      { name: 'Double-Breasted Blazer', cat: 'Blazers', price: 640, image: '/products/suit-03.jpg' },
      { name: 'Fully-Canvassed Overcoat', cat: 'Outerwear', price: 450, image: '/products/suit-06.jpg' },
    ],
  },
  {
    slug: 'smart-casual',
    id: '02',
    title: 'Smart Casual',
    subtitle: 'Everyday Elegance',
    description:
      'Relaxed tailoring for a modern life — unstructured jackets and brushed cottons in muted earth tones.',
    hero: IMG.casual,
    products: [
      { name: 'Unstructured Linen Jacket', cat: 'Jackets', price: 380, image: '/products/casual-01.jpg' },
      { name: 'Relaxed Wool Blazer', cat: 'Jackets', price: 420, image: '/products/casual-02.jpg', tag: 'New' },
      { name: 'Brushed Oxford Shirt', cat: 'Shirting', price: 140, image: '/products/shirt-01.jpg' },
      { name: 'Crew-Neck Knit Polo', cat: 'Knitwear', price: 190, image: '/products/casual-04.jpg' },
    ],
  },
  {
    slug: 'fine-footwear',
    id: '03',
    title: 'Fine Footwear',
    subtitle: 'Crafted Leather',
    description:
      'Goodyear-welted Oxfords and loafers, hand-patinated by artisans over three days of work.',
    hero: IMG.shoes,
    products: [
      { name: 'Goodyear Oxford Brogues', cat: 'Footwear', price: 310, image: '/products/shoes-01.jpg', tag: 'Craft' },
      { name: 'Suede Penny Loafers', cat: 'Footwear', price: 290, image: '/products/shoes-02.jpg' },
      { name: 'Whole-Cut Leather Derby', cat: 'Footwear', price: 350, image: '/products/shoes-03.jpg' },
    ],
  },
  {
    slug: 'accessories',
    id: '04',
    title: 'The Accessory Room',
    subtitle: 'The Final Touch',
    description:
      'Silk ties, leather goods and subtle timepieces that complete the composition.',
    hero: IMG.bag,
    products: [
      { name: 'Automatic Dress Watch', cat: 'Timepieces', price: 890, image: '/products/watch-01.jpg', tag: 'Limited' },
      { name: 'Acetate Sunglasses', cat: 'Eyewear', price: 120, image: '/products/glasses-01.jpg' },
      { name: 'Italian Silk Tie', cat: 'Ties', price: 85, image: '/products/tie-01.jpg' },
      { name: 'Full-Grain Leather Tote', cat: 'Leather Goods', price: 265, image: '/products/bag-01.jpg' },
    ],
  },
];

export const f = (n) => `JD ${n.toLocaleString('en-US')}`;