import React from 'react';
import { text } from '@storybook/addon-knobs';

import Hero from './Hero';
import Heading from '../atoms/Heading';
import Button from '../atoms/Button';

//import de imagens
import Car1 from '../../stories/assets/car1.jpg';
import Car2 from '../../stories/assets/car2.jpg';

const info = {
  title: 'Components/Molecules/Hero',
  component: Hero,
};

export default info;
export const usage = () => (
    <Hero image={Car1}>
      <Heading>
        <h1>{text('Title','Ganhe sua liberdade para ir e vir')}Ganhe sua <strong>liberdade</strong> <br/> para ir e vir</h1>
      </Heading>
      <ul>
        <li>Lorem ipsum dolor sit amed, consectetur adipiscing elit, sed do eiusmod tempor.</li>
        <li>Lorem ipsum dolor sit ameb, consectetur adipiscing elit, sed do eiusmod tempor.</li>
        <li>Lorem ipsum dolor sit ames, consectetur adipiscing elit, sed do eiusmod tempor.</li>
      </ul>
      <Button
      color="primary"
      variant="outlined"
    >matricule-se agora</Button>
      
    </Hero>
)

export const historia = () => (
  <Hero image={Car2} title="Promoções a partir de 20%">
    <h1>Aproveite, pois durá pouco!</h1>
    <Button
      color="primary"
      variant="outlined"
    >comprar oferta</Button>
  </Hero>
)
