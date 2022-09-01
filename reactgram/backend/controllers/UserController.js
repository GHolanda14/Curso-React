const User = require("../models/User");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const jwtSecret = process.env.JWT_SECRET;

// Gerar token do usuário
const gerarToken = (id) =>{
    return jwt.sign({id}, jwtSecret,{
        expiresIn: "7d"
    });
}

// Cadastrar usuário e logar
const cadastrar = async (req, res) =>{
    res.send("Registrado");
}

module.exports = {
    cadastrar,
}