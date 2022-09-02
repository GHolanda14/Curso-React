const express = require("express")
const router = express.Router();

//Controller
const {cadastrar,login, getCurrentUser} = require("../controllers/UserController")

//Middlewears
const validate = require("../middlewares/handleValidation");
const { userCreateValidation, loginValidation } = require("../middlewares/userValidations");
const authGuard = require("../middlewares/authGuard")

//Rotas
router.post("/cadastrar",userCreateValidation(),validate,cadastrar);
router.post("/login",loginValidation(),validate,login);
router.get("/perfil", authGuard,getCurrentUser)

module.exports = router;