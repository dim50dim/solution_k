const express = require('express');
const path = require('path');



const PORT =  5000;

const app = express();
const staticPath = path.join(__dirname,'static');


app.use(express.static(staticPath));


const { pingRouter,
        userRouter} = require('./routers');

app.use('/ping',pingRouter);
app.use('/user',userRouter);

app.listen(PORT, (res,req) => {
    console.log('WE ARE LISTENIG PORT',PORT);
});