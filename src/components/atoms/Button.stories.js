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

const ButtonsWrapper = (props) => {
  return (
    <div>
      <p>Enabled:</p>
      <Toolbar>
        <Button {...events} {...props}>Default</Button>
        <Button color="primary" {...events} {...props}>Primary</Button>
        <Button color="danger" {...events} {...props}>Danger</Button>
      </Toolbar>
      <p>As a link</p>
      <Toolbar>
        <Button as="a" href="#" {...events} {...props}>Default</Button>
        <Button as="a" href="#" color="primary" {...events} {...props}>Primary</Button>
        <Button as="a" href="#" color="danger" {...events} {...props}>Danger</Button>
      </Toolbar>
      <p>Disabled:</p>
      <Toolbar>
        <Button disabled {...events} {...props}>Default</Button>
        <Button disabled color="primary" {...events} {...props}>Primary</Button>
        <Button disabled color="danger" {...events} {...props}>Danger</Button>
      </Toolbar>
    </div>
  )
}

export const usage = () => <ButtonsWrapper/>;

export const outlined = () => <ButtonsWrapper variant="outlined"/>

export const link = () => <ButtonsWrapper variant="link"/>