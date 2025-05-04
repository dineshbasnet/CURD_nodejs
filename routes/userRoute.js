
const {registerUser, gotoRegisterPage, loginPage,addUser} = require("../controllers/userController")

const router = require("express").Router()

router.route("/register").post(registerUser).get(gotoRegisterPage)
router.route("/login").get(loginPage).post(addUser)

module.exports = router