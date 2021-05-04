const {getPage: getPageModel, updateContact: updateModel} = require('../model/editContact');
const getPage = (req, res) => {
    getPageModel(contact => {
        res.render('editContact.ejs', {contact});
    }, req.params.id);
}

const updateContact = (req, res) => {
    updateModel(() => {
        res.status(300).redirect('/contacts');
    }, req.body, req.params.id);
};

module.exports = {getPage, updateContact};