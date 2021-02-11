import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
//components
import Home from './components/pages/Home';
import About from './components/pages/About';
import ProductDetails from './components/pages/ProductDetails';

const Roteamento = () =>{
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/sobre" element={<About/>}/>
                <Route path="/servicos" element={<ProductDetails/>}/>
            </Routes>
        </Router>
    )
}

export default Roteamento;