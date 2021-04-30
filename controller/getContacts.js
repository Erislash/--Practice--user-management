const getContacts = require('../model/getContacts');
module.exports = (req, res) => {
    getContacts(contacts => {
        res.render('contacts.ejs', {contacts});
    });
}

