exports.index = (req,res) => {
    res.render('index');
}
exports.item = (req,res) => {
    res.render('item');
}
exports.auction = (req,res) => {
    res.render('auction');
}
exports.auctiondetail = (req,res) => {
    res.render('auctiondetail');
}
exports.profile = (req,res) => {
    res.render('profile');
}
exports.secondhand = (req, res) => {
    res.render('secondhand');
};
