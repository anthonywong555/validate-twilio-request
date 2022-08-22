'use strict';

/**
 * Imports
 */
import 'dotenv/config';
import express from 'express';

/**
 * Clients
 */
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.listen(PORT, () => console.log(`Listening on ${PORT}.\nNode Environment is on ${process.env.NODE_ENV} mode.`));