import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { useTheme } from './ThemeContext';

import Home from './pages/Home';
import About from './pages/About';
import Business from './pages/Business';
import Projects from './pages/Projects';
import Sustainability from './pages/Sustainability';
import Support from './pages/Support';

import StudioHome from './pages/studio/Home';
import StudioAbout from './pages/studio/About';
import StudioBusiness from './pages/studio/Business';
import StudioProjects from './pages/studio/Projects';
import StudioSustainability from './pages/studio/Sustainability';
import StudioSupport from './pages/studio/Support';

const SPOTLIGHT_SELECTOR =
  '.bento-cell, .masonry-item, .rail-card, .card, .sus-stat, .support-pill, .btn';

export default function App() {
  const { theme } = useTheme();
  const isStudio = theme === 'studio';

  useEffect(() => {
    if (!isStudio) return;
    const onMove = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest(SPOTLIGHT_SELECTOR) as HTMLElement | null;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
      el.style.setProperty('--my', `${e.clientY - rect.top}px`);
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [isStudio]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={isStudio ? <StudioHome /> : <Home />} />
        <Route path="/about" element={isStudio ? <StudioAbout /> : <About />} />
        <Route path="/business" element={isStudio ? <StudioBusiness /> : <Business />} />
        <Route path="/projects" element={isStudio ? <StudioProjects /> : <Projects />} />
        <Route
          path="/sustainability"
          element={isStudio ? <StudioSustainability /> : <Sustainability />}
        />
        <Route path="/support" element={isStudio ? <StudioSupport /> : <Support />} />
      </Routes>
    </Layout>
  );
}
