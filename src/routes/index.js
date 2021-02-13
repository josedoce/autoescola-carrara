import React from 'react';
import {Routes,Route} from 'react-router-dom';

//components
import Home from './home';
import About from './about';
import ProductDetails from './servicos';
import Error404 from './error404';

const Roteamento = () =>{
    return (
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/sobre" element={<About/>}/>
                <Route path="/servicos/:slug" element={<ProductDetails/>}/>
                <Route path="*" element={<Error404/>}/>
            </Routes>
    )
}

export default Roteamento;