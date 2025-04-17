import React from "react";
import {Routes, Route, Navigate} from 'react-router-dom'

import Home from './../pages/Home';
import Caligraphy from './../pages/Caligraphy';
import CaligraphyDeltails from './../pages/CaligraphyDetails';
import Login from './../pages/Login';
import Register from './../pages/Register';
import SeachResutlist from './../pages/SearchResultList';


const Routers  = () => {
  return (
     <Routes>
          <Route path='/' element={<Navigate to='/home' />} />
          <Route path='/home' element={<Home/>}/>
          <Route path='/caligraphy' element={<Caligraphy/>}/>
          <Route path='/caligraphy/:id' element={<CaligraphyDeltails/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/caligraphy/search' element={<SeachResutlist/>}/>
     </Routes>
  )
};

export default Routers ;