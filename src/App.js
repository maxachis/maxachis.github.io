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
import Events from './pages/events';
import AnnualReport from './pages/annual';
import Teams from './pages/team';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/events' element={<Events />} />
                <Route path='/annual' element={<AnnualReport/>} />
                <Route path='/team' element={<Teams/>} />
                <Route path='/blogs' element={<Blogs/>} />
                <Route path='/sign-up' element={<SignUp/>} />
            </Routes>
        </Router>
    );
}

export default App;

// function App() {
//   return (
//
//         <div className="App">
//             <Navbar />
//             <h1>Jason Portfolio</h1>
//             <img src={pic} alt={"This is me! Hello!"}></img>
//             <p>Professional Portfoliologist</p>
//           {/*<ThemeSwitcher />*/}
//             <PomBox numBitchRows={6}/>
//         </div>
//   );
// }
