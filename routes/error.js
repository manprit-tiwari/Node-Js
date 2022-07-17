const express = require('express');
const app = express();
const route = express.Router();

route.use((req, res, next) => {
    res.render('404', { pageTitle: 'Page Not Found!' });
});

module.exports = route;