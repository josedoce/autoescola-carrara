import React from 'react';
import { actions } from '@storybook/addon-actions';
import Button from './Button';
import styled from 'styled-components';

const info = {
  title: 'Components/Atoms/Button',
  component: Button
};

export default info;

const events = actions({onClick: "clicked"})

const Toolbar = styled.div`
  button{
    margin-right: 18px;
  }
`;

export const usage = () => (
  <Toolbar>
    <Button {...events}>Default</Button>
    <Button disabled color="primary" {...events}>Primary</Button>
    <Button color="danger" {...events}>Danger</Button>
  </Toolbar>
)

export const outlined = () => (
  <Toolbar>
    <Button {...events} variant="outlined">Default</Button>
    <Button disabled color="primary" {...events} variant="outlined">Primary</Button>
    <Button color="danger" {...events} variant="outlined">Danger</Button>
  </Toolbar>
)

export const link = () => (
  <Toolbar>
    <Button {...events} variant="link">Default</Button>
    <Button disabled color="primary" {...events} variant="link">Primary</Button>
    <Button color="danger" {...events} variant="link">Danger</Button>
  </Toolbar>
)
