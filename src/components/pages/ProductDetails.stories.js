import React from "react";
import ProductDetails from "./ProductDetails";
import { buildProductList } from '../../models/buiders/producsts';

export default {
    title: "Components/Pages/ProductDetails",
    component: ProductDetails
}
const produto = buildProductList(1)[0];

const items = [
    {label: "Inicio", link: "/"},
    {label: "Servicos"},
    {label: produto.titulo}
];

export const usage = () => (
    <ProductDetails breadCrumb={items} titulo={produto.titulo} />
)