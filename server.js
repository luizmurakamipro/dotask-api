const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv-safe').config();

const app = express();

// Persistência
mongoose.connect(
	'mongodb+srv://luizmurakami:' +
		process.env.PASSWORD +
		'@cluster0-usoip.mongodb.net/agrostation?retryWrites=true&w=majority',
	{ useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: true }
);

// Configurar a aplicação para usar o Body-Parser
app.use(bodyParser.urlencoded([{ extended: false }]));
app.use(bodyParser.json());

app.use(cors());

// Porta da aplicação
const PORT = process.env.PORT || 3000;

// Rotas
var indexRoute = require('./src/routes/index-route');
var regRoute = require('./src/routes/register-route');
var authRoute = require('./src/routes/authenticate-route');
var taskRoute = require('./src/routes/task-route');

// Rota para Index
app.use('/api', indexRoute);

// Rota para Registro
app.use('/api/register', regRoute);

// Rota para Autenticação
app.use('/api/authenticate', authRoute);

// Rota para Propriedade
app.use('/api/task', taskRoute);

app.listen(PORT, () => console.log('API Running in Port: ' + PORT));
