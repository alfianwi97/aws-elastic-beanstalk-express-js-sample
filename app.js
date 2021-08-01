const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/:name', (req, res) => res.send('Hello World '+req.params.name));
app.get('/:num1/:num2', (req, res) => res.send('Hello World '+(req.params.num1 + req.params.num2)));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
