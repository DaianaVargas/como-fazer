const express = require("express");
const router = express.Router();
const controller = require("../controllers/categorias");

router.get("/", controller.listHome);

module.exports = router;
