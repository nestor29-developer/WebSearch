// // import environment from '../environment';
// // import { Router } from 'express';
// // import fetch from 'node-fetch';

// const environment = require('../environment');
// const { Router } = require('express');
// const fetch = require('node-fetch');

// const router = Router();



// const path = '/posts';

// router.get('/', async (req, res) => {
//     const response = await fetch(environment.apiEndpoint + path);
//     if (response.status >= 400) throw new Error(data.errors);
//     const data = await response.json();
//     return res.json(data);
//     // res.status(200).send({});
// });


// // export const GetAll = router.get('/', async (req, res) => {
// //     const response = await fetch(environment.apiEndpoint + path);
// //     if (response.status >= 400) throw new Error(data.errors);
// //     const data = await response.json();
// //     return res.json(data);
// //     // res.status(200).send({});
// // });

// // export const GetById = router.get('/', async (id = 1) => {
// //     const response = await fetch(environment.apiEndpoint + path + `/${id}`);
// //     if (response.status >= 400) throw new Error(data.errors);
// //     const data = await response.json();
// //     return res.json(data);
// // });

// module.exports = router;