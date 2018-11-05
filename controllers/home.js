const api = require('../api')

const listHome = (req, res) => {
    // console.log('teste')
    res.render('home/index')
    // res.render('categorias/index', { 'teste': 'teste' })
}


// const list = async (req, res) => {
//     const categorias = await api.list('categorias')
//     res.render('categorias/index', { categorias })
// }

module.exports = listHome 
