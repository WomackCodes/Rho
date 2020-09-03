const Portfolio = require('../models/portfolio');
const BASE_URL = 'https://cloud.iexapis.com/stable/stock';
const request = require('request');

module.exports = {
    show,
    index,
    new: newPortfolio,
    create,
    // update,
}

function index(req, res) {
    Portfolio.find({}, function (err, portfolios) {
        res.render('portfolios/index', { portfolios, title: 'Portfolios' })
    });
}

function newPortfolio(req, res) { 
    let url = `${BASE_URL}/${req.query.stock}/quote?token=${process.env.IEX_TOKEN}`;
    request(url, function (error, response, body) {
        let parsed = JSON.parse(body);
        res.render('portfolios/new', { quote: parsed, title: 'New Portfolio' });
    });
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


// function getTime() {
    //     let tradeTime = new Security();
//     let dt = tradeTime.time
//     let tradeDate = dt.toISOString().slice(0, 16);
//     return tradeDate;
// }