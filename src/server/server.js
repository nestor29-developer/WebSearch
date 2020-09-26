const express = require('express');
const app = express();

const pathroute = require('path');
app.use(express.static( pathroute.resolve('./src/client')));

const environment = require('./environment');
const fetch = require('node-fetch');
const path = '/posts';

app.get('/api/posts', async (req, res) => {
    const response = await fetch(environment.apiEndpoint + path);
    if (response.status >= 400) throw new Error(data.errors);
    const data = await response.json();
    return res.json(data);
});

app.get('/api/posts/:id', async (req,res) => {
    const id = req.params.id;
    const response = await fetch(environment.apiEndpoint + path + `/${id}`);
    if (response.status >= 400) throw new Error(data.errors);
    const data = await response.json();
    return res.json(data);
});

app.listen(8080, function () {
    console.log('server on port 8080');
});

module.exports = app;