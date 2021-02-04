import React from 'react';
//tdd
//importando a ferramenta de teste
import { render } from '../../test-utils';
//importe o alvo do teste
import Hero from './Hero';

test('renders Hero with children', ()=>{ //teste dom
  const {debug, getByText} = render(
    <Hero>
      <p>Joseildo</p>
    </Hero>
  );

  // debug(); //exibe o dom

  expect(getByText("Joseildo")).toBeInTheDocument();//verifica se joseildo foi renderizado na dom
})

test('renders image background', ()=>{ //teste image
  const img = "https://imagem.com/img.jpg";
  const {getByTestId} = render(
    <Hero image={img}></Hero>
  );
  expect(getByTestId('hero')).toHaveStyle({
    backgroundImage: img,
  });
});


//test coverage
//yarn test -- --coverage --watchAll=false
//para ignorar certos arquivos va ate a configuração jest no package.jason
// "jest":{
//   "collectCoverageFrom":[
//     "src/**/*.js", //considere esse tipo de ext
//     "!src/**/*.stories.js" //desconsidere esse tipo de ext
//   ]
// },
