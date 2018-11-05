const express = require('express')
const router = express.Router()
const controller = require('../controllers/categorias')

// **** abrir tela de inclusão de categorias ****
router.get('/nova', controller.novaForm)

// **** salvar uma nova categoria ****
router.post('/nova', controller.nova)

// **** listar todas as categorias salvas ****
router.get('/', controller.list)

// **** excluir uma categoria ****
router.get('/excluir/:id', controller.apagar)

// **** abrir tela de edição de categoria ****
router.get('/editar/:id', controller.editarForm)

// **** salvar edição de categoria **** 
router.post('/editar/:id', controller.editar)

module.exports = router