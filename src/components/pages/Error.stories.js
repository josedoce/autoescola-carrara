import React from "react";
import Error from "./Error";
import Taken from '../../draws/Taken';

export default {
    title: "Components/Pages/Error",
    component: Error
}

export const usage = () => (
    <Error 
        titulo={"Página não encontrada"}
        description={"Pagina não foi encontrada."}
        image={<Taken/>}
    />
)