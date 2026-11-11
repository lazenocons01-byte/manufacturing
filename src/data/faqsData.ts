import type { FAQItem } from '../types';

export const faqsData: FAQItem[] = [
  {
    category: 'General',
    question: 'What is Machvex and how does it connect manufacturing with retail?',
    answer: 'Machvex is an enterprise software platform that unifies shop-floor manufacturing operations (IoT, machine telemetry, quality automation) with downstream retail systems (smart POS, shelf sensing, omnichannel inventory) through a real-time data mesh. By connecting factory outputs directly with store-level consumer demand, Machvex eliminates the bullwhip effect and minimizes inventory carrying costs.'
  },
  {
    category: 'Implementation',
    question: 'How does Machvex integrate with our existing ERP, MES, and POS hardware?',
    answer: 'Machvex is designed for non-invasive interoperability. For industrial shop floors, we deploy lightweight industrial edge gateways that interface with existing PLCs and SCADA systems using OPC-UA, MQTT, and Modbus. For retail and inventory, Machvex offers bi-directional REST and GraphQL APIs, webhooks, and pre-built connectors for SAP, Oracle, Microsoft Dynamics, Shopify Plus, and major POS vendors.'
  },
  {
    category: 'Architecture',
    question: 'Does Machvex continue functioning if the store or factory loses Internet connectivity?',
    answer: 'Yes. Machvex is built on an Edge-First architecture. Local edge nodes at each factory plant and retail store maintain full operational autonomy—executing machine control routines, logging sensor telemetry, and processing point-of-sale customer transactions offline. Once Internet connectivity is restored, states synchronize seamlessly via conflict-free replicated data types.'
  },
  {
    category: 'Security',
    question: 'What security standards and compliance certifications does Machvex maintain?',
    answer: 'Machvex complies with SOC 2 Type II, ISO 27001, IEC 62443 (Industrial Cyber Security), and GDPR. All data in transit is encrypted with TLS 1.3, and data at rest is protected with AES-256 encryption with optional customer-managed encryption keys (CMEK).'
  },
  {
    category: 'Deployment',
    question: 'How quickly can we roll out a pilot deployment?',
    answer: 'A typical Machvex proof-of-value or pilot deployment spans 4 to 6 weeks for a designated manufacturing cell or cluster of retail stores. Our solutions engineering team provides turnkey onboarding, hardware gateway staging, and digital twin calibration.'
  }
];
