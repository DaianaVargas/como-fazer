const axios = require('axios')
const baseUrl = 'https://como-fazer-devpleno13.firebaseio.com/'
const auth = 'HwW7uir9kgZULD4DAOgTcNK2dk6TYB2oZxucfxAi'

const list = async (key) => {
    const content = await axios.get(baseUrl + key + '.json?auth=' + auth)
    // res.render('categorias/index', { categorias: content.data})

    if (content.data) {
        const objetos = Object
            .keys(content.data)
            .map(key => {
                return {
                    id: key,
                    ...content.data[key]
                }
            })
        return objetos
    }
    return []
}

const apagar = async (key, id) => {
    await axios.delete(baseUrl + key + '/' + id + '.json?auth=' + auth)
    return true
}

const get = async (key, id) => {
    const content = await axios.get(`${baseUrl}/${key}/${id}.json?auth=${auth}`)
    return {
            id: id,
            ...content.data
        }
}

const update = async (key, id, data) => {
    await axios.put(`${baseUrl}/${key}/${id}.json?auth=${auth}`, data)
    return true
}

const create = async (key, data) => {
    await axios.post(`${baseUrl}/${key}.json?auth=${auth}`, data)
    return true
}

module.exports = {
    list, apagar, get, update, create
}
