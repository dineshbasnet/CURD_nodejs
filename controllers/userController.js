
const { users } = require("../database/connection")
const bcrypt = require("bcryptjs")


exports.registerUser = async function (req, res) {
    const email = req.body.email
    const username = req.body.username
    const password = req.body.password

    if (!email || !username || !password) {
        return res.send("Please provide email,username and password")
    }

    await users.create({
        email: email,
        username: username,
        password: bcrypt.hashSync(password, 8)
    })

    res.redirect("/login")
}

exports.gotoRegisterPage = function (req, res) {
    res.render("register")
}

exports.loginPage = function (req, res) {
    res.render("login")
}

exports.addUser = async function (req, res) {
    const email = req.body.email
    const password = req.body.password

    const userExist = await users.findAll({
        where: {
            email: email
        }
    })
    if (userExist.length > 0) {
        const isMatch = bcrypt.compareSync(password, userExist[0].password)

        if (isMatch) {
            res.send("Logged in Successfully")
        } else {
            res.send(" Invalid Email Or Password ")
        }
    }

    else {
        res.send("Invalid Email Or Password ")
    }
}
