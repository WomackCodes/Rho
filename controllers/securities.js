const BASE_URL = 'https://cloud.iexapis.com/stable/stock';
const request = require('request');
const Portfolio = require('../models/portfolio');

module.exports = {
    show, 
    new: newStock,
    create, 
    delete: deleteSell,
}

function show(req, res) {
    Portfolio.findById(req.query.portfolio, function(err, portfolio) {
        if (err) console.log(err);
        console.log(portfolio);
        let url = `${BASE_URL}/${req.query.stock}/quote?token=${process.env.IEX_TOKEN}`;
        request(url, function (error, response, body) {
            let parsed = JSON.parse(body);
            res.render('securities/show', { quote: parsed, title: 'Securities', portfolio })
        });
    });
}

function newStock(req, res) {
    console.log(req.user);
    Portfolio.find({user: req.user._id}, function(err, portfolios){
        if (err) console.log(err);
        console.log(portfolios);
        res.render('securities/new', { portfolios, title: 'New Security' });
    });
}

function create(req, res) {
    let security = new Security(req.body);
    security.save(function (err) {
        if (err) {
            return res.render('securities/new', { title: 'New Security' });
        }
        res.redirect('/portfolios');
    })
}
function deleteSell(req, res) {
    Portfolio.findByIdAndDelete(req.params.id, function (err) {
        Security.remove({ flight: req.params.id }, function (err) {
            res.redirect('/securities');
        });
    });
}