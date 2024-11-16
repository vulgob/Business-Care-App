const express = require('express');
const router = express.Router();
const Clinica = require('../models/clinica');
const Servico = require('../models/servico');

router.post('/', async (req, res) => {
    try {
        const clinica = await new Clinica(req.body).save();
        res.json({ clinica });
    } catch (err) {
        res.json({ error: true, message: err.message })
    }
});

router.get('/servico/:clinicaId', async (req, res) => {
    try {
        const { clinicaId } = req.params;
        const servicos = await Servico.find({
            clinicaId,
            status: 'A'
        }).select('_id titulo');

        res.json({
            servicos: servicos.map((s) => ({ label: s.titulo, value: s._id })),
        });
        
    } catch (err) {
        res.json({ error: true, message: err.message });
    }
});
module.exports = router;