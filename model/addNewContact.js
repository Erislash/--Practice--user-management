const mariadb = require('mariadb');
const db = require('./db');

module.exports = (callback, data) => db((conn) => {
    const {first_name,
        last_name,
        email,
        phone,
        comment,
        status} = data;
    console.log(first_name, last_name);
    conn.query("INSERT INTO contacts VALUES(NULL, ?, ?, ?, ?, ?, ?, NOW())", [first_name, last_name, email, phone, comment, status])
    .then(contact => {
        console.log("New Contact Added");
        callback();
    }).catch(err => {
        callback();
        console.log("Cannot add new contact");
        console.log(err);
    });
    conn.end()
    .then(() => console.log('DB Connection ended'))
    .catch((err) => console.log('Cannot end DB connection'));
});
