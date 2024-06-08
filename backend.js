import express from 'express';
import mysql from 'mysql2/promise';
import {config} from './dbconfig.js';

const app = express();
const port = 3253;

app.get('/pizzas', async (req, res) => {
    const conn = await mysql.createPool(config);
    const [rows] = await conn.query('SELECT * FROM pizza');
    conn.end();
    res.json(rows);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});