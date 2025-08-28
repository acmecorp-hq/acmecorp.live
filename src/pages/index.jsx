import Layout from "./Layout.jsx";

import Home from "./Home";

import Architecture from "./Architecture";

import About from "./About";

import Privacy from "./Privacy";

import Terms from "./Terms";

import Catalog from "./Catalog";

import RetailHub from "./RetailHub";

import Team from "./Team";

import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';

const PAGES = {
    
    Home: Home,
    
    Architecture: Architecture,
    
    About: About,
    
    Privacy: Privacy,
    
    Terms: Terms,
    
    Catalog: Catalog,
    
    RetailHub: RetailHub,
    
    Team: Team,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                
                    <Route path="/" element={<Home />} />
                
                
                <Route path="/Home" element={<Home />} />
                
                <Route path="/Architecture" element={<Architecture />} />
                
                <Route path="/About" element={<About />} />
                
                <Route path="/Privacy" element={<Privacy />} />
                
                <Route path="/Terms" element={<Terms />} />
                
                <Route path="/Catalog" element={<Catalog />} />
                
                {/* New preferred path for Retail Hub */}
                <Route path="/catalog/retail-hub" element={<RetailHub />} />
                {/* Backward-compat redirect */}
                <Route path="/RetailHub" element={<Navigate to="/catalog/retail-hub" replace />} />
                
                <Route path="/Team" element={<Team />} />
                
            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}