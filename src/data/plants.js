// ============================================================
//  PLANTS DATA
//  Edit this file to add / change plant names, descriptions,
//  care tips, colors, and badges.
// ============================================================

const PLANTS = [
  {
    id: 1,
    emoji: '🌿',
    tag: 'Aglonima',
    badge: 'Best Seller',                          // null = no badge
    name: 'Aglonima Silverqueen',
    latin: 'Aglaonema commutatum',
    color: 'linear-gradient(135deg, #1a4d35 0%, #2d7a50 100%)',
    desc: 'Elegant silver-green variegated leaves. Thrives in low light — perfect for indoors.',
    care: ['Low Light', 'Weekly Water', 'Indirect Sun'],
    details:
      'The Silverqueen is one of the most popular Aglaonema varieties, admired for its stunning silver and green foliage. Each leaf features unique irregular silver patches that create a natural metallic sheen. It tolerates low light and purifies indoor air by filtering common toxins.',
  },
  {
    id: 2,
    emoji: '🌺',
    tag: 'Aglonima',
    badge: 'Hot Pick',
    name: 'Aglonima Red Siam',
    latin: 'Aglaonema siam aurora',
    color: 'linear-gradient(135deg, #6b1a1a 0%, #c0392b 100%)',
    desc: 'Vibrant red and green foliage that adds dramatic tropical flair to any space.',
    care: ['Bright Indirect', 'Weekly Water', 'Humid Env'],
    details:
      'Red Siam is a bold statement plant with vivid red, pink and green variegated leaves. The intense colour deepens with bright indirect light. Native to Thailand, this variety brings a lush tropical atmosphere indoors and is highly resistant to pests.',
  },
  {
    id: 3,
    emoji: '🍃',
    tag: 'Aglonima',
    badge: null,
    name: 'Aglonima Maria',
    latin: 'Aglaonema maria',
    color: 'linear-gradient(135deg, #1a3d2b 0%, #4a9968 100%)',
    desc: 'Deep green leaves with silver markings. A classic, air-purifying indoor favourite.',
    care: ['Low Light', 'Bi-Weekly Water', 'Humidity'],
    details:
      'Aglaonema Maria features dark green leaves adorned with silvery grey markings along the midrib and edges. One of the most tolerant houseplants available — perfect for beginners who want lush, year-round greenery.',
  },
  {
    id: 4,
    emoji: '🌱',
    tag: 'Aglonima',
    badge: 'New',
    name: 'Aglonima Mix',
    latin: 'Aglaonema mixed varieties',
    color: 'linear-gradient(135deg, #2d5c40 0%, #6aab88 100%)',
    desc: 'A curated collection of multiple Aglonima varieties in one planter.',
    care: ['Adaptable', 'Weekly Water', 'Any Light'],
    details:
      'Our Aglonima Mix brings together several stunning varieties for a striking multi-colour display — shades of green, silver, red, and pink. Ideal for large indoor spaces, hotel lobbies, or as a bold statement piece. Each mix is uniquely arranged.',
  },
  {
    id: 5,
    emoji: '✨',
    tag: 'Aglonima',
    badge: 'Rare',
    name: 'Aglonima Sudobactin',
    latin: 'Aglaonema sudobactin',
    color: 'linear-gradient(135deg, #1a3a4d 0%, #2e7d9b 100%)',
    desc: 'A rare and exotic variety with extraordinary leaf patterning. Sought after by collectors.',
    care: ['Medium Light', 'Careful Water', 'High Humidity'],
    details:
      'Sudobactin is a collector\'s variety with extraordinary markings unlike any other Aglaonema. Native to Southeast Asian tropical forests, it rewards dedicated growers with spectacular foliage that becomes a true conversation piece.',
  },
  {
    id: 6,
    emoji: '🌟',
    tag: 'Sandriyana',
    badge: 'Signature',
    name: 'Sandriyana Gold',
    latin: 'Sandriyana aureus',
    color: 'linear-gradient(135deg, #4d3a1a 0%, #c9a84c 100%)',
    desc: 'Our signature gold-variegated plant — the crown jewel of the Sandriyana collection.',
    care: ['Bright Light', 'Weekly Water', 'Well-Drained'],
    details:
      'Sandriyana Gold is our most prestigious variety, named after the estate itself. Its golden-variegated leaves shimmer in natural light. Developed exclusively at Sandriyana Estate through years of careful cultivation — each plant comes with a certificate of authenticity.',
  },
  {
    id: 7,
    emoji: '🤍',
    tag: 'Sandriyana',
    badge: 'Exclusive',
    name: 'Sandriyana White',
    latin: 'Sandriyana albus',
    color: 'linear-gradient(135deg, #2d3a4d 0%, #6b8fad 100%)',
    desc: 'Crisp white and green variegated foliage that radiates elegance and sophistication.',
    care: ['Medium Light', 'Regular Water', 'Filtered Sun'],
    details:
      'Sandriyana White features pristine white variegation on lush green leaves. The white patterns are stable and do not revert to green, maintaining their striking appearance year-round — perfect for modern, minimalist interiors.',
  },
  {
    id: 8,
    emoji: '🏆',
    tag: 'Sandriyana',
    badge: 'Award Winner',
    name: 'Sandriyana Victory',
    latin: 'Sandriyana victoria',
    color: 'linear-gradient(135deg, #1a2d1a 0%, #3d7a3d 100%)',
    desc: 'Award-winning variety with exceptional vigour and stunning multi-toned foliage.',
    care: ['Bright Indirect', 'Twice Weekly', 'High Nutrition'],
    details:
      'Sandriyana Victory has won multiple regional horticultural awards for its exceptional beauty. The leaves display deep green, silver, and cream tones that shift with changing light. A trophy plant for serious enthusiasts.',
  },
  {
    id: 9,
    emoji: '💰',
    tag: 'Indoor',
    badge: 'Lucky Plant',
    name: 'Money Plant Gold',
    latin: 'Epipremnum aureum',
    color: 'linear-gradient(135deg, #1a3d1a 0%, #5c9940 100%)',
    desc: 'The classic luck-bringing money plant in a premium golden variety. Easy and fast-growing.',
    care: ['Low Light', 'Easy Care', 'Fast Growing'],
    details:
      'The Money Plant Gold is beloved across Southeast Asia, traditionally believed to bring good fortune and positive energy. Its golden heart-shaped leaves grow enthusiastically in almost any condition — incredibly easy to propagate and share.',
  },
  {
    id: 10,
    emoji: '🌴',
    tag: 'Tropical',
    badge: null,
    name: 'Thaliyodi',
    latin: 'Codiaeum variegatum',
    color: 'linear-gradient(135deg, #1a1a1a 0%, #4a3d1a 50%, #2d5c1a 100%)',
    desc: 'Multi-colored tropical leaves in red, orange, yellow, and green — a visual masterpiece.',
    care: ['Full Sun', 'Regular Water', 'Warm Temp'],
    details:
      'Thaliyodi (Croton) paints its leaves in a spectacular palette of red, orange, yellow, green, and deep purple. In Sri Lankan culture it holds traditional significance, often found adorning temple gardens. A living work of art for tropical gardens.',
  },
  {
    id: 11,
    emoji: '🎨',
    tag: 'Sandriyana',
    badge: 'Custom',
    name: 'Sandriyana Decoration',
    latin: 'Curated estate arrangements',
    color: 'linear-gradient(135deg, #2d1a4d 0%, #6b3d9b 50%, #1a3d2b 100%)',
    desc: 'Bespoke decorative plant arrangements curated by our expert team for any space.',
    care: ['Custom Care', 'Service Incl.', 'Consultation'],
    details:
      'Sandriyana Decoration is our premium bespoke arrangement service. Our expert horticulturists create custom plant displays tailored to your space and aesthetic — from intimate home setups to large corporate installations. Includes consultation and professional installation.',
  },
];

export default PLANTS;
