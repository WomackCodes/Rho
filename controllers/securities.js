const BASE_URL = 'https://cloud.iexapis.com/stable/stock';
const request = require('request');

module.exports = {
    show, 
    new: newBuy,
    create, 
    // delete: deleteSell,
}

function show(req, res) {
    let url = `${BASE_URL}/${req.query.stock}/quote?token=${process.env.IEX_TOKEN}`;
    request(url, function (error, response, body) {
        let parsed = JSON.parse(body);
        res.render('securities/show', { quote: parsed, title: 'Securities' })
    });
}

function newBuy(req, res) {
    res.render('securities/new', { securities, title: 'New Security' });
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
// function deleteSell(req, res) {
//     Portfolio.findByIdAndDelete(req.params.id, function (err) {
//         Security.remove({ flight: req.params.id }, function (err) {
//             res.redirect('/securities');
//         });
//     });
// }