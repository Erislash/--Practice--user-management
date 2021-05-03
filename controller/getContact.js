const getContact = require('../model/getContact');
module.exports = (req, res) => {
    getContact(contact => {
        res.render('contact.ejs', {contact});
    }, req.params.id);
}

