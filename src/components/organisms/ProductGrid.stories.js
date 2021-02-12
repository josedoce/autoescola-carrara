import React from "react";
import ProductGrid from "./ProductGrid";
import { buildProductList } from '../../models/buiders/producsts';

export default {
    title: "Components/Organisms/ProductGrid",
    component: ProductGrid
}

export const usage = () => ( 
    <ProductGrid products={buildProductList(6)} />
)