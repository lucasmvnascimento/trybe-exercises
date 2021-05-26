const express = require('express');
const userRoute = require('./routes/userRoute');

const app = express();

app.use(userRoute);

app.listen('3000', () => console.log('App Online On Port 3000'));