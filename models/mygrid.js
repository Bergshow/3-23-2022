const mongoose = require('mongoose')

const modelo = mongoose.Schema({
    titulo: String,
    texto: String,
    enviado:{type: Date, deafult: Date.now}
})

const mygrid = mongoose.model('mygrid', modelo)

module.exports = mygrid 