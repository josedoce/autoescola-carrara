import PropTypes from 'prop-types';

const ProductType = PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]), //aceito tanto numero como string
    imagem: PropTypes.string,
    titulo: PropTypes.string,
    texto: PropTypes.string,
    slug: PropTypes.string,
});

export default ProductType;