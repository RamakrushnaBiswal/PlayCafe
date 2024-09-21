// eslint-disable-next-line no-unused-vars
import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './Components/Pages/Notfound'
import Register from './Components/Pages/Register'
import Home from './Components/Pages/Home'
import Menu from './Components/Pages/Menu';
import Boardgame from './Components/Pages/Boardgame';
import Event from './Components/Pages/Event';
import About from './Components/Pages/About';
import MyBook from './Components/Pages/MyBook';
function App() {
  return (
    <div>
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/boardgame" element={<Boardgame />} />
      <Route path="/event" element={<Event />} /> 
      <Route path="*" element={<NotFound />} />
      <Route path="/book" element={<MyBook />} />
    </Routes>
  </Router>
  </div>
  )
}

export default App
