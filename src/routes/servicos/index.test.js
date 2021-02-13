import React from 'react';
import { render, screen } from '../../test-utils';

import ProductDetailRoute from './index';

import {useProduct} from '../../hooks/Api';
import {buildProductList} from '../../models/buiders/producsts';


jest.mock('../../hooks/Api');

test('renders with a product', ()=> {
    useProduct.mockReturnValue(buildProductList(1)[0]);
    render(<ProductDetailRoute />);
    expect(getByText('Fantastic Granite Chair',{selector: 'h1'})).toBeInTheDocument();
});

test('not found product', ()=> {
    useProduct.mockReturnValue(null);
    render(<ProductDetailRoute />);
    expect(getByText('Serviço não encontrado',{selector: 'h1'})).toBeInTheDocument();
});