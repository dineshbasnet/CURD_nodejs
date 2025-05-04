// database connection code/logic will be written in this section

const {Sequelize,DataTypes} = require("sequelize")


//Creating object in javascript
const sequelize = new Sequelize(
    "postgresql://postgres.anksjfafewjlsscbfpij:with refrence to your considiretion@aws-0-ap-south-1.pooler.supabase.com:6543/postgres"
    )

sequelize.authenticate().then(()=>{
    console.log("Authenticated! Connection estblished ")

})
.catch((err)=>{
    console.log("Error occured!" + err)

})

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.books = require("./models/book.model")(sequelize,DataTypes)
db.users = require("./models/user.model")(sequelize,DataTypes)

// Alternative const bookModel = require("./models/book.model").()

sequelize.sync({alter:false}).then(()=>{
    console.log("Migrate successfully")
})
module.exports = db