import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetailsPage from '../../components/pages/ProductDetails';
import {useScrollToTop} from '../../hooks/MyHooks';
import {useProduct} from '../../hooks/Api';
import Error from '../../components/pages/Error';
import NotFoundImage from '../../draws/Undraw';

const ProductDetails = () => {
    const item = useParams();
    const produto = useProduct({slug: item.slug});
    const items = [
        {label: "Inicio", link: "/"},
        {label: "Servicos"},
        {label: produto.titulo}
    ];
    useScrollToTop();
    if(!produto){
        return <Error 
            titulo={"Produto não encontrado"}
            description={"O servico que você selecionou não existe ou não foi encontrado"}
            image={<NotFoundImage/>}
        />
    }
    return(
        <ProductDetailsPage breadCrumb={items} titulo={produto.titulo}/>
    )
};

export default ProductDetails;