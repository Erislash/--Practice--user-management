const mariadb = require('mariadb');
const db = require('./db');

module.exports = (callback, id) => db((conn) => {
    conn.query("DELETE FROM contacts WHERE id=?", id)
    .then(contact => {
        console.log("Contact Removed");
        callback();
    }).catch(err => {
        callback();
        console.log("Cannot Remove Contact");
        console.log(err);
    });
    conn.end()
    .then(() => console.log('DB Connection ended'))
    .catch((err) => console.log('Cannot end DB connection'));
});
