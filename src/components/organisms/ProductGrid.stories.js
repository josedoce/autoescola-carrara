import React from "react";
import ProductGrid from "./ProductGrid";
import carrinho from '../../assets/carrinho.jpg';

export default {
    title: "Components/Organisms/ProductGrid",
    component: ProductGrid
}

const produto = [
    {
        id: 0,
        imagem: carrinho,
        titulo: "titulo qualquer 1",
        texto: "Lorem ipsum dolor sit amed, consectetur adipiscing elit, sed do eiusmod tempor",
    },
    {
        id: 1,
        imagem: "https://st4.depositphotos.com/3542901/20589/i/600/depositphotos_205897738-stock-photo-vintage-tone-image-people-driving.jpg",
        titulo: "titulo qualquer 2",
        texto: "Lorem ipsum dolor sit amed, consectetur adipiscing elit, sed do eiusmod tempor",
    },
    {
        id: 2,
        imagem: "https://st2.depositphotos.com/1038919/8555/i/600/depositphotos_85553004-stock-photo-woman-driving-a-car.jpg",
        titulo: "titulo qualquer 3",
        texto: "Lorem ipsum dolor sit amed, consectetur adipiscing elit, sed do eiusmod tempor",
    },
    {
        id: 3,
        imagem: "https://st4.depositphotos.com/3542901/20589/i/600/depositphotos_205897738-stock-photo-vintage-tone-image-people-driving.jpg",
        titulo: "titulo qualquer 4",
        texto: "Lorem ipsum dolor sit amed, consectetur adipiscing elit, sed do eiusmod tempor",
    },
    {
        id: 4,
        imagem: carrinho,
        titulo: "titulo qualquer 5",
        texto: "Lorem ipsum dolor sit amed, consectetur adipiscing elit, sed do eiusmod tempor",
    },
];

export const usage = () => ( 
    <ProductGrid products={produto} />
)