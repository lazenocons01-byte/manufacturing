import type { IndustryItem } from '../types';

export const industriesData: IndustryItem[] = [
  {
    id: 'automotive',
    slug: 'automotive',
    name: 'Automotive Manufacturing',
    tagline: 'High-precision assembly, supplier JIT scheduling, and digital vehicle twins',
    description: 'Transform automotive assembly lines with real-time torque monitoring, robotic welding telemetry, and synchronized supplier just-in-time logistics.',
    imageUrl: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1000&q=80',
    iconName: 'Car',
    keyChallenges: [
      'Strict multi-tier supplier synchronization for thousands of precision components',
      'Massive downtime penalties exceeding $20,000 per minute on stalled assembly lines',
      'Stringent traceability standards for safety-critical chassis and powertrain parts'
    ],
    machvexSolutions: [
      'Sub-millisecond robotic arm telemetry and automated torque audit capture',
      'Digital Twin simulation to test line retooling before physical implementation',
      'End-to-end component serialization linked to vehicle VIN databases'
    ],
    impactStats: [
      { label: 'Line Stoppage Reduction', value: '47%' },
      { label: 'Supplier JIT Precision', value: '99.4%' },
      { label: 'Quality Audit Time', value: '-65%' }
    ]
  },
  {
    id: 'food-beverage',
    slug: 'food-beverage',
    name: 'Food & Beverage Processing',
    tagline: 'Continuous cold-chain integrity, recipe consistency, and rapid packaging sync',
    description: 'Ensure food safety compliance, eliminate batch spoilage, and synchronize high-speed bottling lines directly with grocery distribution networks.',
    imageUrl: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?auto=format&fit=crop&w=1000&q=80',
    iconName: 'Utensils',
    keyChallenges: [
      'Short perishability windows requiring strict FIFO and dynamic price promotions',
      'Stringent FDA / FSMA temperature and sanitary batch documentation',
      'High seasonal demand swings for perishable agricultural inputs'
    ],
    machvexSolutions: [
      'Continuous IoT cold-chain temperature telemetry from factory vat to supermarket shelf',
      'Automated batch recipe management ensuring ingredient precision and allergen separation',
      'Predictive shelf-life algorithms linking production dates to retail markdown cues'
    ],
    impactStats: [
      { label: 'Perishable Spoilage Cut', value: '38%' },
      { label: 'Batch Compliance Rate', value: '100%' },
      { label: 'Packaging Line Speed', value: '+26%' }
    ]
  },
  {
    id: 'pharmaceuticals',
    slug: 'pharmaceuticals',
    name: 'Pharmaceuticals & MedTech',
    tagline: '21 CFR Part 11 compliant execution, batch serialization, and cleanroom monitoring',
    description: 'Maintain unimpeachable regulatory compliance, environmental cleanroom telemetry, and end-to-end pharmaceutical track-and-trace serialization.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1000&q=80',
    iconName: 'Activity',
    keyChallenges: [
      'Rigorous regulatory verification, electronic signatures, and immutable audit logs',
      'Ultra-sensitive temperature, humidity, and particle limits in sterile cleanrooms',
      'Global counterfeit drug threats requiring tamper-evident unit-level serialization'
    ],
    machvexSolutions: [
      'Pre-validated 21 CFR Part 11 audit trails with cryptographic digital signatures',
      'Real-time differential pressure, airborne particle, and HVAC monitoring',
      'GS1-compliant DataMatrix barcode serialization tracking from blister pack to pharmacy dispensing'
    ],
    impactStats: [
      { label: 'Validation Cycle Time', value: '-55%' },
      { label: 'Serialization Accuracy', value: '100%' },
      { label: 'Batch Release Speed', value: '3x' }
    ]
  },
  {
    id: 'electronics',
    slug: 'electronics',
    name: 'Electronics & Hardware',
    tagline: 'Micro-precision SMT inspection, component lot traceability, and yield analytics',
    description: 'Power high-yield surface-mount technology (SMT) lines, micro-component placement monitoring, and instant yield anomaly containment.',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80',
    iconName: 'Cpu',
    keyChallenges: [
      'Extremely high component density where microscopic soldering defects ruin entire boards',
      'Rapidly depreciating inventory and short consumer electronics product lifecycles',
      'Volatile semiconductor supply chain allocations'
    ],
    machvexSolutions: [
      'High-speed optical inspection (AOI) machine learning models detecting microscopic solder bridges',
      'Real-time component reel consumption tracking preventing SMT feeder runouts',
      'Closed-loop feedback adjusting solder paste printer parameters dynamically'
    ],
    impactStats: [
      { label: 'First-Pass Yield Uplift', value: '+14%' },
      { label: 'SMT Feeder Changeover', value: '-40%' },
      { label: 'Component Scrappage', value: '-29%' }
    ]
  },
  {
    id: 'textile',
    slug: 'textile',
    name: 'Textile & Apparel',
    tagline: 'Agile apparel production, fabric waste reduction, and fast-fashion retail sync',
    description: 'Bridge textile mills, garment assembly factories, and fashion retail outlets with dynamic style variant scheduling and automated fabric cut-nesting.',
    imageUrl: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1000&q=80',
    iconName: 'Scissors',
    keyChallenges: [
      'Complex size/color/style matrix multiplying SKU proliferation risks',
      'High raw material textile waste during cutting operations',
      'Rapid demand shifts driven by social media trends requiring short turnaround'
    ],
    machvexSolutions: [
      'Algorithmic fabric pattern nesting maximizing material utilization',
      'Direct-to-garment line balancing based on live retail sell-through signals',
      'RFID garment tagging providing instant store inventory counts'
    ],
    impactStats: [
      { label: 'Fabric Yield Gain', value: '+18%' },
      { label: 'Order-to-Store Cycle', value: '-35%' },
      { label: 'Store Size Accuracy', value: '99.1%' }
    ]
  },
  {
    id: 'fmcg',
    slug: 'fmcg',
    name: 'Consumer Packaged Goods (FMCG)',
    tagline: 'High-volume velocity, promotional spike cushioning, and distributor orchestration',
    description: 'Balance relentless high-speed packaging lines with regional promotional campaigns and multi-channel hypermarket distribution.',
    imageUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1000&q=80',
    iconName: 'PackageCheck',
    keyChallenges: [
      'Unpredictable demand spikes caused by regional marketing campaigns and discounts',
      'Thin operating margins susceptible to packaging material inflation',
      'Retailer out-of-stock penalties and distributor chargebacks'
    ],
    machvexSolutions: [
      'Promotional lift machine learning models synchronizing factory batch runs with media calendars',
      'Automated pallet wrapper and carton packer line throughput telemetry',
      'Direct store delivery (DSD) electronic proof-of-delivery routing'
    ],
    impactStats: [
      { label: 'Promo Fill-Rate', value: '99.5%' },
      { label: 'Distribution Cost', value: '-16%' },
      { label: 'Packaging Scrap', value: '-24%' }
    ]
  },
  {
    id: 'warehousing',
    slug: 'warehousing',
    name: 'Warehousing & 3PL Logistics',
    tagline: 'Automated cross-docking, AGV fleet management, and dynamic slotting',
    description: 'Maximize cubic warehouse space, coordinate automated guided vehicles (AGVs), and turn distribution centers into high-velocity throughput engines.',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80',
    iconName: 'Boxes',
    keyChallenges: [
      'Congested dock doors and lengthy driver wait times during shift turnovers',
      'Labor shortages and worker fatigue in expansive multi-acre facilities',
      'Suboptimal slotting leading to excessive pick-and-pack travel distances'
    ],
    machvexSolutions: [
      'AI dynamic slotting engine placing fast-moving SKUs closest to dispatch docks',
      'Interoperable AGV/AMR robot orchestration sharing paths safely with human pickers',
      'Digital dock appointment management eliminating yard truck congestion'
    ],
    impactStats: [
      { label: 'Pick Rate Increase', value: '+45%' },
      { label: 'Dock Turn Time', value: '-52%' },
      { label: 'Storage Density Gain', value: '+28%' }
    ]
  },
  {
    id: 'retail-supermarkets',
    slug: 'retail-supermarkets',
    name: 'Retail & Supermarket Chains',
    tagline: 'Smart shelf-edge sensors, frictionless POS, and real-time inventory visibility',
    description: 'Empower retail supermarket operators with modern point-of-sale resilience, instant shelf out-of-stock detection, and personalized customer loyalty.',
    imageUrl: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=80',
    iconName: 'ShoppingCart',
    keyChallenges: [
      'Long checkout queues causing frustrated customers and lost sales',
      'Phantom out-of-stocks where items sit in backrooms rather than customer shelves',
      'Shrinkage and retail inventory leakage eating store profitability'
    ],
    machvexSolutions: [
      'Hybrid self-checkout and assisted POS with sub-second optical barcode decoding',
      'Overhead vision and weight-sensing smart shelves alerting store staff for immediate restock',
      'Unified omnichannel inventory enabling instant Click & Collect fulfillment'
    ],
    impactStats: [
      { label: 'Queue Wait Time', value: '-60%' },
      { label: 'On-Shelf Availability', value: '99.2%' },
      { label: 'Basket Size Uplift', value: '+19%' }
    ]
  }
];
