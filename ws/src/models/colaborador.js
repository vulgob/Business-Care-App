const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const colaborador = new Schema({
    nome: {
        type: String,
        required: true,
    },
    telefone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    senha: {
        type: String,
        required: true,
    },
    foto: {
        type: String,
        required: true,
    },
    dataNascimento: {
        type: String,
        required: true,
    },
    sexo: {
        type: String,
        enum: ['M', 'F'],
        required: true,
    },
    status: {
        type: String,
        required: true,
        enum: ['A', 'i'],
        default: 'A',
    },
    contaBancaria: {
        titular: {
            type: String,
            required: true,
        },
        cpfCnpj: {
            type: String,
            required: true,
        },
        banco: {
            type: String,
            required: true,
        },
        tipo: {
            type: String,
            required: true,
        },
        agencia: {
            type: String,
            required: true,
        },
        titular: {
            type: String,
            required: true,
        },
    },
    recipientId: {
        type: String,
        default: Date.now,
    },
    dataCadastro: {
        type: Date,
        default: Date.now,
    }
});


module.exports = mongoose.model('Colaborador', colaborador);