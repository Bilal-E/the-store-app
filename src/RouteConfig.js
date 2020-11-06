import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

import Home from './components/Home';
import Collections from './components/Collections';
import Items from './components/Items';
import About from './components/About';
import Contact from './components/Contact';
import NavBar from './components/NavBar';

function RouteConfig() {
   
    return (
        
        <>
            <Router>
                <NavBar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='home' element={<Home />} />
                    
                    <Route path='collections' element={<Collections />} />
                    <Route path='collections/:id' element={<Items />} />
        
                    <Route path='about' element={<About />} />
                    <Route path='contact' element={<Contact />} />
                    <Route path='*' element={<h2>Error 404: Not Found</h2>} />
                </Routes>
            </Router>
        </>
    );
}

export default RouteConfig;
