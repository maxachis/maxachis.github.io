import './App.css';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";


import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about.js';
import Work from './pages/work';
import Projects from './pages/projects';
import Education from './pages/education';
import Skills from './pages/skills';
import Resume from './pages/resume';
import CoinflipPro from "./pages/blog/CoinflipPro";

function App() {
    return (
        <div className={"site-container"}>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' exact element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/work' element={<Work />} />
                    <Route path='/projects' element={<Projects/>} />
                    <Route path='/education' element={<Education/>} />
                    <Route path='/skills' element={<Skills/>} />
                    <Route path='/resume' element={<Resume/>} />
                    <Route path='/CoinflipPro' element={<CoinflipPro />} />
                </Routes>
            </Router>
        </div>

    );
}

export default App;