import React from 'react';
import { render, screen , fireEvent} from '../../test-utils';

import ProductGrid from './ProductGrid';

const buildProducts = (size) => {
    const result = [];
    for(let i = 0; i < size; i++){
        result.push({id: i, titulo: `Titulo ${i}`});
    }
    return result;
}

describe.each([
    //[se tiver 6, mostra 3]
    [1, 1],
    [2, 2],
    [3, 3],
    [4, 3],
    [6, 3],
])("with %i products", (size, showOnly)=>{
    test(`show only ${showOnly} items`, ()=> {
        render(<ProductGrid products={buildProducts(size)}/>);
        expect(screen.getAllByRole("heading").length).toBe(showOnly);
    });

    test("show all the products when button is clicked", ()=>{
        render(<ProductGrid products={buildProducts(size)}/>);
        fireEvent.click(screen.getByText("Lista completa de serviços"));
        expect(screen.getAllByRole("heading").length).toBe(size);
    })
})