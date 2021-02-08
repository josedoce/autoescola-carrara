import React from "react";
import Card,{CardBody, CardMedia} from "./Card";
import Section from '../../components/molecules/Section';
import Heading from './Heading';
import Button from './Button';
import carrinho from '../../assets/carrinho.jpg';

const info = {
    title: "Components/Atoms/Card",
    component: Card,
    subcomponents: { CardBody, CardMedia }
}

export default info;

export const usage = () => (
    <Section inverse>
        <Card>
            <CardBody>
                <Heading>
                    <h6>Titulo</h6>
                </Heading>
                <p>
                Lorem ipsum dolor sit amed, consectetur adipiscing elit, sed do eiusmod tempor
                </p>
                <div>
                    <Button variant="link" color="primary">Saiba mais</Button>
                </div>
            </CardBody>
        </Card>
    </Section>
)

export const withMedia = ()=>(
    <Section inverse>
        <Card>
            <CardMedia image={carrinho}/>
            <CardBody>
                <Heading>
                    <h6>Titulo</h6>
                </Heading>
                <p>
                Lorem ipsum dolor sit amed, consectetur adipiscing elit, sed do eiusmod tempor
                </p>
                <div>
                    <Button variant="link" color="primary">Saiba mais</Button>
                </div>
            </CardBody>
        </Card>
    </Section>
);