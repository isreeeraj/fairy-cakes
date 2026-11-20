export interface MenuItem {
  name: string;
  priceSmall: string;
  priceLarge: string;
  flavorId?: string;
}

export interface MenuCategory {
  title: string;
  subtitle: string;
  sizeSmallLabel: string;
  sizeLargeLabel: string;
  items: MenuItem[];
}

export interface CravingOption {
  id: 'celebration' | 'savory' | 'chill' | 'treat';
  quadrant: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  moodLabel: string;
  prompt: string;
  pointerAngle: number;
  product: {
    name: string;
    tags: [string, string];
    description: string;
    price: string;
    volume: string;
    image: string;
    alt: string;
  };
}

export interface BakeryTimeSlot {
  id: string;
  index: string;
  chapterLabel: string;
  hour: string;
  minute: string;
  period: 'am' | 'pm';
  title: string;
  description: string;
  illustration: string;
  tabIllustration: string;
}

export interface CafeSpot {
  id: string;
  number: string;
  title: string;
  description: string;
  hashtags: [string, string];
  illustration: string;
  hotspotClass: '_1' | '_2' | '_3' | '_4';
}

export interface Testimonial {
  id: string;
  quote: string;
  rating: string;
  author: string;
}

export interface CakeWeightOption {
  id: string;
  kg: number;
  label: string;
  servings: string;
}

export interface CakeFlavorOption {
  id: string;
  name: string;
  category: 'Fresh Cream' | 'Crunchy & Premium' | 'Signature Specials';
  pricePerKg: number | null;
}

export interface CakeShapeOption {
  id: string;
  name: string;
  surcharge: number;
}

export interface CakeFrostingOption {
  id: string;
  name: string;
  surcharge: number | null;
}

export interface CakeAddOnOption {
  id: string;
  name: string;
  price: number;
}

export interface CakeTimeSlotOption {
  id: string;
  label: string;
  surcharge: number;
}

export interface CakeLabConfig {
  weightId: string;
  flavorId: string;
  dietary: 'classic' | 'eggless';
  shapeId: string;
  frostingId: string;
  addOnIds: string[];
  inscription: string;
  celebrationDate: string;
  fulfillment: 'delivery' | 'pickup';
  timeSlotId: string;
  includeSparklerKnife: boolean;
  hasReferencePhoto: boolean;
}

export interface CakePriceLineItem {
  label: string;
  amount: number | null;
}

export interface CakeEstimate {
  isCustomQuote: boolean;
  total: number | null;
  weightLabel: string;
  flavorName: string;
  shapeName: string;
  frostingName: string;
  timeSlotLabel: string;
  lineItems: CakePriceLineItem[];
}

