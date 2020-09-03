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
// function index(req, res) {
//     Book.find({ 'user': req.user._id }, function (err, books) {
//         res.render('books/index', { title: 'your books', books });
//     });
// }; 

function newPortfolio(req, res) { 
    res.render('portfolios/new', { title: 'Portfolio'});
}


function create (req, res) {
    req.body.user = req.user._id;
    Portfolio.create(req.body, function(err, portfolio){
        res.redirect(`/portfolios/${portfolio._id}`);
    });
}

function show(req, res) {
    Portfolio.findOne({user: req.user._id}, function(err, portfolio) {
        console.log(portfolio);
        res.render('portfolios/show', {portfolio, title: 'Portfolio'})
    });
}
