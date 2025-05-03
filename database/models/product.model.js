

const productModel = (sequelize,DataTypes)=>{
    const Product = sequelize.define("product",{
        prductName: {
            type: DataTypes.STRING
        },
        productPrice: {
            type: DataTypes.INTEGER
        },
        productImage: {
            type: DataTypes.STRING
        }
    })
    return Product
}

module.exports = productModel