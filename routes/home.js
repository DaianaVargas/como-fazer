const express = require('express')
const router = express.Router()
// const controller = require('../controllers/home')
const controller = require('../controllers/categorias')

// router.get('/', controller.list)
router.get('/', controller.listHome)

module.exports = router