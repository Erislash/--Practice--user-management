const deleteContact = require('../model/deleteContact');
module.exports = ({params: {id}}, res) => {
    
    deleteContact(() => {
        console.log(id);
        res.status(301).redirect('/contacts');
    }, id);
}

