const { Router } = require('express');
const { index, about, contactMe } = require('../controllers/indexController');

const indexRouter = Router();

indexRouter.get('/', index);

indexRouter.get('/about', about);

indexRouter.get('/contact-me', contactMe);

module.exports = indexRouter;