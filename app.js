const express = require('express');

const PORT =  5000;

const app = express();

app.use(express.static('static'));

app.get('/',(res,req) => {
    res.render('index.html') ;
});

app.listen(PORT, (res,req) => {
    console.log('WE ARE LISTENIG PORT',PORT);
});