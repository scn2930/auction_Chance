const express = require('express');
const router = express.Router();
const { index, item, auction, auctiondetail } = require('../contorller/c_page');

router.get('/', index);
router.get('/item', item);
router.get('/auction', auction);
router.get('/auctiondetail', auctiondetail);

module.exports = router;
