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
            <div className='head'>
                <span className='The'>The</span>
                <h1 className='Siren'> Siren</h1>
            </div>
            <div className='navbar'>
                <Router >
                    <Link to="/Home">Home</Link>
                    <Link to="/Hollywood">Hollywood</Link>
                    <Link to="/Bollywood">Bollywood</Link>
                    <Link to="/Food">Food</Link>
                    <Link to="/Technology">Technology</Link>
                    <Link to="/Fitness">Fitness</Link>
                    <ConntextStore>
                        <Routes>
                            <Route path='/Home' element={<Homecom />}></Route>
                            <Route path='/Bollywood' element={<Bollywood />}></Route>
                            <Route path='/Hollywood' element={<Hollywood />}></Route>
                            <Route path='/Food' element={<FoodCom />} />
                            <Route path='/Technology' element={<Technology />}></Route>
                            <Route path='/Fitness' element={<Fitness />}></Route>
                        </Routes>
                    </ConntextStore>

                </Router>

            </div>
        </>
    )
}
export default RoutingCom

