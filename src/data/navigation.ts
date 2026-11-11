export interface NavLink {
  label: string;
  href: string;
  children?: {
    label: string;
    description: string;
    href: string;
    badge?: string;
    icon?: string;
  }[];
}

export const navigationLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Solutions',
    href: '/solutions',
    children: [
      {
        label: 'Smart Manufacturing',
        description: 'Automate shop floors, machine vision, and real-time OEE',
        href: '/solutions/manufacturing',
        badge: 'Core',
        icon: 'Factory'
      },
      {
        label: 'Retail Operations',
        description: 'Omnichannel POS, modern store execution, and cashierless flow',
        href: '/solutions/retail',
        badge: 'Popular',
        icon: 'Store'
      },
      {
        label: 'Inventory Intelligence',
        description: 'Unified multi-node stock tracking with automated replenishment',
        href: '/solutions/inventory',
        icon: 'Layers'
      },
      {
        label: 'Supply Chain Sync',
        description: 'End-to-end logistics orchestration from raw materials to shelf',
        href: '/solutions/supply-chain',
        icon: 'Truck'
      },
      {
        label: 'Analytics & Insights',
        description: 'Predictive operational dashboards and ML yield modeling',
        href: '/solutions#analytics',
        icon: 'BarChart3'
      },
      {
        label: 'Sustainable Operations',
        description: 'Circular resource optimization and carbon footprint tracking',
        href: '/solutions#sustainability',
        icon: 'Leaf'
      }
    ]
  },
  {
    label: 'Industries',
    href: '/industries',
    children: [
      {
        label: 'Automotive Manufacturing',
        description: 'High-precision assembly, supplier JIT scheduling',
        href: '/industries/automotive',
        icon: 'Car'
      },
      {
        label: 'Food & Beverage Processing',
        description: 'Cold-chain traceability and high-speed packaging sync',
        href: '/industries/food-beverage',
        icon: 'Utensils'
      },
      {
        label: 'Pharmaceuticals & MedTech',
        description: '21 CFR Part 11 compliance, serialization, and cleanrooms',
        href: '/industries/pharmaceuticals',
        icon: 'Activity'
      },
      {
        label: 'Electronics & Hardware',
        description: 'SMT line monitoring, component serialization, and yield',
        href: '/industries/electronics',
        icon: 'Cpu'
      },
      {
        label: 'Textile & Apparel',
        description: 'Fast-fashion lead time reduction and cut-to-shelf visibility',
        href: '/industries/textile',
        icon: 'Scissors'
      },
      {
        label: 'Retail & Supermarket Chains',
        description: 'Shelf-edge IoT, high-velocity stock turn, automated checkout',
        href: '/industries/retail-supermarkets',
        icon: 'ShoppingCart'
      },
      {
        label: 'Warehousing & 3PL Logistics',
        description: 'Automated cross-docking and warehouse management systems',
        href: '/industries/warehousing',
        icon: 'Boxes'
      },
      {
        label: 'Consumer Packaged Goods (FMCG)',
        description: 'High-volume demand forecasting and distributor replenishment',
        href: '/industries/fmcg',
        icon: 'PackageCheck'
      }
    ]
  },
  { label: 'Projects', href: '/projects' },
  { label: 'Resources', href: '/resources' },
  { label: 'About', href: '/about' },
];

export const footerSolutions = [
  { label: 'Smart Manufacturing', href: '/solutions/manufacturing' },
  { label: 'Retail Operations', href: '/solutions/retail' },
  { label: 'Inventory Intelligence', href: '/solutions/inventory' },
  { label: 'Supply Chain Sync', href: '/solutions/supply-chain' },
  { label: 'Analytics & Insights', href: '/solutions#analytics' },
  { label: 'Sustainable Operations', href: '/solutions#sustainability' },
];

export const footerCompany = [
  { label: 'About Us', href: '/about' },
  { label: 'Projects & Case Studies', href: '/projects' },
  { label: 'Industries We Serve', href: '/industries' },
  { label: 'Leadership & Team', href: '/about#leadership' },
  { label: 'Careers (We are hiring!)', href: '/about#careers' },
];

export const footerResources = [
  { label: 'Insights & Articles', href: '/resources' },
  { label: 'Case Studies', href: '/projects' },
  { label: 'Frequently Asked Questions', href: '/contact#faq' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Schedule a Live Demo', href: '/request-demo' },
];

