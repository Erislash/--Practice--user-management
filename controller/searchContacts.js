const searchContacts = require('../model/searchContacts');
module.exports = (req, res) => {
    console.log("BODY", req.body);
    searchContacts((contacts) => {
        res.render('contacts.ejs', {contacts});
    }, req.body.search);
}