export const ASSETS = {
  // Original Fairy Cakes SVG Artwork & UI Icons
  heartDark: '/assets/fairy-cakes/icons/heart-dark.svg',
  heartAccent: '/assets/fairy-cakes/icons/heart-accent.svg',
  heroArrow: '/assets/fairy-cakes/icons/curved-arrow-dark.svg',
  qualityRosette: '/assets/fairy-cakes/icons/rosette-badge.svg',
  crownAccent: '/assets/fairy-cakes/icons/crown-accent.svg',
  crownDark: '/assets/fairy-cakes/icons/crown-dark.svg',
  sunburstAccent: '/assets/fairy-cakes/icons/sunburst-accent.svg',
  sunburstDark: '/assets/fairy-cakes/icons/sunburst-dark.svg',
  heroCakeAccent: '/assets/fairy-cakes/icons/hero-cake-accent.svg',
  heroShakeAccent: '/assets/fairy-cakes/icons/hero-shake-accent.svg',
  milkshakeCup: '/assets/fairy-cakes/icons/milkshake-cup.svg',
  cakeSlice: '/assets/fairy-cakes/icons/cake-slice.svg',
  wheelPointerDark: '/assets/fairy-cakes/icons/wheel-pointer-dark.svg',
  wheelPointerCream: '/assets/fairy-cakes/icons/wheel-pointer-cream.svg',
  wheelArcCream: '/assets/fairy-cakes/icons/wheel-arc-cream.svg',
  scheduleArcDark: '/assets/fairy-cakes/icons/schedule-arc-dark.svg',
  cravingLoop: '/assets/fairy-cakes/icons/craving-loop.svg',
  starOutlineAccent: '/assets/fairy-cakes/icons/star-outline-accent.svg',
  starOutlineDark: '/assets/fairy-cakes/icons/star-outline-dark.svg',
  heartOutlineAccent: '/assets/fairy-cakes/icons/heart-outline-accent.svg',
  heartOutlineDark: '/assets/fairy-cakes/icons/heart-outline-dark.svg',
  plusOneAccent: '/assets/fairy-cakes/icons/plus-one-accent.svg',
  plusOneDark: '/assets/fairy-cakes/icons/plus-one-dark.svg',
  sparkBolt: '/assets/fairy-cakes/icons/spark-bolt.svg',
  loupeDark: '/assets/fairy-cakes/icons/loupe-dark.svg',
  energyDark: '/assets/fairy-cakes/icons/energy-dark.svg',
  smileDark: '/assets/fairy-cakes/icons/smile-dark.svg',
  starSolidAccent: '/assets/fairy-cakes/icons/star-solid-accent.svg',
  quoteMarksAccent: '/assets/fairy-cakes/icons/quote-marks-accent.svg',
  pinDark: '/assets/fairy-cakes/icons/pin-dark.svg',
  pinAccent: '/assets/fairy-cakes/icons/pin-accent.svg',
  chatDark: '/assets/fairy-cakes/icons/chat-dark.svg',
  chatAccent: '/assets/fairy-cakes/icons/chat-accent.svg',
  thumbtackDark: '/assets/fairy-cakes/icons/thumbtack-dark.svg',
  sparklesAccent: '/assets/fairy-cakes/icons/sparkles-accent.svg',
  downArrowAccent: '/assets/fairy-cakes/icons/down-arrow-accent.svg',
  burstAccent: '/assets/fairy-cakes/icons/burst-accent.svg',
  swirlAccent: '/assets/fairy-cakes/icons/swirl-accent.svg',
  chevronLeftDark: '/assets/fairy-cakes/icons/chevron-left-dark.svg',
  chevronLeftCream: '/assets/fairy-cakes/icons/chevron-left-cream.svg',
  chevronRightDark: '/assets/fairy-cakes/icons/chevron-right-dark.svg',
  chevronRightCream: '/assets/fairy-cakes/icons/chevron-right-cream.svg',
  arrowUpRightDark: '/assets/fairy-cakes/icons/arrow-up-right-dark.svg',
  ticketBarcode: '/assets/fairy-cakes/icons/ticket-barcode.svg',
  uiMapPin: '/assets/fairy-cakes/icons/ui-map-pin.svg',
  uiChatIcon: '/assets/fairy-cakes/icons/ui-chat-icon.svg',

  // Fairy Cakes Photography
  heroSpanishDelight: '/assets/aistudio/Hazelnut_Chocolate_Drip_Cake_Display_8201139a.png',
  spanishDelightCard: '/assets/fairy-cakes/custom-celebration-cake.jpg',
  cafeBitesPhoto: '/assets/fairy-cakes/cafe-bites-spread.jpg',
  freshCreamPhoto: '/assets/fairy-cakes/fresh-cream-cakes.jpg',
  signatureSpecialsPhoto: '/assets/fairy-cakes/signature-specials.jpg',
  browniesPastriesPhoto: '/assets/fairy-cakes/brownies-jar-cakes.jpg',
  oreoShakePhoto: '/assets/fairy-cakes/oreo-shake.jpg',
  cafeInterior: '/assets/fairy-cakes/cafe-interior.jpg',
} as const;

export const SITE_INFO = {
  brand: 'Fairy Cakes',
  addressShort: 'Jawahar Junction, Parippally, Kollam',
  addressFull: 'Jawahar Junction, Mukkada Road, Opp. Moto Planet, Parippally, Kollam, Kerala 691574',
  addressCompact: 'Jawahar Junction, Mukkada Rd, Parippally',
  hoursShort: 'Café 11AM–11PM · Delivery 10AM–10PM',
  dineInHours: '11:00 AM – 11:00 PM',
  deliveryHours: '10:00 AM – 10:00 PM',
  tagline: '★ 4.9 Google Rating (370+ Reviews) · Since 2016',
  instagramHandle: '@fairy_cakes_kollam',
  instagramUrl: 'https://instagram.com/fairy_cakes_kollam',
  whatsappUrl:
    'https://wa.me/?text=Hi%20Fairy%20Cakes%20Parippally!%20I%20would%20like%20to%20place%20an%20order.',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Fairy+Cakes+Jawahar+Junction+Mukkada+Road+Parippally+Kollam+Kerala+691574',
  copyright: '© 2026 Fairy Cakes, Parippally, Kollam. All rights reserved.',
} as const;

