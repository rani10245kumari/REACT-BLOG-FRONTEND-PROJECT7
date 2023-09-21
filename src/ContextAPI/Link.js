import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

import React from 'react'
import Bollywood from '../ProjectCompo/Bollywood'
import Hollywood from '../ProjectCompo/Hollywood'
import FoodCom from '../ProjectCompo/Food'
import Homecom from '../ProjectCompo/Home'
import Fitness from '../ProjectCompo/Fitness'
import ConntextStore from './ContexApi'
import Technology from '../ProjectCompo/Technology'


function RoutingCom() {

    return (
        <>
            <div className='navcontain'>
                <div className='head'>
                    <span className='The'>The</span>
                    <h1 className='Siren'> Siren</h1>
                </div>
                <div className='navbar'>
                    <Router >
                        <Link to="/">Home</Link>
                        <Link to="/Hollywood">Hollywood</Link>
                        <Link to="/Bollywood">Bollywood</Link>
                        <Link to="/Food">Food</Link>
                        <Link to="/Technology">Technology</Link>
                        <Link to="/Fitness">Fitness</Link>

                        <ConntextStore>
                            <Routes>
                                <Route path='/' element={<Homecom />}></Route>
                                <Route path='/Bollywood' element={<Bollywood />}></Route>
                                <Route path='/Hollywood' element={<Hollywood />}></Route>
                                <Route path='/Food' element={<FoodCom />} />
                                <Route path='/Technology' element={<Technology />}></Route>
                                <Route path='/Fitness' element={<Fitness />}></Route>

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
                            <p className="footer-content">&copy; 2023 Rani Kumari</p>
                            <div className="icons">
                                <h2>
                                    <a
                                        href="https://instagram.com/ranik9070?igshid=NzZlODBkYWE4Ng=="
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        {" "}
                                        <i className="fa-brands fa-square-instagram"></i>
                                    </a>
                                </h2>
                                <h2>
                                    <a
                                        href=""
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <i className="fa-brands fa-github"></i>
                                    </a>
                                </h2>
                                <h2>
                                    <a
                                        href=""
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <i className="fa-brands fa-facebook"></i>
                                    </a>
                                </h2>
                            </div>
                        </div>
                    </footer>

                </div>

            </div>
        </>
    )
}
export default RoutingCom

