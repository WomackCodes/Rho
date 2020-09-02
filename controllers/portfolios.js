// const Security = require('../models/security');
const Portfolio = require('../models/portfolio');
const request = require('request');
const token = process.env.TRADIER_TOKEN;
const rootURL = 'https://sandbox.tradier.com/v1/';

module.exports = {
    show,
    index,
    // new: newPosition,
    // create,
    // delete: deletePosition,
    // update,
}

// function getTime() {
//     let tradeTime = new Security();
//     let dt = tradeTime.time
//     let tradeDate = dt.toISOString().slice(0, 16);
//     return tradeDate;
// }

function show(req, res) {
    Portfolio.findById(req.params.id, function(err, portfolio) {
        res.render('portfolios/show', {portfolio, title: 'Portfolio'})
    });
}
function index(req, res) {
    Portfolio.find({}, function (err, portfolios) {
        res.render('portfolios/index', { portfolios, title: 'Portfolios' })
    });
}

// function buy (req, res) {
//     res.render('securities/show', {title: 'Buy Security', tradeDate: getTime()});
// }

// function sell(req, res) {
//     Security.findByIdAndDelete(req.params.id, function(err) {
//         res.redirect('/portfolios')
//     })
//     res.render('securities/show', { title: 'Sell Security', tradeDate: getTime() });
// }