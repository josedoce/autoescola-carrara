const faker =  require("faker");

const assetsImg = {
    img: [ 
        "https://st2.depositphotos.com/1038919/8555/i/600/depositphotos_85553004-stock-photo-woman-driving-a-car.jpg",
        "https://st4.depositphotos.com/3542901/20589/i/600/depositphotos_205897738-stock-photo-vintage-tone-image-people-driving.jpg",
        "https://st2.depositphotos.com/1038919/8555/i/600/depositphotos_85553004-stock-photo-woman-driving-a-car.jpg",
        "https://st4.depositphotos.com/3542901/20589/i/600/depositphotos_205897738-stock-photo-vintage-tone-image-people-driving.jpg",
        "https://st2.depositphotos.com/1038919/8555/i/600/depositphotos_85553004-stock-photo-woman-driving-a-car.jpg",
    ],
    get pegar(){
        return this.img[Math.round(Math.random() * (this.img.length-1))];
    }
}

const buildProductList = (size) => {
    const result = [];
    for(let i = 0; i < size; i++){
        result.push({
            id: i+1,
            slug: faker.lorem.slug(),
            imagem: assetsImg.pegar,
            titulo: faker.commerce.productName(),
            texto: faker.commerce.productDescription()
        });
    }
    
    return result;
}
//transformando objeto em json com node
//node local do console.log(objeto) >> local do nome_arquivo.json
//node .\src\models\buiders\producsts.js >> .\src\models\fixtures\products.json
//para vir formatado use null e "  " como parametros no json
console.log(JSON.stringify(buildProductList(100), null, "  "));
