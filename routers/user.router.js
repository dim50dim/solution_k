const router = require('express').Router();


router.get('/',(res,req) => {
    res.render('index.html') ;
});

module.exports = router;