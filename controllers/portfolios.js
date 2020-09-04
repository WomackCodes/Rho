const Portfolio = require('../models/portfolio');
const BASE_URL = 'https://cloud.iexapis.com/stable/stock';
const request = require('request');

module.exports = {
    show,
    index,
    new: newPortfolio,
    create,
    delete: deletePortfolio,
    // update,
}

function index(req, res) {
    Portfolio.find({}, function (err, portfolio) {
        res.render('portfolios/index', { portfolio, title: 'Portfolios' })
    });
}
// function index(req, res) {
//     Book.find({ 'user': req.user._id }, function (err, books) {
//         res.render('books/index', { title: 'your books', books });
//     });
// }; 

function newPortfolio(req, res) { 
    res.render('portfolios/new', { title: 'Portfolio', portfolio: false});
}


function create (req, res) {
    req.body.user = req.user._id;
    Portfolio.create(req.body, function(err, portfolios){
        res.redirect(`/portfolios/${portfolios._id}`);
    });
}

function show(req, res) {
    Portfolio.findOne({user: req.user._id}, function(err, portfolio) {
        res.render('portfolios/show', {portfolio, title: 'Portfolio'})
    });
}

function deletePortfolio(req, res) {
    Portfolio.findByIdAndDelete(req.params.id, function (err) {
        res.redirect('/portfolios');
    });
};
