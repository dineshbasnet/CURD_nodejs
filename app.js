const express = require('express')
const bookRoute = require("./routes/bookRoute")
const userRoute = require("./routes/userRoute")
const app = express()
app.set("view engine","ejs")

const { books, users } = require('./database/connection')
require('./database/connection')
app.use(express.json())
app.use(express.urlencoded({extended:true}))



app.use("/api",bookRoute)
app.use("/",userRoute)



app.get("/login",function(req,res){
    res.render("/login")
})
app.listen(3000, () => {
    console.log("server running on http://127.0.0.1:3000")
})