const express = require('express');
const router = express.Router();
const { index, item } = require('../contorller/c_page');

router.get('/', index);
router.get('/item', item);

module.exports = router;
