const BASE_URL = 'https://cloud.iexapis.com/stable/stock';
const request = require('request');
const Portfolio = require('../models/portfolio');

module.exports = {
    show, 
    new: newStock,
    create, 
    delete: deleteStock,
}

function show(req, res) {
    Portfolio.findById(req.query.portfolio, function(err, portfolio) {
        let url = `${BASE_URL}/${req.query.stock}/quote?token=${process.env.IEX_TOKEN}`;
        request(url, function (error, response, body) {
            let parsed = JSON.parse(body);
            res.render('securities/show', { quote: parsed, title: 'Securities', portfolio, portfolios: true })
        });
    });
}

function newStock(req, res) {
    Portfolio.find({user: req.user.id}, function(err, portfolio){
        res.render('securities/new', { portfolio, title: 'New Security'});
    });
}

function create(req, res) {
Portfolio.findById(req.params.id, function(err, portfolio) {
    let totalCost = parseInt(req.body.count) * parseFloat(req.body.purchasePrice);
    if (totalCost <= portfolio.cash) {
        portfolio.cash = portfolio.cash - totalCost;
        portfolio.security.push(req.body);
        portfolio.save(function(err){
            res.render('portfolios/show', { portfolio, title: 'Portfolio', portfolios: true });
        });
    } else { 
        res.redirect('/securities/new');
    };
});
}

function deleteStock(req, res) {
    Portfolio.findByIdAndDelete(req.params.id, function (err) {
        Security.remove({ flight: req.params.id }, function (err) {
            res.redirect('/securities');
        });
    });
}