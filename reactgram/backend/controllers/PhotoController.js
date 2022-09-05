const Photo = require("../models/Photo");
const User = require("../models/User")
const mongoose = require("mongoose");

const insertPhoto = async (req, res) => {
  const { titulo } = req.body;
  const imagem = req.file.fileName;

  const reqUser = req.user;

  const user = await User.findById(reqUser._id);

  const newPhoto = await Photo.create({
    imagem,
    titulo,
    userId: user._id,
    userName: user.nome,
  });

  if (!newPhoto) {
    res
      .status(422)
      .json({
        errors: "Houve um problema, por favor tente novamente mais tarde.",
      });
  }

  res.status(201).json(newPhoto);
};

module.exports = { insertPhoto };
