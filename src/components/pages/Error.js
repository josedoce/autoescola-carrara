import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Grid from '../atoms/Grid';
import Section from '../molecules/Section';
import Heading from '../atoms/Heading';
import Button from '../atoms/Button';

const ImageContainer = styled.div`
    text-align: right;
    svg {
        width: 100%;
        height: auto;
        max-width: 400px;
        color: ${(props)=>props.theme.colors.primary.main};
    }
`;
const ErrorTitle = styled.h1`
    margin-top: 0;
`;

const ErrorMessage = styled.p`
    margin: 24px 0;
    font-size: 1.2rem;
`;

const Error = ({image, titulo, description}) => {
    return(
        <Section>
             <Grid sm={2}>
                 <div>
                     <Heading>
                         <ErrorTitle>{titulo}</ErrorTitle>
                     </Heading>
                     <ErrorMessage>
                         {description}
                     </ErrorMessage>
                     <div>
                        <Button as={Link} to="/" color="primary">
                            ir para a página principal
                        </Button>
                     </div>
                 </div>
                 <div>
                     <ImageContainer>
                         {image}
                     </ImageContainer>
                 </div>
             </Grid>
        </Section>
    )
}
Error.defaultProps = {
    image: undefined,
    titulo: '',
    description: ''
};
Error.propTypes = {
    image: PropTypes.node,
    titulo: PropTypes.string,
    description: PropTypes.string
};
export default Error;