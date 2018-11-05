const express = require('express')
const app = express()
// const axios = require('axios')
// const api = require('./api')
const bodyParser = require('body-parser')

const categorias = require('./routes/categorias')
const publicacoes = require('./routes/publicacoes')
const home = require('./routes/home')

app.set('view engine', 'ejs') // ejs: HTML turbinado, mas ainda é HTML; jade: deixa de ser HTML
app.use(bodyParser.urlencoded())

const port = process.env.port || 3000

// let i = 10
// app.get('/', (request, response) => {
//     i++
//     // response.send(`<h1>Olá Fullstack Lab ${i}</h1>`)
//     response.render('index', { i: i})
// })

// **** Get teste.json ****
// app.get('/', async(request, response) => {
//     const content = await axios.get('https://como-fazer-devpleno13.firebaseio.com/teste.json')
//     console.log(content.data)
//     // response.send(`<h1>Olá Fullstack Lab ${i}</h1>`)
//     response.render('index', { i: content.data})
// })

// **** abrir tela de inclusão de categorias ****
// app.get('/categorias/nova', (req, res) => {
//     res.render('categorias/nova')
// })

// **** salvar uma nova categoria ****
// app.post('/categorias/nova', async (req, res) => {
//     // console.log(req.body)

//     await axios.post('https://como-fazer-devpleno13.firebaseio.com/categorias.json', {
//         categoria: req.body.categoria
//     })

//     // res.send(req.body)
//     res.redirect('/categorias')
// })

// **** listar todas as categorias salvas ****
// app.get('/categorias', async (req, res) => {
//     const content = await axios.get('https://como-fazer-devpleno13.firebaseio.com/categorias.json')
//     // res.render('categorias/index', { categorias: content.data})

//     if (content.data) {
//         const categorias = Object
//             .keys(content.data)
//             .map(key => {
//                 return {
//                     id: key,
//                     ...content.data[key]
//                 }
//             })
//         res.render('categorias/index', { categorias: categorias})
//     } else {
//         res.render('categorias/index', { categorias: []})
//     }
// })

// **** excluir uma categoria ****
// app.get('/categorias/excluir/:id', async (req, res) => {
//     await axios.delete(`https://como-fazer-devpleno13.firebaseio.com/categorias/${req.params.id}.json`)
//     // res.send('excluído')
//     res.redirect('/categorias')
// })

// **** abrir tela de edição de categoria ****
// app.get('/categorias/editar/:id', async (req, res) => {
//     const content = await axios.get(`https://como-fazer-devpleno13.firebaseio.com/categorias/${req.params.id}.json`)
//     res.render('categorias/editar', {
//         categoria: {
//             id: req.params.id,
//             ...content.data
//         }
//     })
// })

// **** salvar edição de categoria **** 
// app.post('/categorias/editar/:id', async (req, res) => {
//     // console.log(req.body)

//     await axios.put(`https://como-fazer-devpleno13.firebaseio.com/categorias/${req.params.id}.json`, {
//         categoria: req.body.categoria
//     })

//     // res.send(req.body)
//     res.redirect('/categorias')
// })



// **** Get teste.json ****
app.get('/', async(request, response) => {
    // console.log(content.data)
    response.render('index')
})

app.use('/categorias', categorias)
app.use('/publicacoes', publicacoes)
app.use('/home', home)


// ouvir uma porta de entrada
app.listen(port, (err) => {
    if (err) {
        console.log('Error')
    } else {
        console.log('Como-fazer server is running on port ', port)
    }
}) 
