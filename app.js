const express = require('express')
const bookRoute = require("./routes/bookRoute")
const app = express()

const { books } = require('./database/connection')
require('./database/connection')
app.use(express.json())



app.use("/api",bookRoute)

app.listen(3000, () => {
    console.log("server running on http://127.0.0.1:3000")
})