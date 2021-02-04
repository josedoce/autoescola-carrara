import React from 'react';
import {render} from '../test-utils';

import GlobalStyle from './GlobalStyle';

test('math snapshot', ()=>{
  render(<GlobalStyle/>);
  expect(document.head).toMatchSnapshot();
});
