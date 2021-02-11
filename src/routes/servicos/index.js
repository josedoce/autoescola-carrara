import React from 'react';
import ProductDetailsPage from '../../components/pages/ProductDetails';
import {useScrollToTop} from '../../hooks/MyHooks';

const ProductDetails = () => {
    useScrollToTop();
    return(
        <ProductDetailsPage/>
    )
};

export default ProductDetails;