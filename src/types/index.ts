export interface SolutionItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'manufacturing' | 'retail' | 'cross-platform';
  description: string;
  iconName: string;
  features: string[];
  metrics: { label: string; value: string }[];
  overview: string;
  challenges: string[];
  workflows: { step: number; title: string; desc: string }[];
  imageUrl: string;
}

export interface IndustryItem {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  imageUrl: string;
  iconName: string;
  keyChallenges: string[];
  machvexSolutions: string[];
  impactStats: { label: string; value: string }[];
}

export interface CaseStudyItem {
  id: string;
  slug: string;
  title: string;
  clientType: string;
  industry: string;
  location: string;
  heroImage: string;
  challenge: string;
  solution: string;
  technologiesUsed: string[];
  metrics: { label: string; value: string; change: string }[];
  quote: {
    text: string;
    author: string;
    role: string;
    organization: string;
  };
  summary: string;
}

export interface ArticleItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  publishDate: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  thumbnail: string;
  excerpt: string;
  content: string[];
  tags: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  industry: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface DemoFormData {
  fullName: string;
  businessEmail: string;
  phoneNumber: string;
  companyName: string;
  industry: string;
  companySize: string;
  interestedSolution: string;
  message: string;
  preferredContact: 'email' | 'phone' | 'video';
  consent: boolean;
}

export interface ContactFormData {
  fullName: string;
  businessEmail: string;
  phoneNumber: string;
  companyName: string;
  inquiryType: string;
  subject: string;
  message: string;
  consent: boolean;
}

