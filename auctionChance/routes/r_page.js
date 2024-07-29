const express = require('express');
const router = express.Router();
const { index, item } = require('../contorller/c_page');

// 최재혁
const { secondhand } = require('../contorller/c_page');

router.get('/', index);
router.get('/item', item);


// 중고 상품 페이지
router.get('/secondhand', secondhand);

module.exports = router;
