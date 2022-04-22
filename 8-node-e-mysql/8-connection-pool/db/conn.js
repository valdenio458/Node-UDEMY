import mysql from 'mysql';

const pool = mysql.createPool({ 
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'flamengo61',
    database: 'nodemysql2'

});

export default pool;