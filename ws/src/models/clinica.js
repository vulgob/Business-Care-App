const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clinica = new Schema({
    nome: {
        type: String,
        required: [true, 'Nome é obrigatório']
    },
    foto: String,
    capa: String,
    email: {
        type: String,
        required: [true, 'Email é obrigatório']
    },
    senha: {
        type: String,
        default: null,
    },
    telefone: String,
    endereco: {
        cidade: String,
        uf: String,
        cep: String,
        numero: String,
        pais: String,
    },
    geo: {
        tipo: String,
        coordinates: Array,
    },
    dataCadastro: {
        type: Date,
        default: Date.now,
    }
});

clinica.index({ geo: '2dsphere' });

module.exports = mongoose.model('Clinica', clinica);