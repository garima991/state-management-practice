import { useState } from 'react'
import './App.css'
import Products from './components/Products';
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element ={ <Products/>} />
        <Route path = "/cart" element = {<Cart/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
