import React from 'react';
import { render, screen } from '../../test-utils';

import ProductDetails from './ProductDetails';
import { buildProductList } from '../../models/buiders/producsts';

test('renders ProductDetails page', ()=> {
    const items = [
        {label: "Inicio", link: "/"},
        {label: "Servicos"},
        {label: "Nome do serviço"}
    ];
    render(<ProductDetails breadCrumb={items} titulo={buildProductList(1)[0].titulo}/>);
    
    expect(screen.getByText("Fantastic Granite Chair", {selector: "h1"})).toBeInTheDocument();
});