
const productModel = (sequelize,DataTypes)=>{
    const Book = sequelize.define("book",{
        bookName:{
            type:DataTypes.STRING
        }

    })

}