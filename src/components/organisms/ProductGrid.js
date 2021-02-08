import React,{useState} from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

import Grid from '../atoms/Grid';
import Card,{CardMedia, CardBody} from '../atoms/Card';
import Heading from '../atoms/Heading';
import Button from '../atoms/Button';

const Toolbar = styled.div`
    margin-top: 40px;
    text-align: center;
`;

const ProductGrid = ({products}) => {
    const [showAll, setShowAll] = useState(false);
    const fitelredProducts = showAll?products:products.slice(0, 3);
    return(
        <>
            <Grid md={3}>
                {fitelredProducts.map((produto)=>(
                    <Card key={produto.id}>
                    <CardMedia image={produto.imagem}/>
                    <CardBody>
                        <Heading>
                            <h6>{produto.titulo}</h6>
                        </Heading>
                        <p>
                            {produto.texto}
                        </p>
                        <div>
                            <Button variant="link" color="primary">Saiba mais</Button>
                        </div>
                    </CardBody>
                </Card>
                ))}
            </Grid>
            {
                !showAll?
                <Toolbar>
                    <Button
                        onClick={()=>{
                            setShowAll(true);
                        }}
                        variant="outlined">
                        Lista completa de serviços
                    </Button>
                </Toolbar>:null
            }
            
        </>
    )
}

ProductGrid.defaultProps = {
    products: [],
};

ProductGrid.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]), //aceito tanto numero como string
            imagem: PropTypes.string,
            titulo: PropTypes.string,
            texto: PropTypes.string
        })
    )
};

export default ProductGrid;