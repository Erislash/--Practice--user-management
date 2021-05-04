const express = require('express');
const routes = express.Router();
const getContacts = require('../controller/getContacts');
const getContact = require('../controller/getContact');
const searchContacts = require('../controller/searchContacts');
const newContact = require('../controller/newContact');
const addNewContact = require('../controller/addNewContact');
const {getPage: updatePage, updateContact} = require('../controller/editContact');
const deleteContact = require('../controller/deleteContact');


routes.get('/contact/:id', getContact);
routes.get('/edit-contact/:id', updatePage);
routes.post('/edit-contact/:id', updateContact);
routes.get('/delete-contact/:id', deleteContact);
routes.get('/new-contact', newContact);
routes.post('/new-contact', addNewContact);
routes.post('/', searchContacts);
routes.get('/', getContacts);


module.exports = routes;