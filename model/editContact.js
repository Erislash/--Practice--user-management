const mariadb = require('mariadb');
const db = require('./db');

const getPage = (callback, id) => db((conn) => {
    conn.query("select * from contacts WHERE id=?", id)
    .then(contact => {
        callback(contact[0]);
    }).catch(err =>callback([]));
    conn.end()
    .then(() => console.log('DB Connection ended'))
    .catch((err) => console.log('Cannot end DB connection'));
});


const updateContact = (callback, user, id) => db((conn) => {
    const {first_name,
        last_name,
        email,
        phone,
        comment,
        status} = user;
    let query = 'UPDATE contacts SET ';
    query += 'first_name = ?,';
    query += 'last_name = ?,';
    query += 'email = ?,';
    query += 'phone = ?,';
    query += 'comment = ?,';
    query += 'status = ?';
    query += 'WHERE id = ?';


    conn.query(query, [first_name, last_name, email, phone, comment, status, id])
    .then(() => {
        console.log('USER UPDATED');
        callback();
    }).catch(err => {
        console.log('CANNOT UPDATE USER');
        console.log(err);
        callback();
    });
    conn.end()
    .then(() => console.log('DB Connection ended'))
    .catch((err) => console.log('Cannot end DB connection'));
});



module.exports = {getPage, updateContact};