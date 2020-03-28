const express = require('express');
const sessionController = require('./controller/SessionController');
const ongController = require('./controller/OngController');
const incidentController = require('./controller/incidentController');
const profileController = require('./controller/ProfileController');
const routes = express.Router();

//LOGIN
routes.post('/sessions', sessionController.create);

//ONGS
routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

//CASO ESPECIFICO
routes.get('/profile', profileController.index);

//INCIDENTS
routes.get('/incidents', incidentController.index);
routes.post('/incidents', incidentController.create);
routes.delete('/incidents/:id', incidentController.delete);

module.exports = routes;