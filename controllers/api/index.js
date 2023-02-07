const router = require('express').Router();
// imports our user route from the api folder
const userRoutes = require('./user-routes.js');

router.use('/users', userRoutes);

module.exports = router;