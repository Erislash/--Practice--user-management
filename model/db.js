const mariadb = require('mariadb');
const settings = {
    user: process.env.user,
    password: process.env.password,
    host: process.env.host,
    database: process.env.database
}
const connection = mariadb.createConnection(settings);


module.exports = (callback)=>{
    connection.then((conn) => callback(conn));
};