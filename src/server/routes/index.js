const { Router } = require('express');
const router = Router();


router.get('/api', (req, res)=> {
    res.json({'title': 'Apis are working !!'})
});


module.exports = router;