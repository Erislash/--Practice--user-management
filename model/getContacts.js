const mariadb = require('mariadb');
const db = require('./db');

module.exports = (callback) => db((conn) => {
    conn.query("select * from contacts")
    .then(rows => {
        let contacts = [];
        for(row of rows){
            contacts.push(row)
        }
        callback(contacts);
    }).catch(err =>callback([]));
    conn.end()
    .then(() => console.log('DB Connection ended'))
    .catch((err) => console.log('Cannot end DB connection'));
});
