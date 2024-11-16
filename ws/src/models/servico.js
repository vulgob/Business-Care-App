const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const servico = new Schema({
    clinicaId: {
        type: mongoose.Types.ObjectId,
        ref: 'Clinica',
        required: true,
    },
    titulo: {
        type: String,
        required: true,
    },
    preco: {
        type: Number,
        required: true,
    },
    comissao: {
        type: Number, // % de comissão sobre o valor 
        required: true,
    },
    duracao: {
        type: Number, // Duração em min. do serviço
        required: true,
    },
    recorrencia: {
        type: Number,  // 
        required: true,
    },
    descricao: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        enum: ['A', 'i', 'E'],
        default: 'A',
    },
    dataCadastro: {
        type: Date,
        default: Date.now,
    }
});


module.exports = mongoose.model('Servico', servico);