import React from 'react';
import styled,{css} from 'styled-components';
import Container from '../atoms/Container';

//tipador
import PropTypes from 'prop-types';

//criando components estilizados
//root é um componente, então da pra ter acesso as props dele
const Root = styled.div`
    
    padding: 100px 0;
    color: #fff;
    ${props=> css`
        background: url(${props.image}),rgba(0, 0, 0,0.4);
        background-size: cover;
        background-position: center;
        background-blend-mode: overlay;
    `}
`;
const Content = styled.div`
    display: inline-block;
    p,li {
        font-size: 20px;
        font-weight: 300;
    }
    ul {
        list-style: none;
        padding-left: 0;
    }
    li::before {
        content: "\\2713\\0020";
        color: ${props=>props.theme.colors.primary.main};
    }
`; //cuidado: \ tem significado no sc, entao deve escapar com \

//o children é padrão do react, permitindo abertura de tag e fechamento da mesma<></>
const Hero = ({image, children}) => {
    return (
        <Root image={image} data-testid="hero">
            <Container>
                <Content>
                    {children}
                </Content>
            </Container>
        </Root>
    )
};

Hero.propTypes = {
  /**
   *descrição qualquer sobre image 
   * 
  */
  image: PropTypes.string,
  // title: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.element]),
  children: PropTypes.node,
};
Hero.defaultProps = {
  image: 'http://mydomain.com/img.ext',
  // title: 'Titulo qualquer',
  children: '<ul></ul><button></button>'
}
export default Hero;