export const TICKER_ITEMS = [
  '★ 4.9 Google Rating (370+ Reviews)',
  'Best Custom Cakes in Parippally',
  'Freshly Baked Since 2016',
  '99.9% Theme Design Accuracy',
  'Spanish Delight Praline',
  'Loaded Cheese Fries',
  'Belgian Oreo Shakes',
  'Handmade Happiness',
] as const;

export const MENU_ROWS: [MenuCategory, MenuCategory][] = [
  [
    {
      title: 'Fresh cream cakes',
      subtitle: 'Light, fluffy sponges baked fresh daily.',
      sizeSmallLabel: '0.5 kg',
      sizeLargeLabel: '1 kg',
      items: [
        { name: 'Black Forest', priceSmall: '₹325', priceLarge: '₹650', flavorId: 'black-forest' },
        { name: 'Strawberry', priceSmall: '₹375', priceLarge: '₹750', flavorId: 'strawberry' },
        { name: 'Pineapple', priceSmall: '₹400', priceLarge: '₹800', flavorId: 'pineapple' },
        { name: 'Blueberry', priceSmall: '₹450', priceLarge: '₹900', flavorId: 'blueberry' },
      ],
    },
    {
      title: 'Crunchy & premium',
      subtitle: 'Caramel praline, cocoa & roasted nuts.',
      sizeSmallLabel: '0.5 kg',
      sizeLargeLabel: '1 kg',
      items: [
        { name: 'Choco Chip', priceSmall: '₹450', priceLarge: '₹900', flavorId: 'choco-chip' },
        { name: 'Spanish Delight', priceSmall: '₹550', priceLarge: '₹1,100', flavorId: 'spanish-delight' },
        { name: 'Choco Orange', priceSmall: '₹600', priceLarge: '₹1,200', flavorId: 'choco-orange' },
        { name: 'Hazelnut', priceSmall: '₹600', priceLarge: '₹1,200', flavorId: 'hazelnut' },
      ],
    },
  ],
  [
    {
      title: 'Signature specials',
      subtitle: 'Showstopper cakes crafted to order.',
      sizeSmallLabel: '0.5 kg',
      sizeLargeLabel: '1 kg',
      items: [
        { name: 'Tres Leches', priceSmall: '₹650', priceLarge: '₹1,300', flavorId: 'tres-leches' },
        { name: 'KitKat & Gems', priceSmall: '₹700', priceLarge: '₹1,400', flavorId: 'kitkat-gems' },
        { name: 'Custom Theme Cakes', priceSmall: 'Quote', priceLarge: 'Custom', flavorId: 'custom-theme' },
      ],
    },
    {
      title: 'Café bites & snacks',
      subtitle: 'Crispy, cheesy hangout favorites.',
      sizeSmallLabel: 'Plate',
      sizeLargeLabel: 'Share',
      items: [
        { name: 'Loaded Cheese Fries', priceSmall: '₹160', priceLarge: '₹290' },
        { name: 'Artisan Pizzas', priceSmall: '₹220', priceLarge: '₹390' },
        { name: 'Juicy Stacked Burgers', priceSmall: '₹180', priceLarge: '₹320' },
        { name: 'Steamed & Fried Momos', priceSmall: '₹120', priceLarge: '₹210' },
        { name: 'Club Sandwiches & Pasta', priceSmall: '₹140', priceLarge: '₹250' },
      ],
    },
  ],
  [
    {
      title: 'Shakes, coffee & jars',
      subtitle: 'Thick shakes, cold coffee & fresh bakes.',
      sizeSmallLabel: 'Regular',
      sizeLargeLabel: 'Large',
      items: [
        { name: 'Cold Coffee & Frappés', priceSmall: '₹110', priceLarge: '₹160' },
        { name: 'Belgian Choco & Oreo Shake', priceSmall: '₹140', priceLarge: '₹200' },
        { name: 'Fudge Brownies & Jar Cakes', priceSmall: '₹130', priceLarge: '₹240' },
        { name: 'Cupcakes & Pastry Slices', priceSmall: '₹80', priceLarge: '₹290' },
      ],
    },
    {
      title: 'Custom studio upgrades',
      subtitle: 'Tailor any cake inside the Cake Lab.',
      sizeSmallLabel: 'Type',
      sizeLargeLabel: 'Add-on',
      items: [
        { name: 'Eggless Sponge', priceSmall: 'Per kg', priceLarge: '+₹100' },
        { name: 'Heart Shape', priceSmall: 'Shape', priceLarge: '+₹100' },
        { name: 'Two-Tier Party Cake', priceSmall: 'Tiered', priceLarge: '+₹400' },
        { name: 'Silky Choco Ganache', priceSmall: 'Finish', priceLarge: '+₹150' },
        { name: 'Semi-Fondant Accents', priceSmall: 'Finish', priceLarge: '+₹350' },
      ],
    },
  ],
];

