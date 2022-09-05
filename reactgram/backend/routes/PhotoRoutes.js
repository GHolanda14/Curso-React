const express = require("express");
const router = express.Router();

const { insertPhoto } = require("../controllers/PhotoController");

const { photoInsertValidation } = require("../middlewares/photoValidation");
const validate = require("../middlewares/handleValidation");
const authGuard = require("../middlewares/authGuard");
const { imageUpload } = require("../middlewares/imageUpload");

router.post(
  "/",
  authGuard,
  imageUpload.single("imagem"),
  photoInsertValidation(),
  validate,
  insertPhoto
);

module.exports = router;
