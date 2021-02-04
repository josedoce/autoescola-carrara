import React from "react";
import Feature from "./Feature";
import Grid from "./Grid";
import {FaCar, FaKey, FaMapMarkedAlt, FaAccessibleIcon} from 'react-icons/fa';

const info = {
    title: "Components/Atoms/Feature",
    component: Feature
}
export default info;

export const usage = () => (
    <Feature
      icon={<FaCar/>}
      title="Teste">
        <p>Lorem ipsum dolor sit amed, consectetur adipiscing elit, sed do eiusmod tempor.</p>
    </Feature>
)

export const withGrid = () =>(
  <Grid sm={2} md={4}>
    <Feature
        icon={<FaCar/>}
        title="Maior e melhor frota">
          <p>Lorem ipsum dolor sit amed, consectetur adipiscing elit, sed do eiusmod tempor.</p>
    </Feature>
    <Feature
      icon={<FaKey/>}
      title="Habilitação mais rápida">
        <p>Lorem ipsum dolor sit amed, consectetur adipiscing elit, sed do eiusmod tempor.</p>
    </Feature>
    <Feature
      icon={<FaMapMarkedAlt/>}
      title="Excelente localização">
        <p>Lorem ipsum dolor sit amed, consectetur adipiscing elit, sed do eiusmod tempor.</p>
    </Feature>
    <Feature
      icon={<FaAccessibleIcon/>}
      title="Acessibilidade">
        <p>Lorem ipsum dolor sit amed, consectetur adipiscing elit, sed do eiusmod tempor.</p>
    </Feature>
  </Grid>
    
)
