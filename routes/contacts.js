const express = require('express');
const routes = express.Router();
const getContacts = require('../controller/getContacts');
const getContact = require('../controller/getContact');
const searchContacts = require('../controller/searchContacts');
const newContact = require('../controller/newContact');


routes.get('/contact/:id', getContact);
routes.get('/new-contact', newContact);
routes.post('/', searchContacts);
routes.get('/', getContacts);


module.exports = routes;