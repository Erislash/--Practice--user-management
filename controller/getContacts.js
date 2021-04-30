const getContacts = require('../model/getContacts');
module.exports = (req, res) => {
    getContacts(contacts => {
        console.log(contacts);
        res.render('contacts.ejs', {contacts});
    });
}

