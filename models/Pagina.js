const mongoose = require('mongoose');

const PaginaSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    web: {
        type: String,
        required: true
    },
    repositorio: {
        type: String,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Pagina', PaginaSchema);