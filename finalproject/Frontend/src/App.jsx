import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbardata from './components/Navbardata'
import Register from './components/Register'
import Login from './components/Login'
import Privateroute from './utils/Privateroute'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

const App = () => {

  return <>
  <BrowserRouter>
  <Navbardata/>
  <Routes>
  <Route path='/' element={<Register/>}></Route>
  <Route path='/login' element={<Login/>}></Route>
  <Route element={<Privateroute/>}>
      <Route path='/home' element={<Home/>}></Route>
       <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
  </Route>

  </Routes>
  </BrowserRouter>
  
  </>
}

export default App