import React from 'react';
import HomePage from '../components/pages/Home';
import {useProducts} from '../hooks/Api';

const Home = () => {
    const produtos = useProducts();
    return(
        <HomePage produtos={produtos}/>
    )
};

export default Home;