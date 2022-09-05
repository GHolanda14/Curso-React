const {body} = require("express-validator")

const photoInsertValidation = () => {
    return [
        body("titulo")
        .not()
        .equals("undefined")
        .withMessage("O título é obrigatório")
        .isString(0)
        .withMessage("O título é obrigatório")
        .isLength({min: 3})
        .withMessage("O título precisa ter no mínimo 3 caracteres"),
        body("imagem").custom((value, {req}) =>{
            if(!req.file){
                throw new Error("A imagem é obrigatória")
            }
            return true
        }),
    ]
}

module.exports = {photoInsertValidation}