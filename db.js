const mysql = require('mysql2');

// Configuración de la conexión a la base de datos MySQL
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'carrito_de_compras',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool.promise();

