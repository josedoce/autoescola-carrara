import React from 'react';
import { render, screen } from '../../test-utils';

import ProductDetails from './ProductDetails';

test('renders ProductDetails page', ()=> {
    render(<ProductDetails/>);
    const linkElement = screen.getByText(/Nome do serviço/);
    expect(linkElement).toBeInTheDocument();
});