export const CRAVING_OPTIONS: CravingOption[] = [
  {
    id: 'celebration',
    quadrant: 'top-left',
    moodLabel: 'Celebration',
    prompt: 'Party centerpiece',
    pointerAngle: -135,
    product: {
      name: 'Spanish Delight',
      tags: ['Praline crunch', 'Fresh cream'],
      description: 'Our Parippally icon layered with caramelized praline and chocolate drip.',
      price: '₹1,100',
      volume: '1 kg',
      image: ASSETS.spanishDelightCard,
      alt: 'Two-tier handcrafted Spanish Delight celebration cake with praline crunch and chocolate drip.',
    },
  },
  {
    id: 'savory',
    quadrant: 'top-right',
    moodLabel: 'Savory bite',
    prompt: 'Hangout snacks',
    pointerAngle: -45,
    product: {
      name: 'Loaded Cheese Fries',
      tags: ['Crispy fries', 'Melted cheese'],
      description: 'Golden fries drenched in house cheese sauce alongside burgers and momos.',
      price: '₹160',
      volume: 'Café bite',
      image: ASSETS.cafeBitesPhoto,
      alt: 'Loaded cheese fries, stacked burger, and momos served on a warm café table.',
    },
  },
  {
    id: 'chill',
    quadrant: 'bottom-left',
    moodLabel: 'Sweet chill',
    prompt: 'Thick & icy',
    pointerAngle: 135,
    product: {
      name: 'Belgian Oreo Shake',
      tags: ['Belgian choco', 'Crushed Oreo'],
      description: 'Thick, cold, and swirled with whipped cream and rich fudge drizzle.',
      price: '₹140',
      volume: 'Chilled',
      image: ASSETS.oreoShakePhoto,
      alt: 'Thick Belgian chocolate and crushed Oreo milkshake in a ribbed glass topped with whipped cream.',
    },
  },
  {
    id: 'treat',
    quadrant: 'bottom-right',
    moodLabel: 'Treat myself',
    prompt: 'Fudge & jars',
    pointerAngle: 45,
    product: {
      name: 'Fudge Brownies & Jars',
      tags: ['Dark cocoa', 'Fresh bake'],
      description: 'Warm gooey brownies, swirled cupcakes, and spoonable layered jar cakes.',
      price: '₹130',
      volume: 'Bakery',
      image: ASSETS.browniesPastriesPhoto,
      alt: 'Fudge brownies, cupcakes, and layered dessert jar cakes freshly baked at Fairy Cakes.',
    },
  },
];

export const BAKERY_TIME_SLOTS: BakeryTimeSlot[] = [
  {
    id: 'cake-dispatch',
    index: '01',
    chapterLabel: 'Morning ovens',
    hour: '10',
    minute: '00',
    period: 'am',
    title: 'Cake delivery opens',
    description: 'Fresh cream sponges chilled and frosted. First celebration cakes head out across Parippally.',
    illustration: ASSETS.crownAccent,
    tabIllustration: ASSETS.crownDark,
  },
  {
    id: 'cafe-opens',
    index: '02',
    chapterLabel: 'Dine-in doors',
    hour: '11',
    minute: '00',
    period: 'am',
    title: 'Café dine-in opens',
    description: 'Jawahar Junction lights up with chilled frappés, fresh pastry slices, and warm fudge brownies.',
    illustration: ASSETS.starOutlineAccent,
    tabIllustration: ASSETS.starOutlineDark,
  },
  {
    id: 'hangout-rush',
    index: '03',
    chapterLabel: 'Evening hangout',
    hour: '5',
    minute: '30',
    period: 'pm',
    title: 'Fries & shakes hour',
    description: 'Loaded cheese fries, juicy stacked burgers, and Belgian Oreo shakes take over every table.',
    illustration: ASSETS.heartOutlineAccent,
    tabIllustration: ASSETS.heartOutlineDark,
  },
  {
    id: 'midnight-surprise',
    index: '04',
    chapterLabel: 'Late celebrations',
    hour: '11',
    minute: '00',
    period: 'pm',
    title: 'Midnight surprise',
    description: 'Last café orders at 11:00 pm and scheduled midnight birthday deliveries right on cue.',
    illustration: ASSETS.plusOneAccent,
    tabIllustration: ASSETS.plusOneDark,
  },
];

