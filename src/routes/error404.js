import React from "react";
import Error from '../components/pages/Error';
import Taken from '../draws/Taken';

const error404 = () => (
    <Error 
        titulo={"Página não encontrada"}
        description={"Pagina não foi encontrada."}
        image={<Taken/>}
    />

)

export default error404;