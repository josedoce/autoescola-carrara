import React from "react";
import {Link} from 'react-router-dom';
import Hero from '../molecules/Hero';
import Car1 from '../../stories/assets/car1.jpg';
import Heading from '../atoms/Heading';
import Button from '../atoms/Button';
import Feature from '../atoms/Feature';
import Section from '../molecules/Section';
import Grid from '../atoms/Grid';
import Footer from '../organisms/Footer';
import ProductGrid from '../organisms/ProductGrid';
import Accordion,{AccordionGroup} from '../atoms/Accordion';
import {FaCar, FaKey, FaMapMarkedAlt, FaAccessibleIcon} from 'react-icons/fa';
import bmwVideo from '../../assets/bmw.mp4';
import { produto } from './db';

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
            <Section inverse={true}>
                <Heading>
                    <h2>Conheça nossos serviços</h2>
                    <ProductGrid products={produto}/>
                </Heading>
            </Section>
            <Section>
                <Grid md={2}>
                    <div>
                        <Heading>
                            <h2>Carrara auto escola</h2>
                        </Heading>
                        <p>
                        Lorem ipsum dolor sit amed, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amed, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amed, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amed, consectetur adipiscing elit, sed do eiusmod tempor.
                        </p>
                        <div>
                            {/* para usar o botao como button link, basta usar a a propriedade as */}
                            <Button as={Link} to="/sobre" color="primary">saiba mais</Button>
                        </div>
                    </div>
                    <div>
                        <video src={bmwVideo} width="100%" autoPlay loop/>
                    </div>
                </Grid>
                
            </Section>
            <Section inverse={true}>
                <Heading>
                    <h2>Duvidas recorrentes</h2>
                </Heading>
               <AccordionGroup>
                    <Accordion title="Como eu renovo minha CNH?">
                        Lorem ipsum dolor sit amed, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amed, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amed, consectetur adipiscing elit, sed do eiusmod tempor.
                    </Accordion>
                    <Accordion title="Como faço a mudança de categória?">
                        Lorem ipsum dolor sit amed, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amed, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amed, consectetur adipiscing elit, sed do eiusmod tempor.
                    </Accordion>
                    <Accordion title="Fui multado, e agora?">
                        Lorem ipsum dolor sit amed, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amed, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amed, consectetur adipiscing elit, sed do eiusmod tempor.
                    </Accordion>
               </AccordionGroup>
            </Section>
            <Footer/>
        </>
    )
}

export default Home;