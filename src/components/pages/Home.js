import React from "react";
import Hero from '../molecules/Hero';
import Car1 from '../../stories/assets/car1.jpg';
import Heading from '../atoms/Heading';
import Button from '../atoms/Button';
import Feature from '../atoms/Feature';
import Section from '../molecules/Section';
import Grid from '../atoms/Grid';
import {FaCar, FaKey, FaMapMarkedAlt, FaAccessibleIcon} from 'react-icons/fa';

//import PropTypes from "prop-types";

const Home = () => {
    return(
        <>
            <Hero image={Car1}>
                <Heading>
                <h1>Ganhe sua <strong>liberdade</strong> <br/> para ir e vir</h1>
                </Heading>
                <ul>
                    <li>Lorem ipsum dolor sit amed, consectetur adipiscing elit, sed do eiusmod tempor.</li>
                    <li>Lorem ipsum dolor sit ameb, consectetur adipiscing elit, sed do eiusmod tempor.</li>
                    <li>Lorem ipsum dolor sit ames, consectetur adipiscing elit, sed do eiusmod tempor.</li>
                </ul>
                <Button
                color="primary"
                variant="outlined"
                >matricule-se agora
                </Button>
            </Hero>
            <Section>
                <Grid sm={2} md={4}>
                    <Feature
                        icon={<FaCar/>}
                        title="Maior e melhor frota">
                        <p>Lorem ipsum dolor sit amed, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    </Feature>
                    <Feature
                    icon={<FaKey/>}
                    title="Habilitação mais rápida">
                        <p>Lorem ipsum dolor sit amed, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    </Feature>
                    <Feature
                    icon={<FaMapMarkedAlt/>}
                    title="Excelente localização">
                        <p>Lorem ipsum dolor sit amed, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    </Feature>
                    <Feature
                    icon={<FaAccessibleIcon/>}
                    title="Acessibilidade">
                        <p>Lorem ipsum dolor sit amed, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    </Feature>
                </Grid>
            </Section>
        </>
    )
}
// Home.defaultProps = {

// };
// Home.propTypes = {

// };
export default Home;