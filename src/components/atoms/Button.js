import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const ButtonColors = {
  default: 'default',
  primary: 'primary',
  danger: 'danger',
};

export const ButtonsVariants = {
  default: 'default',
  outlined: 'outlined',
  link: 'link'
}

const getMainColor = ({theme, color})=> {
  switch(color){
    case ButtonColors.primary:
      return theme.colors.primary.main;
    case ButtonColors.danger:
      return theme.colors.danger.main;
    default: 
      return '#e0e0e0';
  }
}
const getColorText = ({theme, color})=>{
  switch(color){
    case ButtonColors.primary:
      return theme.colors.primary.text;
    case ButtonColors.danger:
      return theme.colors.danger.text;
    default: 
      return '#212121';
  }
};

const getDarkColor = ({theme, color})=>{
  switch(color){
    case ButtonColors.primary:
      return theme.colors.primary.dark;
    case ButtonColors.danger:
      return theme.colors.danger.dark;
    default: 
      return '#5a6268';
  }
}

const getOutlinedColor = (props) => {
  if(props.color===ButtonColors.default){
    return '#212121';
  }
  return getMainColor(props);
}

const getLinkText = (props) => {
  if(props.color===ButtonColors.default){
    return '#757575';
  }
  return getMainColor(props);
}

//não preciso pegar as props nesse caso, pois já esta vindo por padrão
const Button = styled.button`
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  padding: 12px 36px;
  cursor: pointer; 
  background-color: ${getMainColor};
  border: 2px solid ${getMainColor};
  color: ${getColorText};
  display: inline-block;
  text-decoration: none;
  margin-right: 18px;
  &:disabled{
    opacity: 0.6;
    cursor: not-allowed;
  }
  &:hover:not(:disabled){ /**so aplica o hover se tiver habilitado */
    background-color: ${getDarkColor};
    border-color: 1px solid ${getDarkColor};
  }
`;
//herdando button e seus estilos
const ButtonOutlined = styled(Button)`
  background-color: transparent;
  color: ${getOutlinedColor};
  &:hover:not(:disabled){
    background-color: transparent;
    color: ${getDarkColor};
  }
`;
const ButtonLink = styled(Button)`
  background-color: transparent;
  border-color: transparent;
  color: ${getLinkText};
  padding-left: 0;
  padding-right: 0;

  &:hover:not(:disabled){
    background-color: transparent;
    border-color: transparent;
    color: ${getDarkColor};
  }
`;
//bg esta pegando a propriedade do themer
// const Button = ({type, children}) => (
//   <button type={type}>
//     {children}
//   </button>
// )

//necessario, pois o propTypes não tem compatibilidade com o styled-compoments
const ButtonWrapper = (props) => {
    switch (props.variant) {
      case ButtonsVariants.outlined:
        return <ButtonOutlined {...props}/>;
      case ButtonsVariants.link:
        return <ButtonLink {...props}/>
      default:
        return <Button {...props} />};
}

//aqui define as propriedades padrão do component
ButtonWrapper.defaultProps = {
  type: 'button',
  children: undefined,
  color: 'default',
  variante: 'default',
}
//aqui definimos o tipo e propriedades aceitas pelo component
ButtonWrapper.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.oneOf(Object.values(ButtonColors)),
  variant: PropTypes.oneOf(Object.values(ButtonsVariants)),
};

export default ButtonWrapper;
