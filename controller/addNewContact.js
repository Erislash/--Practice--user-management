const addNewContact = require('../model/addNewContact');
module.exports = ({body}, res) => {
    addNewContact(() => {
        res.status(301).redirect('/contacts');
    }, body);
}

