import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HamburgerMenu from 'hamburger-react';
import React, { useState } from 'react';
import Bollywood from '../ProjectCompo/Bollywood';
import Hollywood from '../ProjectCompo/Hollywood';
import FoodCom from '../ProjectCompo/Food';
import Homecom from '../ProjectCompo/Home';
import Fitness from '../ProjectCompo/Fitness';
import ConntextStore from './ContexApi';
import Technology from '../ProjectCompo/Technology';
import Navigate from '../ProjectCompo/Navigate';

function RoutingCom() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className='navcontain'>
                <div className='hambuger-title'>
                    <div className='head'>
                        <span className='The'>The</span>
                        <h1 className='Siren'> Siren</h1>
                    </div>
                    <div className='hamburger' onClick={toggleMenu}>
                        <HamburgerMenu />
                    </div>
                </div>
                <div className='navbar'>

                    <Router>
                        <div className='nav'>
                            <div className={isOpen ? "linktag" : "linktag2"}>
                                <Link to="/" className='navtxt'>Home</Link>
                                <Link to="/Hollywood" className='navtxt'>Hollywood</Link>
                                <Link to="/Bollywood" className='navtxt'>Bollywood</Link>
                                <Link to="/Food" className='navtxt'>Food</Link>
                                <Link to="/Technology" className='navtxt'>Technology</Link>
                                <Link to="/Fitness" className='navtxt'>Fitness</Link>
                            </div>
                        </div>

                        <ConntextStore>
                            <Routes>
                                <Route path='/' element={<Homecom />} />
                                <Route path='/Bollywood' element={<Bollywood />} />
                                <Route path='/Hollywood' element={<Hollywood />} />
                                <Route path='/Food' element={<FoodCom />} />
                                <Route path='/Technology' element={<Technology />} />
                                <Route path='/Fitness' element={<Fitness />} />
                                <Route path="/Navigate/:id" element={<Navigate />} />
                            </Routes>
                        </ConntextStore>
                    </Router>
                    <footer>
                        <div className="NavIcons">
                            <div className="leftNav">
                                <p>Home</p>
                                <p>About</p>
                                <p>Contact</p>
                            </div>
                            <p className="footer-content">&copy; 2023 Rani kumari</p>
                            <div className="icons">

                                <h2>
                                    <a
                                        href="https://github.com/rani10245kumari"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <i className="fab fa-github"></i>
                                    </a>
                                </h2>
                                <h2>
                                    <a
                                        href="https://www.linkedin.com/in/rani-kumari-001119256"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                                </h2>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
}

export default RoutingCom;