const router = require('express').Router();
const web = require('./web');
const android = require('./android');

router.use('/web',web);
router.use('/android',android);

module.exports = router;