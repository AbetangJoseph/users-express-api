const mysql = require('mysql');

//hehehe I just remember php for here.
const config = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'api'
}

//my connection
const mysqlPool = mysql.createPool(config);


module.exports = mysqlPool;