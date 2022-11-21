// import logo from './logo.svg';
import './App.css';
// import ThemeSwitcher from "./ThemeSwitcher";
// import PomBox from "./PomBox";
// import pic from "./profile_pic.png"
// import Navbar from "./components/Navigation/Navbar.js"

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

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/work' element={<Work />} />
                <Route path='/projects' element={<Projects/>} />
                <Route path='/education' element={<Education/>} />
                <Route path='/skills' element={<Skills/>} />
            </Routes>
        </Router>
    );
}

export default App;