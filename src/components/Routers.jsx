import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import Home from './Home'
import MoreInfo from './MoreInfo'

const Router = () => {
  return (
    <div>
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path={`/:id`} element={<MoreInfo />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  )
}

export default Router
