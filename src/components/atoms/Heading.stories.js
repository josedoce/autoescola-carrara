import React from 'react';
import Heading from './Heading';

const info = {
  title: "Components/Atoms/Heading",
  component: Heading
};

export default info; 

export const usage = () =>(
  <div>
    <Heading>
      <h1>Algum titulo qualquer 1.</h1>
    </Heading>
    <Heading>
      <h2>Algum titulo qualquer 2.</h2>
    </Heading>
    <Heading>
      <h3>Algum titulo qualquer 3.</h3>
    </Heading>
    <Heading>
      <h4>Algum titulo qualquer 4.</h4>
    </Heading>
    <Heading>
      <h5>Algum titulo qualquer 5.</h5>
    </Heading>
    <Heading>
      <h6>Algum titulo qualquer 6.</h6>
    </Heading>
  </div>
)