export const CAFE_SPOTS: CafeSpot[] = [
  {
    id: 'cake-studio-counter',
    number: '01',
    title: 'Cake studio counter',
    description: 'Pick up your custom theme cake, browse chilled pastry slices, or sketch a design with our bakers.',
    hashtags: ['#99.9%accuracy', '#customcakes'],
    illustration: ASSETS.sunburstDark,
    hotspotClass: '_1',
  },
  {
    id: 'hangout-booths',
    number: '02',
    title: 'Hangout booths',
    description: 'Settle in near Mukkada Road with loaded cheese fries, artisan pizzas, and steaming momos.',
    hashtags: ['#parippallyhangout', '#cheesefries'],
    illustration: ASSETS.loupeDark,
    hotspotClass: '_2',
  },
  {
    id: 'shake-bar',
    number: '03',
    title: 'Shake & frappé bar',
    description: 'Order chilled Belgian Oreo shakes, frappés, and jar cakes blended and served fresh to order.',
    hashtags: ['#thickshakes', '#frappes'],
    illustration: ASSETS.energyDark,
    hotspotClass: '_3',
  },
  {
    id: 'party-corner',
    number: '04',
    title: 'Celebration table',
    description: 'Bring the whole crew for birthdays, surprise cake-cuttings, and late-night desserts until 11 PM.',
    hashtags: ['#birthdayspot', '#openuntil11pm'],
    illustration: ASSETS.smileDark,
    hotspotClass: '_4',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'ananya-nair',
    quote:
      'Sent them a custom theme cake reference on WhatsApp and they matched every single detail with 99.9% accuracy. The Spanish Delight praline inside was unforgettable.',
    rating: '5.0',
    author: 'Ananya Nair · Parippally',
  },
  {
    id: 'rahul-krishnan',
    quote:
      'Best hangout café in Parippally hands down! Came to pick up a Tres Leches birthday cake and stayed two hours for loaded cheese fries and Belgian Oreo shakes.',
    rating: '4.9',
    author: 'Rahul Krishnan · Kollam',
  },
  {
    id: 'devika-menon',
    quote:
      'Ordering from Fairy Cakes since 2016 and the quality never slips. Moist sponge, fresh cream, on-time midnight delivery, and genuinely warm hospitality.',
    rating: '5.0',
    author: 'Devika Menon · Mukkada',
  },
];

export const RECEIPT_ITEMS = [
  { label: 'Freshly baked', value: 'Since 2016' },
  { label: 'Theme accuracy', value: '99.9%' },
  { label: 'Google rating', value: '4.9 ★ (370+)' },
  { label: 'Café dine-in', value: '11AM–11PM' },
] as const;

// Interactive Cake Lab Data
export const CAKE_WEIGHTS: CakeWeightOption[] = [
  { id: '0.5kg', kg: 0.5, label: '0.5 kg', servings: '4–6 servings' },
  { id: '1kg', kg: 1, label: '1 kg', servings: '8–12 servings' },
  { id: '2kg', kg: 2, label: '2 kg', servings: '18–24 servings' },
  { id: '3kg', kg: 3, label: '3 kg', servings: '28–35 servings' },
];

