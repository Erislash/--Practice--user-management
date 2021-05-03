const mariadb = require('mariadb');
const settings = {
    user:           process.env.user,
    password:       process.env.password,
    host:           process.env.host,
    database:       process.env.database
}
const pool = mariadb.createPool(settings);


module.exports = (callback)=>{
    pool.getConnection()
    .then((conn) => callback(conn))
    .catch(err => console.log(err));
};