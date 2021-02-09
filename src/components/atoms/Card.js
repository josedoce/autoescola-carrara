import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

//#region CardBody
const StyledBody = styled.div`
    padding: 16px;

    h6{
        margin-top: 0;
    }
`;
//compound components, o ato de compor componentes
export const CardBody = ({children}) => (
    <StyledBody>
        {children}
    </StyledBody>
)

CardBody.defaultProps = {
    children: undefined
};
CardBody.propTypes = {
    children: PropTypes.node,
};
//#endregion

//#region CardMedia
const StyleMedia = styled.div`
    display: flex;
    background-image: url(${props=>props.image});
    background-position: center center;
    background-size: cover;
    height: 270px;
`;

export const CardMedia = ({image, children}) =>(
    <StyleMedia image={image}>{children}</StyleMedia>
);
CardMedia.defaultProps = {
    image: undefined
};
CardMedia.propTypes = {
    image: PropTypes.string
};
//#endregion

//#region CardMediaDescription
const StyleMediaDescription = styled.div`
    background-color: rgba(0, 0, 0, 0.4);
    padding: 8px 16px;
    color: #fff;
    align-self: flex-end;
    flex: 1;
    h1,h2,h3,h4,h5,h6{
        margin: 0;
    }
`;

export const CardMediaDescription = ({children}) =>(
    <StyleMediaDescription>
        {children}
    </StyleMediaDescription>

);
CardMediaDescription.defaultProps = {
    children: undefined
};
CardMediaDescription.propTypes = {
    children: PropTypes.node
};
//#endregion

//#region Card
const StyledCard = styled.div`
    background-color: #fff;
    border-radius: 4px;
    overflow: hidden;
`;

const Card = ({children}) => {
    return(
        <StyledCard>
            <div/>
            {children}
        </StyledCard>
    )
}
Card.defaultProps = {
    children: undefined
};
Card.propTypes = {
    children: PropTypes.node,
};
//#endregion

export default Card;