export const CAKE_FLAVORS: CakeFlavorOption[] = [
  { id: 'black-forest', name: 'Black Forest', category: 'Fresh Cream', pricePerKg: 650 },
  { id: 'strawberry', name: 'Strawberry', category: 'Fresh Cream', pricePerKg: 750 },
  { id: 'pineapple', name: 'Pineapple', category: 'Fresh Cream', pricePerKg: 800 },
  { id: 'blueberry', name: 'Blueberry', category: 'Fresh Cream', pricePerKg: 900 },
  { id: 'choco-chip', name: 'Choco Chip', category: 'Crunchy & Premium', pricePerKg: 900 },
  { id: 'spanish-delight', name: 'Spanish Delight', category: 'Crunchy & Premium', pricePerKg: 1100 },
  { id: 'choco-orange', name: 'Choco Orange', category: 'Crunchy & Premium', pricePerKg: 1200 },
  { id: 'hazelnut', name: 'Hazelnut', category: 'Crunchy & Premium', pricePerKg: 1200 },
  { id: 'tres-leches', name: 'Tres Leches', category: 'Signature Specials', pricePerKg: 1300 },
  { id: 'kitkat-gems', name: 'KitKat & Gems', category: 'Signature Specials', pricePerKg: 1400 },
  { id: 'custom-theme', name: 'Custom Theme Cakes', category: 'Signature Specials', pricePerKg: null },
];

export const CAKE_SHAPES: CakeShapeOption[] = [
  { id: 'round', name: 'Classic Round', surcharge: 0 },
  { id: 'square', name: 'Modern Square', surcharge: 0 },
  { id: 'heart', name: 'Heart Shape', surcharge: 100 },
  { id: 'two-tier', name: 'Two-Tier Party', surcharge: 400 },
];

export const CAKE_FROSTINGS: CakeFrostingOption[] = [
  { id: 'fresh-cream', name: 'Whipped Fresh Cream', surcharge: 0 },
  { id: 'choco-ganache', name: 'Silky Choco Ganache', surcharge: 150 },
  { id: 'semi-fondant', name: 'Semi-Fondant Accents', surcharge: 350 },
  { id: 'full-3d-fondant', name: 'Full 3D Theme Fondant', surcharge: null },
];

export const CAKE_ADD_ONS: CakeAddOnOption[] = [
  { id: 'choco-chips', name: 'Extra Choco Chips', price: 80 },
  { id: 'praline', name: 'Caramelized Praline', price: 120 },
  { id: 'roasted-nuts', name: 'Roasted Almonds & Hazelnuts', price: 150 },
  { id: 'photo-print', name: 'Edible Photo Print', price: 250 },
  { id: 'macarons-gold', name: 'Macarons & Gold Leaf', price: 200 },
];

export const CAKE_TIME_SLOTS: CakeTimeSlotOption[] = [
  { id: 'morning', label: 'Morning (10:00 AM – 1:00 PM)', surcharge: 0 },
  { id: 'afternoon', label: 'Afternoon (1:00 PM – 5:00 PM)', surcharge: 0 },
  { id: 'evening', label: 'Evening (5:00 PM – 9:30 PM)', surcharge: 0 },
  { id: 'midnight', label: 'Midnight Surprise (11:00 PM)', surcharge: 150 },
];

export const DEFAULT_CAKE_CONFIG: CakeLabConfig = {
  weightId: '1kg',
  flavorId: 'spanish-delight',
  dietary: 'classic',
  shapeId: 'round',
  frostingId: 'fresh-cream',
  addOnIds: ['praline'],
  inscription: '',
  celebrationDate: '',
  fulfillment: 'delivery',
  timeSlotId: 'evening',
  includeSparklerKnife: true,
  hasReferencePhoto: false,
};

// Pure helper functions (unit-tested in fairyCakesData.test.ts)
export function formatInr(amount: number): string {
  const rounded = Math.round(amount);
  return `₹${rounded.toLocaleString('en-IN')}`;
}

