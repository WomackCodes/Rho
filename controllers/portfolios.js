const Portfolio = require('../models/portfolio');
const request = require('request');

module.exports = {
    show,
    index,
    new: newPortfolio,
    create,
    // update,
}

// function getTime() {
//     let tradeTime = new Security();
//     let dt = tradeTime.time
//     let tradeDate = dt.toISOString().slice(0, 16);
//     return tradeDate;
// }
function newPortfolio(req, res) { 
    res.render('portfolios/new', { portfolios, title: 'New Portfolio' });
}

function create(req, res) {
    let portfolio = new Portfolio(req.body);
    portfolio.save(function (err) {
        if (err) {
            return res.render('portfolios/new', { title: 'New Portfolio'});
        }
        res.redirect('/portfolios');
    })
}

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