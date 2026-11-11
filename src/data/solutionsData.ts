import type { SolutionItem } from '../types';

export const solutionsData: SolutionItem[] = [
  {
    id: 'smart-manufacturing',
    slug: 'manufacturing',
    title: 'Smart Manufacturing',
    subtitle: 'High-precision industrial automation, shop floor IoT, and zero-defect execution',
    category: 'manufacturing',
    description: 'Automate production, ensure quality, and improve output with connected industrial IoT and real-time machine telemetry.',
    iconName: 'Factory',
    overview: 'Machvex Smart Manufacturing bridges legacy PLC/SCADA industrial controllers with modern cloud intelligence. Capture millisecond telemetry across automated production lines, eliminate unplanned downtime through predictive maintenance, and orchestrate dynamic scheduling across multi-site production facilities.',
    features: [
      'Industrial IoT Telemetry & Edge Gateway Integration (OPC-UA, MQTT, Modbus)',
      'Real-Time Overall Equipment Effectiveness (OEE) Tracking & Bottleneck Detection',
      'Automated Computer-Vision Quality Assurance & Defect Classification',
      'Predictive Maintenance Algorithms with Acoustic and Vibration Anomaly Triggers',
      'Digital Twin Factory Simulation for Work-in-Progress (WIP) Optimization',
      'Dynamic Recipe & Batch Configuration with ERP Bi-directional Sync'
    ],
    metrics: [
      { label: 'OEE Uplift', value: '+34%' },
      { label: 'Unplanned Downtime', value: '-62%' },
      { label: 'Defect Reduction', value: '99.4%' },
      { label: 'Production Throughput', value: '+28%' }
    ],
    challenges: [
      'Siloed machinery and disparate vendor proprietary protocols',
      'Reactive maintenance leading to catastrophic unscheduled stoppage',
      'Manual quality checks resulting in escaped batch anomalies',
      'Latency between order changes and floor rescheduling'
    ],
    workflows: [
      { step: 1, title: 'Edge Protocol Translation', desc: 'Secure industrial gateways connect to PLCs, sensors, and robotics with zero network latency.' },
      { step: 2, title: 'Telemetry Ingestion & Filtering', desc: 'High-frequency telemetry processed at the local edge, streaming clean state matrices to the central node.' },
      { step: 3, title: 'Real-Time Machine Learning', desc: 'Models continuously score equipment wear, cycle times, and thermal boundaries against tolerances.' },
      { step: 4, title: 'Automated Factory Orchestration', desc: 'Adaptive production adjustments execute directly to conveyor systems and robotic staging stations.' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'retail-operations',
    slug: 'retail',
    title: 'Retail Operations',
    subtitle: 'Unified store operations, intelligent POS, and frictionless customer journeys',
    category: 'retail',
    description: 'Manage stores, sales, and customer experience seamlessly with modern retail checkout and omnichannel visibility.',
    iconName: 'Store',
    overview: 'Machvex Retail Operations elevates brick-and-mortar storefronts into connected retail hubs. Eliminate phantom inventory, streamline checkout velocity with unified cloud POS, empower store associates with handheld clienteling apps, and dynamically align store merchandising with verified local footfall heatmaps.',
    features: [
      'Next-Gen Cloud POS with Offline Resilience and Sub-Second Processing',
      'Shelf-Edge Digital Displays & Camera-Aided Out-of-Stock Alerts',
      'Associate Mobile Clienteling, Unified Returns, and Endless Aisle Access',
      'Store Footfall Density Analytics and Customer Path Heatmapping',
      'Omnichannel Order Routing (BOPIS, Curbside, Ship-from-Store)',
      'Automated Shrinkage and Loss Prevention Correlation'
    ],
    metrics: [
      { label: 'Checkout Speed', value: '2.4x' },
      { label: 'Store Revenue Uplift', value: '+42%' },
      { label: 'Inventory Accuracy', value: '99.2%' },
      { label: 'Associate Productivity', value: '+35%' }
    ],
    challenges: [
      'Legacy POS systems failing during peak network outages',
      'Discrepancies between inventory counts on shelves vs online portals',
      'Lengthy checkout queues driving cart abandonment',
      'Disconnected store staff lacking immediate inventory visibility'
    ],
    workflows: [
      { step: 1, title: 'Edge Cloud Store Deployment', desc: 'Local store controller operates independently even during complete Internet carrier blackouts.' },
      { step: 2, title: 'Continuous POS & Shelf Sync', desc: 'Barcode scans, RFID tunnels, and smart scales update central inventory in under 50 milliseconds.' },
      { step: 3, title: 'Associate Action Dispatch', desc: 'Automated task queues notify floor staff the moment an aisle SKU reaches minimum presentation depth.' },
      { step: 4, title: 'Seamless Customer Handshake', desc: 'Omnichannel receipts, loyalty tiers, and contactless payments process via one unified ledger.' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'inventory-intelligence',
    slug: 'inventory',
    title: 'Inventory Intelligence',
    subtitle: 'Autonomous multi-echelon stock visibility from factory buffer to retail display',
    category: 'cross-platform',
    description: 'Real-time stock visibility across factory and retail, eliminating stockouts while optimizing working capital.',
    iconName: 'Layers',
    overview: 'No more guessing what is in transit, what is resting on warehouse pallets, and what is currently sitting on the front retail shelf. Machvex Inventory Intelligence tracks goods across every transitional stage, utilizing machine learning to auto-tune dynamic safety stocks and trigger automated procurement batches.',
    features: [
      'Multi-Echelon Real-Time Stock Tracking (Raw, WIP, Finished, In-Transit, On-Shelf)',
      'Predictive Safety Stock Optimization Factoring Supplier Variability',
      'Automated Reorder Triggering & Vendor Purchase Order Auto-Generation',
      'RFID, BLE Beacon, and Barcode Mobile Scanning Compatibility',
      'Batch Expiry & First-In-First-Out (FIFO) Enforcement for Perishables',
      'Cross-Store Stock Rebalancing Recommendations'
    ],
    metrics: [
      { label: 'Stockout Reduction', value: '-87%' },
      { label: 'Holding Cost Savings', value: '24%' },
      { label: 'Cycle Count Time', value: '-70%' },
      { label: 'Fulfillment Rate', value: '99.9%' }
    ],
    challenges: [
      'Capital trapped in slow-moving overstock while top sellers stock out',
      'Phantom inventory discrepancies discovered only during manual audits',
      'Perishable spoilage resulting from lack of real-time expiration monitoring',
      'Disconnected spreadsheets across regional distribution hubs'
    ],
    workflows: [
      { step: 1, title: 'Unified Item Serialization', desc: 'Unique item or pallet IDs tracked from factory packing to store shelf arrival.' },
      { step: 2, title: 'Continuous Velocity Scoring', desc: 'Sales run-rate and transit speeds calculated continuously per SKU per postal zone.' },
      { step: 3, title: 'Autonomous Reorder Signaling', desc: 'Replenishment triggers generated automatically before safety buffer thresholds breached.' },
      { step: 4, title: 'Automated Cross-Dock Routing', desc: 'Inbound factory shipments routed directly to high-demand retail stores without double-handling.' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'supply-chain-sync',
    slug: 'supply-chain',
    title: 'Supply Chain Sync',
    subtitle: 'Synchronized procurement, multimodal logistics, and dynamic carrier dispatch',
    category: 'cross-platform',
    description: 'Unify procurement, production, and distribution through real-time demand sensing and automated carrier orchestration.',
    iconName: 'Truck',
    overview: 'Machvex Supply Chain Sync harmonizes external supplier tiers with internal manufacturing lines and downstream retail distribution networks. Transform reactive expediting into proactive operational precision through real-time GPS freight telemetry and automated port congestion rerouting.',
    features: [
      'End-to-End Multimodal Shipment Tracking with Ambient Temperature Monitoring',
      'Supplier Collaboration Portal for Real-Time Advance Shipping Notices (ASNs)',
      'Automated Freight Rate Auditing and Route Optimization Engine',
      'Port and Customs Delay Early Warning System',
      'Dynamic Yard & Dock Door Appointment Scheduling',
      'Carbon-Optimized Fleet Dispatch and Fuel Consumption Analytics'
    ],
    metrics: [
      { label: 'On-Time Delivery (OTIF)', value: '98.8%' },
      { label: 'Freight Cost Reduction', value: '18%' },
      { label: 'Transit Lead Time', value: '-22%' },
      { label: 'Dock Turnaround Time', value: '-45%' }
    ],
    challenges: [
      'Lack of visibility once shipments exit factory shipping bays',
      'Detention and demurrage fees due to manual dock scheduling bottlenecks',
      'Supplier delivery slips cascading into factory line standstills',
      'Fragmented carrier communications over disparate email chains'
    ],
    workflows: [
      { step: 1, title: 'Digital PO Broadcast', desc: 'Electronic purchase orders transmit instantly to qualified suppliers with agreed SLAs.' },
      { step: 2, title: 'In-Transit Sensor Monitoring', desc: 'Cellular IoT tags provide GPS location, tilt, vibration, and temperature status.' },
      { step: 3, title: 'Predictive ETA Recalibration', desc: 'Weather and traffic models continuously adjust expected gate arrival timestamps.' },
      { step: 4, title: 'Automated Yard Check-In', desc: 'License plate and RFID gates recognize arriving trucks and allocate open unloading bays automatically.' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'analytics-insights',
    slug: 'analytics',
    title: 'Analytics & Insights',
    subtitle: 'Enterprise operational intelligence, yield analytics, and demand sensing',
    category: 'cross-platform',
    description: 'Turn operational data into profitable decisions with unified dashboards and predictive machine learning.',
    iconName: 'BarChart3',
    overview: 'Raw sensor bytes and transaction records are useless without synthesized intelligence. Machvex Analytics provides single-pane-of-glass operational observability across both industrial production yields and retail store profitability margins.',
    features: [
      'Cross-Domain Executive Dashboards with Configurable Drill-Downs',
      'Machine Learning Demand Sensing Incorporating Weather, Seasonality, and Promotions',
      'Margin and COGS Variance Decomposition Down to Individual Product Batches',
      'Real-Time Anomaly Alerting via SMS, Slack, Webhook, and Email',
      'Exportable Regulatory Compliance and Audit Trail Reports',
      'Natural Language Executive Query Assistant'
    ],
    metrics: [
      { label: 'Forecast Accuracy', value: '94.6%' },
      { label: 'Reporting Time', value: 'Instant' },
      { label: 'Margin Leakage Saved', value: '$4.2M' },
      { label: 'Data Latency', value: '<2s' }
    ],
    challenges: [
      'Taking weeks to reconcile factory production costs with retail sell-through',
      'Static monthly spreadsheets unable to anticipate volatile consumer demand shifts',
      'Data locked in separate vendor silos requiring expensive IT maintenance',
      'Inability to identify the root cause of production margin erosion'
    ],
    workflows: [
      { step: 1, title: 'High-Throughput Lakehouse Ingestion', desc: 'Millions of daily events normalized into a queryable unified schema.' },
      { step: 2, title: 'Continuous Model Scoring', desc: 'Ensemble ML models predict demand, shrinkage, and equipment degradation in real time.' },
      { step: 3, title: 'Interactive Visualization', desc: 'Zero-latency dashboards update instantly for line supervisors and C-level executives alike.' },
      { step: 4, title: 'Prescriptive Action Recommendations', desc: 'Platform suggests specific production batch adjustments and retail price markdowns.' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'sustainable-operations',
    slug: 'sustainability',
    title: 'Sustainable Operations',
    subtitle: 'Resource optimization, industrial scrap reduction, and ESG compliance tracking',
    category: 'cross-platform',
    description: 'Reduce waste, optimize resources, and meet ESG goals with intelligent energy and carbon tracking.',
    iconName: 'Leaf',
    overview: 'Profitability and planetary stewardship go hand in hand. Machvex empowers industrial operators and retail organizations to monitor kilowatt-hour electricity utilization per SKU produced, eliminate raw material scrap, and provide verified auditable Scope 1, 2, and 3 emission records.',
    features: [
      'Real-Time Machine Energy Metering & Peak-Demand Load Shedding',
      'Raw Material Yield Optimization to Minimize Industrial Offcuts & Scrap',
      'Retail Cold-Chain Refrigerant Leak Detection & Energy Monitoring',
      'Automated Scope 1, Scope 2, and Scope 3 GHG Emission Accounting',
      'Circularity & Reverse Logistics Management for Product Packaging',
      'Ready-to-File ESG Compliance Reporting (GRI, SASB, CSRD Compatible)'
    ],
    metrics: [
      { label: 'Energy Consumption', value: '-22%' },
      { label: 'Material Waste', value: '-31%' },
      { label: 'Carbon Intensity', value: '-28%' },
      { label: 'Audit Readiness', value: '100%' }
    ],
    challenges: [
      'Manual, inaccurate estimations of carbon emissions across complex supply tiers',
      'Expensive electricity peak-tariff surcharges during simultaneous machine startups',
      'Unnecessary packaging waste across transit legs',
      'Stricter international ESG regulatory audits requiring verifiable proof'
    ],
    workflows: [
      { step: 1, title: 'Sensorized Resource Auditing', desc: 'Sub-meters capture electricity, water, compressed air, and gas per production run.' },
      { step: 2, title: 'Algorithmic Load Balancing', desc: 'Staggers machine warmup sequences to prevent regional utility peak-demand fees.' },
      { step: 3, title: 'Scrap & Waste Minimization', desc: 'CNC and cutting optimization algorithms maximize material yield per sheet or ingot.' },
      { step: 4, title: 'Certified ESG Audit Ledger', desc: 'Immutable emission reports exported directly for third-party carbon verifiers.' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=80'
  }
];
