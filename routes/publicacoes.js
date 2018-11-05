const express = require('express')
const router = express.Router()
const controller = require('../controllers/publicacoes')

// **** abrir tela de inclusão de categorias ****
router.get('/nova', controller.novaForm)

// **** salvar uma nova categoria ****
router.post('/nova', controller.nova)

// **** listar todas as categorias salvas ****
router.get('/categoria/:categoria', controller.list)
// router.get('/:categoria/:categoria', controller.list)

// **** excluir uma categoria ****
router.get('/excluir/:categoria/:id', controller.apagar)

// **** abrir tela de edição de categoria ****
router.get('/editar/:categoria/:id', controller.editarForm)

// **** salvar edição de categoria **** 
router.post('/editar/:categoria/:id', controller.editar)

module.exports = router