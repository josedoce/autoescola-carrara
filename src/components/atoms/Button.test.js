import React from 'react';
import { render, fireEvent } from '../../test-utils';
import Button, { ButtonColors, ButtonsVariants } from './Button';

test('renders a text',() =>{
  const { getByText } = render(<Button>Click here</Button>);
  expect(getByText('Click here')).toBeInTheDocument();
});

//teste de evento de click
test('trigger event on click', () => {
  const handleClick = jest.fn();
  
  const {getByRole} = render(<Button onClick={handleClick}/>);

  fireEvent.click(getByRole('button'));

  expect(handleClick).toBeCalled();
});

//teste de caso com as cores
test.each(Object.values(ButtonColors).map(item=> [item]))('renders with color %s',(color) => { //%s de string
  const { asFragment } = render(<Button color={color}/>);
  expect(asFragment()).toMatchSnapshot();
});

//teste de caso com os variants
test.each(Object.values(ButtonsVariants).map(item=> [item]))('renders with variant %s',(variant) => { //%s de string
  const { asFragment } = render(<Button variant={variant}/>);
  expect(asFragment()).toMatchSnapshot();
});

//teste de caso de retorno padrao 1
test('Renders with color primary and variant outlined',() => {
  const { asFragment } = render(<Button variant='outlined' color='primary'/>);
  expect(asFragment()).toMatchSnapshot();
});

//teste de caso de retorno padrao 2
test('Renders with color primary and variant link',() => {
  const { asFragment } = render(<Button variant='link' color='primary'/>);
  expect(asFragment()).toMatchSnapshot();
});

