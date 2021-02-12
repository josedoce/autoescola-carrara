import React from "react";
import Home from "./Home";

import {buildProductList} from '../../models/buiders/producsts';

const info = {
    title: "Components/Pages/Home",
}

export default info;
const produtos = buildProductList(8);

export const usage = () => (
    <Home produtos={produtos}/>
)