const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salaoCliente = new Schema({
    clinicaId: {
        type: mongoose.Types.ObjectId,
        ref: 'Clinica',
        required: true,
    },
    clienteId: {
        type: mongoose.Types.ObjectId,
        ref: 'Cliente',
        required: true,
    },
    status: {
        type: String,
        required: true,
        enum: ['A', 'I'],
        default: 'A',
    },
    dataCadastro: {
        type: Date,
        default: Date.now,
    }
});


module.exports = mongoose.model('SalaoCliente', salaoCliente);