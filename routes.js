const express = require('express');
const router = express.Router();
const fs = require('fs');
const uuid = require('uuid');
const movies = require('./movies.json');
const controllers = require('./controllers.js');

router.get('/', controllers.getAll);

router.get('/movies/page/:page', controllers.getPaged);

router.get('/movies/search', controllers.getByQueryParams);

router.post('/', controllers.post);

router.put('/movies/:id', controllers.put);

router.delete('/movies/:id', controllers.delete);

module.exports = router;
