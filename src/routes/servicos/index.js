import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetailsPage from '../../components/pages/ProductDetails';
import {useScrollToTop} from '../../hooks/MyHooks';
import {useProduct} from '../../hooks/Api';

const ProductDetails = () => {
    const item = useParams();
    const produto = useProduct({slug: item.slug});
    const items = [
        {label: "Inicio", link: "/"},
        {label: "Servicos"},
        {label: produto.titulo}
    ];
    useScrollToTop();
    return(
        <ProductDetailsPage breadCrumb={items} titulo={produto.titulo}/>
    )
};

export default ProductDetails;