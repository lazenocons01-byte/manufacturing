import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './components/layout/ScrollToTop';

// Lazy-loaded route components for peak performance & code-splitting
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Solutions = lazy(() => import('./pages/Solutions').then(m => ({ default: m.Solutions })));
const ManufacturingSolution = lazy(() => import('./pages/ManufacturingSolution').then(m => ({ default: m.ManufacturingSolution })));
const RetailSolution = lazy(() => import('./pages/RetailSolution').then(m => ({ default: m.RetailSolution })));
const InventorySolution = lazy(() => import('./pages/InventorySolution').then(m => ({ default: m.InventorySolution })));
const SupplyChainSolution = lazy(() => import('./pages/SupplyChainSolution').then(m => ({ default: m.SupplyChainSolution })));
const Industries = lazy(() => import('./pages/Industries').then(m => ({ default: m.Industries })));
const IndustryDetail = lazy(() => import('./pages/IndustryDetail').then(m => ({ default: m.IndustryDetail })));
const Projects = lazy(() => import('./pages/Projects').then(m => ({ default: m.Projects })));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail').then(m => ({ default: m.ProjectDetail })));
const Resources = lazy(() => import('./pages/Resources').then(m => ({ default: m.Resources })));
const ArticleDetail = lazy(() => import('./pages/ArticleDetail').then(m => ({ default: m.ArticleDetail })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const RequestDemo = lazy(() => import('./pages/RequestDemo').then(m => ({ default: m.RequestDemo })));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy').then(m => ({ default: m.PrivacyPolicy })));
const Terms = lazy(() => import('./pages/Terms').then(m => ({ default: m.Terms })));
const NotFound = lazy(() => import('./pages/NotFound').then(m => ({ default: m.NotFound })));

// Machvex Brand Fallback Loader
const RouteLoader = () => (
  <div className="min-h-screen bg-[#FFFCFA] flex items-center justify-center">
    <div className="flex flex-col items-center gap-3">
      <div className="w-10 h-10 border-3 border-[#F8E9E7] border-t-[#781C1C] rounded-full animate-spin" />
      <span className="text-xs font-mono font-bold tracking-widest text-[#781C1C] uppercase">
        MACHVEX
      </span>
    </div>
  </div>
);

export const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<RouteLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          
          {/* Solutions Routes */}
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/manufacturing" element={<ManufacturingSolution />} />
          <Route path="/solutions/retail" element={<RetailSolution />} />
          <Route path="/solutions/inventory" element={<InventorySolution />} />
          <Route path="/solutions/supply-chain" element={<SupplyChainSolution />} />
          
          {/* Industries Routes */}
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/:slug" element={<IndustryDetail />} />
          
          {/* Projects / Case Studies */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          
          {/* Resources & Insights */}
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/:slug" element={<ArticleDetail />} />
          
          {/* Interactive Lead & Support */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/request-demo" element={<RequestDemo />} />
          
          {/* Legal & System */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
