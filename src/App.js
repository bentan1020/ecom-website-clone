import React from 'react'
import Home from './webpages/HomePage/Home'
import Product from './webpages/ProductPage/Product'
import Cart from './webpages/CartPage/Cart'
import Checkout from './webpages/CheckoutPage/Checkout'
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