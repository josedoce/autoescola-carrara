import React from "react";
import styled from 'styled-components';
import {
    FaIdCard,
    FaHome,
    FaScroll
} from 'react-icons/fa';

import Callout,{CalloutMedia, CalloutActions,CalloutBody} from '../atoms/Callout';
import Hero from '../molecules/Hero';
import Heading from '../atoms/Heading';
import car1 from '../../stories/assets/car1.jpg';

import Section from '../molecules/Section';
import Footer from '../organisms/Footer';
import Button from '../atoms/Button';
import Speed from '../../draws/Speed';
import BreadCrumb from '../atoms/BreadCrumb';

const items = [
    {label: "Inicio", link: "/"},
    {label: "Servicos"},
    {label: "Nome do Serviço"}
];

const PinnedList = styled.ul`
    list-style: none;
    padding-left: 0;
`;

const PinnedItem = styled.li`
    display: inline-block;
    border: 1px solid ${props=>props.theme.colors.border};
    border-radius: 4px;
    padding: 8px 16px;
    margin: 0 16px 16px 0;
    svg{
        margin-right: 8px;
        vertical-align: middle;
    }
`;

const ProductDetails = () => (
        <>
            <Hero image={car1}>
                <Heading>
                    <h1>Nome do serviço</h1>
                    <BreadCrumb items={items}/>
                </Heading>
            </Hero>
            <Section>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <h5>Documentos necessarios</h5>
                <PinnedList>
                    <PinnedItem>
                        <FaIdCard/>
                        RG</PinnedItem>
                    <PinnedItem>
                        <FaIdCard/>
                        CPF</PinnedItem>
                    <PinnedItem>
                        <FaScroll/>
                        Certidão de nascimento ou casamento</PinnedItem>
                    <PinnedItem>
                        <FaHome/>
                        Comprovante de residencia</PinnedItem>
                </PinnedList>
            </Section>
            <Section inverse>
                <Callout>
                    <CalloutBody>
                        <h6>Façaç sua matrícula agora mesmo</h6>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                        <CalloutActions>
                            <Button color="primary">Matrícula</Button>
                        </CalloutActions>
                    </CalloutBody>
                    <CalloutMedia>
                        <Speed/>
                    </CalloutMedia>
                </Callout>
            </Section>
            <Footer/>
        </>
);

export default ProductDetails;