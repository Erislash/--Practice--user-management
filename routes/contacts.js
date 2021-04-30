const express = require('express');
const routes = express.Router();
const getContacts = require('../controller/getContacts');


routes.get('/', getContacts);

module.exports = routes;