export function calculateCakeEstimate(config: CakeLabConfig): CakeEstimate {
  const weight = CAKE_WEIGHTS.find((w) => w.id === config.weightId) ?? CAKE_WEIGHTS[1];
  const flavor = CAKE_FLAVORS.find((f) => f.id === config.flavorId) ?? CAKE_FLAVORS[5];
  const shape = CAKE_SHAPES.find((s) => s.id === config.shapeId) ?? CAKE_SHAPES[0];
  const frosting = CAKE_FROSTINGS.find((f) => f.id === config.frostingId) ?? CAKE_FROSTINGS[0];
  const timeSlot = CAKE_TIME_SLOTS.find((t) => t.id === config.timeSlotId) ?? CAKE_TIME_SLOTS[2];

  const isCustomQuote = flavor.pricePerKg === null || frosting.surcharge === null;
  const lineItems: CakePriceLineItem[] = [];

  let runningTotal = 0;

  if (flavor.pricePerKg === null) {
    lineItems.push({ label: `${flavor.name} (${weight.label})`, amount: null });
  } else {
    const basePrice = Math.round(flavor.pricePerKg * weight.kg);
    runningTotal += basePrice;
    lineItems.push({ label: `${flavor.name} (${weight.label})`, amount: basePrice });
  }

  if (config.dietary === 'eggless') {
    const egglessCharge = Math.round(100 * weight.kg);
    runningTotal += egglessCharge;
    lineItems.push({ label: `Eggless Sponge (${weight.label})`, amount: egglessCharge });
  }

  if (shape.surcharge > 0) {
    runningTotal += shape.surcharge;
    lineItems.push({ label: shape.name, amount: shape.surcharge });
  }

  if (frosting.surcharge === null) {
    lineItems.push({ label: frosting.name, amount: null });
  } else if (frosting.surcharge > 0) {
    runningTotal += frosting.surcharge;
    lineItems.push({ label: frosting.name, amount: frosting.surcharge });
  }

  for (const addOnId of config.addOnIds) {
    const addOn = CAKE_ADD_ONS.find((item) => item.id === addOnId);
    if (addOn) {
      runningTotal += addOn.price;
      lineItems.push({ label: addOn.name, amount: addOn.price });
    }
  }

  if (timeSlot.surcharge > 0) {
    runningTotal += timeSlot.surcharge;
    lineItems.push({ label: timeSlot.label, amount: timeSlot.surcharge });
  }

  return {
    isCustomQuote,
    total: isCustomQuote ? null : runningTotal,
    weightLabel: weight.label,
    flavorName: flavor.name,
    shapeName: shape.name,
    frostingName: frosting.name,
    timeSlotLabel: timeSlot.label,
    lineItems,
  };
}

export function buildWhatsAppOrderUrl(
  config: CakeLabConfig,
  estimate: CakeEstimate
): string {
  const selectedAddOns = config.addOnIds
    .map((id) => CAKE_ADD_ONS.find((item) => item.id === id)?.name)
    .filter((name): name is string => Boolean(name));

  const lines = [
    'Hi Fairy Cakes Parippally! I built a custom cake in the Cake Lab:',
    `• Flavor: ${estimate.flavorName} (${config.dietary === 'eggless' ? 'Eggless' : 'Classic Sponge'})`,
    `• Weight: ${estimate.weightLabel}`,
    `• Shape: ${estimate.shapeName}`,
    `• Frosting: ${estimate.frostingName}`,
    `• Add-ons: ${selectedAddOns.length > 0 ? selectedAddOns.join(', ') : 'None'}`,
    `• Inscription: ${config.inscription.trim() || 'None'}`,
    `• Fulfillment: ${config.fulfillment === 'delivery' ? 'Local Delivery (Parippally)' : 'Café Pickup (Jawahar Junction)'}`,
    `• Date: ${config.celebrationDate || 'To be confirmed'}`,
    `• Time Slot: ${estimate.timeSlotLabel}`,
    `• Sparkler Candle & Knife: ${config.includeSparklerKnife ? 'Yes' : 'No'}`,
    `• Reference Theme Photo: ${config.hasReferencePhoto ? 'Will share in chat' : 'No'}`,
    `• Estimated Total: ${estimate.isCustomQuote || estimate.total === null ? 'Custom Quote' : formatInr(estimate.total)}`,
  ];

  return `https://wa.me/?text=${encodeURIComponent(lines.join('\n'))}`;
}

export function getNextSlideIndex(current: number, total: number): number {
  if (total <= 0) return 0;
  return (current + 1) % total;
}

export function getPrevSlideIndex(current: number, total: number): number {
  if (total <= 0) return 0;
  return (current - 1 + total) % total;
}

export function getWheelArrowAngle(cravingId: CravingOption['id']): number {
  const found = CRAVING_OPTIONS.find((item) => item.id === cravingId);
  return found ? found.pointerAngle : -135;
}

export function formatSpotCounter(index: number, total: number): string {
  const current = String(Math.min(Math.max(index + 1, 1), total)).padStart(2, '0');
  const totalStr = String(total).padStart(2, '0');
  return `${current}/${totalStr}`;
}

export function formatIndianTime(
  hour: string,
  minute: string,
  period: 'am' | 'pm'
): string {
  return `${hour}:${minute} ${period}`;
}
