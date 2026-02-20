import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Story from './pages/Story';
import Details from './pages/Details';
import RSVP from './pages/RSVP';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/story" element={<Story />} />
          <Route path="/details" element={<Details />} />
          <Route path="/rsvp" element={<RSVP />} />
          <Route path="/registry" element={
            <div className="pt-32 pb-20 px-6 min-h-screen flex items-center justify-center text-center">
              <div>
                <h1 className="text-5xl font-serif italic mb-8">Registry</h1>
                <p className="font-light text-charcoal/70 mb-8 max-w-md mx-auto">
                  Your presence is enough of a present to us! But for those who have expressed an interest, we have selected some items for our home.
                </p>
                <div className="flex flex-col md:flex-row gap-6 justify-center">
                  <a href="#" className="px-8 py-4 border border-charcoal/10 hover:border-gold hover:text-gold transition-all">Zola</a>
                  <a href="#" className="px-8 py-4 border border-charcoal/10 hover:border-gold hover:text-gold transition-all">Crate & Barrel</a>
                </div>
              </div>
            </div>
          } />
        </Routes>
      </Layout>
    </Router>
  );
}
