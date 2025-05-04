

const userModel = (sequelize,DataTypes)=>{
    const User = sequelize.define("user",{
        username: {
            type:DataTypes.STRING,
            alloNull:false
        },
        password: {
            type: DataTypes.STRING,
            allowNull:false
        },
        email: {
            type: DataTypes.STRING,
            alloNull:false
        }
    })
    return User

}

module.exports = userModel