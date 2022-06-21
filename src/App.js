import React from 'react'
import Home from './webpages/Home'
import Product from './webpages/Product'
import Cart from './webpages/Cart'
import Checkout from './webpages/Checkout'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App(){
    return (
    <Router>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/product' element={<Product />} />
        </Routes>
    </Router>
    )
}

export default App