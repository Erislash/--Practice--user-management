const mariadb = require('mariadb');
const db = require('./db');

module.exports = (callback, id) => db((conn) => {
    conn.query("select * from contacts WHERE id=?", id)
    .then(contact => {
        callback(contact[0]);
    }).catch(err =>callback([]));
    conn.end()
    .then(() => console.log('DB Connection ended'))
    .catch((err) => console.log('Cannot end DB connection'));
});
