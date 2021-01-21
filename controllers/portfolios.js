const Portfolio = require('../models/portfolio');
const BASE_URL = 'https://cloud.iexapis.com/stable/stock';
const request = require('request');

module.exports = {
    index,
    show,
    new: newPortfolio,
    create,
    delete: deletePortfolio,
    update,
}

function index(req, res) {
    Portfolio.find({}, function (err, portfolio) {
        res.render('portfolios/index', { portfolio, user: req.user, title: 'Portfolios' })
    });
}

function show(req, res) {
    Portfolio.findOne({user: req.user._id}, function(err, portfolio) {
    if (err) {
        res.redirect('portfolios/new');
    } else {
        res.render('portfolios/show', { portfolio, user: req.user, title: 'Portfolio'})};
    });
}

function newPortfolio(req, res) { 
    res.render('portfolios/new', { title: 'Portfolio', portfolio: false});
}

function create (req, res) {
    req.body.user = req.user._id;
    Portfolio.create(req.body, function(err, portfolios){
        res.redirect(`/portfolios/${portfolios._id}`);
    });
}


function deletePortfolio(req, res) {
    Portfolio.findByIdAndDelete(req.params.id, function (err) {
        res.redirect('/portfolios');
    });
};

function update(req, res) {
    Portfolio.findById(req.params.id, function (err, portfolio) {
        portfolio.name = req.body.name;
        portfolio.save(function(err) {
            res.redirect(`/portfolios`);
        });
    });
};


// test for code push