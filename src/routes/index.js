import React from 'react';
import {Routes,Route} from 'react-router-dom';

//components
import Home from './home';
import About from './about';
import ProductDetails from './servicos';

const Roteamento = () =>{
    return (
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/sobre" element={<About/>}/>
                <Route path="/servicos" element={<ProductDetails/>}/>
            </Routes>
    )
}

export default Roteamento;