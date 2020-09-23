const { Router } = require('express');
const router = Router();
const fetch = require('node-fetch');
const url = 'http://jsonplaceholder.typicode.com/posts';

router.get('/', async (req, res)=> {
    const response =  await fetch(url);
    const posts =  await response.json();
    res.json(posts);
    res.status(200).send({});
});


module.exports = router;