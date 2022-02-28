import express from 'express';
import './database.js';
import route from './routes/index.js';

const app = express();

app.use(route);

app.listen(3000, (err, res) => {
    console.log("Hello World");
});