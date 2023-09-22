import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

import React from 'react'
import Bollywood from '../ProjectCompo/Bollywood'
import Hollywood from '../ProjectCompo/Hollywood'
import FoodCom from '../ProjectCompo/Food'
import Homecom from '../ProjectCompo/Home'
import Fitness from '../ProjectCompo/Fitness'
import ConntextStore from './ContexApi'
import Technology from '../ProjectCompo/Technology'
import Navigate from '../ProjectCompo/Navigate'


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
                        <Link to="/" className='navtxt'>Home</Link>
                        <Link to="/Hollywood" className='navtxt'>Hollywood</Link>
                        <Link to="/Bollywood" className='navtxt'>Bollywood</Link>
                        <Link to="/Food" className='navtxt'>Food</Link>
                        <Link to="/Technology" className='navtxt'>Technology</Link>
                        <Link to="/Fitness" className='navtxt'>Fitness</Link>

                        <ConntextStore>
                            <Routes>
                                <Route path='/' element={<Homecom />}></Route>
                                <Route path='/Bollywood' element={<Bollywood />}></Route>
                                <Route path='/Hollywood' element={<Hollywood />}></Route>
                                <Route path='/Food' element={<FoodCom />} />
                                <Route path='/Technology' element={<Technology />}></Route>
                                <Route path='/Fitness' element={<Fitness />}></Route>
                                <Route path="/Navigate/:id" element={<Navigate />} />
                            </Routes>

                        </ConntextStore>


                    </Router>
                    <footer>
                        <div className="Nav">
                            <div className="Navb">
                                <p>Home</p>
                                <p>About</p>
                                <p>Contact</p>
                            </div>
                            <p className="foot-content">&copy; 2023 Rani Kumari</p>

                        </div>
                    </footer>

                </div>

            </div>
        </>
    )
}
export default RoutingCom

