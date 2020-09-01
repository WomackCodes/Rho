const Security = require('../models/security');
const Portfolio = require('../models/portfolio');

module.exports = {
    index,
    buy,
    sell,
}

function getTime() {
    let tradeTime = new Security();
    let dt = tradeTime.time
    let tradeDate = dt.toISOString().slice(0, 16);
    return tradeDate;
}

function index(req, res) {
    Portfolio.find({}, function(err, portfolios) {
        res.render('portfolios/index', {portfolios, title: 'Portfolios'})
    });
}

function buy (req, res) {
    res.render('securities/show', {title: 'Buy Security', tradeDate: getTime()});
}

function sell(req, res) {
    Security.findByIdAndDelete(req.params.id, function(err) {
        res.redirect('/portfolios')
    })
    res.render('securities/show', { title: 'Sell Security', tradeDate: getTime() });
}