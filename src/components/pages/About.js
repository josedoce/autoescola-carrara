import React from "react";
import styled from 'styled-components';
import PropTypes from "prop-types";

import Hero from '../molecules/Hero';
import Heading from '../atoms/Heading';
import car1 from '../../stories/assets/car1.jpg';
import Grid from '../atoms/Grid';
import Section from '../molecules/Section';
import Footer from '../organisms/Footer';
import DrawCar from '../../draws/Undraw';
import Card,{CardMedia, CardMediaDescription} from '../atoms/Card';
import {instrutores} from '../../assets/instrutores';

const ImageContainer = styled.div`
    svg{
        width: 100%;
        height: auto;
        max-width: 380px;
        color: ${(props)=>props.theme.colors.primary.main};
    }
`;

const About = () => {
    return(
        
        <>
            <Hero image={car1}>
                <Heading>
                    <h1>Auto Escola Carrara</h1>
                </Heading>
            </Hero>
            <Section>
                <Grid md={2}>
                    <div>
                        <p>
                        Lorem ipsum dolor sit amed, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amed, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amed, consectetur adipiscing elit, sed do eiusmod tempor
                        </p>
                        <p>
                        Lorem ipsum dolor sit amed, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amed, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amed, consectetur adipiscing elit, sed do eiusmod tempor
                        </p>
                        <p>
                        Lorem ipsum dolor sit amed, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amed, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amed, consectetur adipiscing elit, sed do eiusmod tempor
                        </p>
                        <ul>
                            <li>Lorem ipsum dolor sit amed, consectetur adipiscing elit.</li>
                            <li>Lorem ipsum dolor sit amed, consectetur adipiscing elit.</li>
                            <li>Lorem ipsum dolor sit amed, consectetur adipiscing elit.</li>
                            <li>Lorem ipsum dolor sit amed, consectetur adipiscing elit.</li>
                            <li>Lorem ipsum dolor sit amed, consectetur adipiscing elit.</li>
                            
                        </ul>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amed, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amed, consectetur adipiscing elit, sed do eiusmod tempor</p>
                        <center>
                            <ImageContainer>
                                <DrawCar/>
                            </ImageContainer>
                        </center>
                        
                    </div>
                </Grid>
            </Section>
            <Section inverse>
                <Grid md={2}>
                    <div>
                        <h4>Missão</h4>
                        <p>Lorem ipsum dolor sit amed, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    </div>
                    <div>
                        <h4>Visão</h4>
                        <p>Lorem ipsum dolor sit amed, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    </div>
                </Grid>
            </Section>
            <Section>
                <Heading>
                    <h2>Conheça nossos professores</h2>
                </Heading>
                <Grid sm={2} md={3} lg={4}>
                    {instrutores.map((instrutor)=>(
                        <Card key={instrutor.id}>
                            <CardMedia image={instrutor.img}>
                                <CardMediaDescription>
                                    <h5>{instrutor.nome}</h5>
                                </CardMediaDescription>
                            </CardMedia>
                        </Card>
                    ))}
                </Grid>
            </Section>
            <Footer/>
        </>
    )
}
About.defaultProps = {

};
About.propTypes = {

};
export default About;