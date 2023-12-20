// server.js

const express = require('express');
const path = require('path');
const db = require('./db');

const app = express();
const port = 3000;

app.use(express.static('public'));

// Ruta para la página principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Ruta para obtener productos desde la base de datos
app.get('/api/products', async (req, res) => {
    try {
        // Consulta a la base de datos para obtener todos los productos
        const [rows] = await db.query('SELECT * FROM products');
        res.json(rows);
    } catch (error) {
        console.error('Error al obtener productos:', error);
        res.status(500).json({ error: 'Error al obtener productos' });
    }
});

// Inicia el servidor en el puerto especificado
app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${3000}`);
});
