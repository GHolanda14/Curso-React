const express = require("express")
const router = express.Router();

//Controller
const {cadastrar} = require("../controllers/UserController")

//Middlewears
const validate = require("../middlewares/handleValidation")

//Rotas
router.post("/cadastrar",validate,cadastrar);

module.exports = router;