const express = require("express")
const routes = express.Router()
const newdata = require("../controller/signupApi.js")

routes.post("/signup",newdata.signUp)

module.exports = routes