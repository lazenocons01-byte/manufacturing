import type { CaseStudyItem } from '../types';

export const caseStudiesData: CaseStudyItem[] = [
  {
    id: 'cs-automotive-tier1',
    slug: 'automotive-tier1-robotics',
    title: 'Precision Robotic Assembly Line Telemetry & JIT Supplier Orchestration',
    clientType: 'Global Tier-1 Powertrain Manufacturer (Demonstration Case)',
    industry: 'Automotive',
    location: 'Stuttgart & Michigan Operations',
    heroImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    challenge: 'High unplanned downtime on multi-axis robotic welding cells caused cascading delays across four downstream vehicle assembly plants, resulting in steep contractual SLA penalties and manual root-cause investigations taking up to 18 hours per incident.',
    solution: 'Machvex deployed edge IoT collectors across 140 industrial robots, capturing continuous vibration, torque, and thermal signatures into Machvex Smart Manufacturing. Machine learning anomaly detection was configured alongside automated supplier replenishment triggers.',
    technologiesUsed: ['Machvex Smart Manufacturing', 'Industrial Edge Gateway', 'Predictive Maintenance ML', 'Automated JIT Scheduler'],
    metrics: [
      { label: 'Unscheduled Downtime', value: '-58%', change: 'decreased' },
      { label: 'First-Pass Yield', value: '99.6%', change: 'increased' },
      { label: 'Annual Cost Savings', value: '$3.4M', change: 'saved' }
    ],
    quote: {
      text: 'Connecting our shop-floor robotic metrics directly into the production scheduling platform reduced our weekly incident response time from hours to single-digit minutes.',
      author: 'Operations Director',
      role: 'Head of Global Manufacturing Automation',
      organization: 'Tier-1 Automotive Enterprise'
    },
    summary: 'A unified deployment linking 140 robotic workstations to eliminate unexpected micro-stoppages and ensure uninterrupted assembly supply.'
  },
  {
    id: 'cs-retail-omnichannel',
    slug: 'retail-supermarket-chain',
    title: 'Modern Supermarket Network Real-Time POS & Dynamic Shelf Restocking',
    clientType: 'National Grocery & Supermarket Network (Demonstration Case)',
    industry: 'Retail',
    location: '420 Storefronts Nationwide',
    heroImage: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=1200&q=80',
    challenge: 'Persistent phantom inventory led to 14% out-of-stock rates on core staple goods during weekend peak rushes, even though items existed in backroom stockrooms. Disconnected legacy POS systems also created checkout queues exceeding 8 minutes.',
    solution: 'Machvex Retail Operations and Inventory Intelligence were rolled out across all 420 storefronts, introducing hybrid cloud POS with sub-second optical scanning and automated handheld task queues alerting associates to replenish low-shelf inventory.',
    technologiesUsed: ['Machvex Retail Operations', 'Cloud POS Engine', 'Shelf-Edge IoT', 'Mobile Clienteling App'],
    metrics: [
      { label: 'Checkout Throughput', value: '+42%', change: 'faster' },
      { label: 'On-Shelf Stock Availability', value: '99.1%', change: 'maintained' },
      { label: 'Customer Retention Rate', value: '+26%', change: 'increased' }
    ],
    quote: {
      text: 'Our store associates now know exactly what needs restocking before the customer even notices an empty shelf slot. The checkout velocity has completely transformed our peak store hours.',
      author: 'VP of Retail Operations',
      role: 'Vice President of Store Systems',
      organization: 'National Supermarket Group'
    },
    summary: '420 retail supermarkets transformed with unified cloud POS, smart shelf alerts, and instant backroom-to-shelf replenishment.'
  },
  {
    id: 'cs-beverage-coldchain',
    slug: 'beverage-distribution-sync',
    title: 'End-to-End Beverage Bottling & Temperature-Controlled Distribution Sync',
    clientType: 'Regional Beverage & Dairy Producer (Demonstration Case)',
    industry: 'Food & Beverage',
    location: 'Multi-State Distribution Network',
    heroImage: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?auto=format&fit=crop&w=1200&q=80',
    challenge: 'High-speed bottling lines experienced frequent packaging line misfeeds, while lack of continuous refrigerated truck temperature logging resulted in costly batch rejections during interstate distribution.',
    solution: 'Machvex connected bottling conveyor sensors to Machvex Supply Chain Sync and deployed cellular IoT environmental trackers across the refrigerated freight fleet, providing end-to-end visibility from canning filler to store loading docks.',
    technologiesUsed: ['Machvex Supply Chain Sync', 'Cold-Chain IoT Loggers', 'Automated Bottling Telemetry', 'Dynamic Yard Manager'],
    metrics: [
      { label: 'Batch Spoilage Incidents', value: '0', change: 'zero defect' },
      { label: 'Bottling Throughput Rate', value: '+31%', change: 'increased' },
      { label: 'Freight Dock Turnaround', value: '-48%', change: 'faster' }
    ],
    quote: {
      text: 'We now have an unbroken digital audit trail from the exact moment liquid enters the container on the factory line until it arrives in the supermarket refrigerated display case.',
      author: 'Chief Supply Chain Officer',
      role: 'Executive CSCO',
      organization: 'Integrated Beverage Enterprise'
    },
    summary: 'Unbroken IoT cold-chain traceability and bottling line automation linking factory output directly to retail distribution.'
  },
  {
    id: 'cs-pharma-serialization',
    slug: 'pharma-serialization-compliance',
    title: 'Pharmaceutical 21 CFR Part 11 Serialization & Cleanroom Environmental Intelligence',
    clientType: 'Biotech Formulation & Packaging Facility (Demonstration Case)',
    industry: 'Pharmaceuticals',
    location: 'Research Triangle Park, NC',
    heroImage: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1200&q=80',
    challenge: 'Manual batch record transcription required up to 14 days of secondary review prior to product release, and cleanroom environmental excursions were identified retroactively rather than prevented in real time.',
    solution: 'Machvex implemented digital batch execution with real-time particle/differential pressure alarms, cryptographic e-signatures, and automated GS1 DataMatrix serialization tracking.',
    technologiesUsed: ['Machvex Smart Manufacturing', '21 CFR Part 11 Engine', 'Cleanroom Telemetry', 'GS1 Serialization'],
    metrics: [
      { label: 'Batch Release Time', value: '-72%', change: 'faster' },
      { label: 'Regulatory Audit Readiness', value: '100%', change: 'compliant' },
      { label: 'Environmental Deviations', value: '-84%', change: 'reduced' }
    ],
    quote: {
      text: 'Electronic batch release with immutable cryptographic verification cut our time-to-market by nearly two full weeks per batch run.',
      author: 'Quality Assurance Director',
      role: 'Global Regulatory & Quality Head',
      organization: 'Biotech Solutions'
    },
    summary: 'Automated electronic batch records, cleanroom compliance, and unit serialization deployed for pharmaceutical manufacturing.'
  }
];
