import React from 'react'
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/App.css'
import Home from './components/Home'
import Cart from './components/Cart'
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/cart' element={<Cart/>} />
      </Routes>
    </Router>
  );
}

export default App;
