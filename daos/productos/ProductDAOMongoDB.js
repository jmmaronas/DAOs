const ContenedorMongoDB =require('../../contenedores/ContenedorMongoDB')
const products=require('../../mongoModel')
class ProductosDAOMongoDB extends ContenedorMongoDB {
    constructor(){
        super(products)
    }
}

module.exports = ProductosDAOMongoDB