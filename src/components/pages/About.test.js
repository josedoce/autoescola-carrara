import React from 'react';
import { render, screen } from '../../test-utils';

import About from './About';

beforeEach(()=>{
    jest.resetAllMocks(); //resetará todos os mods para evitar testes globais
})

test('renders About page', ()=> {
    render(<About/>);
    const linkElement = screen.getByText(/Auto Escola Carrara/);
    expect(linkElement).toBeInTheDocument();
});

