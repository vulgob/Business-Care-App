const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
require('./database');

// MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// VARIABLES
app.set('port', 8000);

// ROUTES
app.use('/clinica', require('./src/routes/clinica.routes'));
app.use('/cliente', require('./src/routes/cliente.routes'));
app.use('/servico', require('./src/routes/servico.routes'));
app.use('/colaborador', require('./src/routes/colaborador.routes'));
app.use('/horario', require('./src/routes/horario.routes'));
app.use('/agendamento', require('./src/routes/agendamento.routes'));

app.listen(app.get('port'), () => {
    console.log(`WS rodando na porta ${app.get('port')}`);
});