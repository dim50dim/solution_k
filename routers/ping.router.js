const router = require('express').Router();


router.get('/',(req,res) => {
    res.send('<h1>THAT IS ALLLLLLL!!!!!</h1>');
});

module.exports = router;