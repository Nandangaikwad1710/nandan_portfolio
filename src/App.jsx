import React, { useEffect, useState, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { initLenis } from './utils/lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import Preloader from './components/Preloader';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PageTransition from './components/PageTransition';
import PageLoader from './components/PageLoader';

// Direct import for HomePage to ensure 0ms hydration latency
import HomePage from './pages/HomePage';

// Code-split dynamic routes for peak performance
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const StyleGuidePage = lazy(() => import('./pages/StyleGuidePage'));
const LicensesPage = lazy(() => import('./pages/LicensesPage'));
const ChangelogPage = lazy(() => import('./pages/ChangelogPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const AdminPage = lazy(() => import('./pages/AdminPage'));

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [_preloaderDone, setPreloaderDone] = useState(false);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = initLenis();

    // Refresh ScrollTrigger after assets settle
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      clearTimeout(timer);
      if (lenis) lenis.destroy();
    };
  }, []);

  const handleScrollToContact = () => {
    const footerEl = document.querySelector('.footer');
    if (footerEl) {
      footerEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <BrowserRouter>
      <div className="page_wrapper">
        <ScrollToTop />
        <Preloader onComplete={() => setPreloaderDone(true)} />
        <Header />
        
        <PageTransition>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              {/* Core Pages */}
              <Route path="/" element={<HomePage onScrollToContact={handleScrollToContact} />} />
              <Route path="/about-us" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:slug" element={<ProjectDetailPage />} />
              <Route path="/service" element={<ServicesPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/service/:slug" element={<ServiceDetailPage />} />
              <Route path="/services/:slug" element={<ServiceDetailPage />} />
              <Route path="/blogs" element={<BlogPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/post/:slug" element={<BlogPostPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/contact-us" element={<ContactPage />} />
              <Route path="/contact" element={<ContactPage />} />

              {/* Utility Pages */}
              <Route path="/utilities/style-guide" element={<StyleGuidePage />} />
              <Route path="/utilities/licenses" element={<LicensesPage />} />
              <Route path="/utilities/changelog" element={<ChangelogPage />} />
              <Route path="/404" element={<NotFoundPage />} />

              {/* Admin Management Dashboard */}
              <Route path="/admin" element={<AdminPage />} />

              {/* Catch-all 404 */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </PageTransition>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
