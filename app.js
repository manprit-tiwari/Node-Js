const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');
const mongoDb = require('./util/database');

const addUserRoute = require('./routes/add-user');
const indexRoute = require('./routes/index');
const errorRoute = require('./routes/error');

const port = 3000;
const host = 'localhost';

app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));


app.use(addUserRoute);
app.use(indexRoute);
app.use(errorRoute);
// app.listen(port, host, () => console.log(`Example app listening on port http://${host}:${port}`));
mongoDb.mongoConnect(() => {
    app.listen(port);
    console.log('connected!!!');
})