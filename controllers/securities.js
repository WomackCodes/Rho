const Security = require('..models/securities/show')
const Trade = require('../models/securities/trade')

module.exports = {
    show, 
    // new: newBuy,
    // create, 
    // delete: deleteSell,
    // update,
}

// function getDefaultDate() {
//     let tradeTime = new Security();
//     let dt = tradeTime.time
//     let tradeDate = dt.toISOString().slice(0, 16);
//     return tradeDate;
// }

function show(req, res) {
    Security.find({}, function (err, securities) {
        res.render('securities/show', { securities, title: 'Securities' })
    });
}

// function newFlight(req, res) {
//     res.render('flights/new', { title: 'New Flight', destDate: getDefaultDate() })
// }

// function create(req, res) {
//     let flight = new Flight(req.body);
//     flight.save(function (err) {
//         if (err) {
//             return res.render('flights/new', { title: 'New Flight', destDate: getDefaultDate() });
//         }
//         res.redirect('/flights');
//     })
// }

// function show(req, res) {
//     Flight.findById(req.params.id, function (err, flight) {
//         Ticket.find({ flight: flight._id }, function (err, tickets) {
//             res.render('flights/show', { flight, tickets, title: 'Details', destDate: getDefaultDate() });
//         })
//     });
// }

// function deleteFlight(req, res) {
//     Flight.findByIdAndDelete(req.params.id, function (err) {
//         Ticket.remove({ flight: req.params.id }, function (err) {
//             res.redirect('/flights');
//         });
//     });
// }

// function edit(req, res) {
//     Flight.findById(req.params.id, function (err, flight) {
//         if (err) {
//             res.redirect(`/flights`)
//         }
//         res.render('flights/edit', { flight, title: 'Edit Flight', flightDeparts: flight.departs.toISOString().slice(0, 16) })
//     })
// }

// function update(req, res) {
//     Flight.findByIdAndUpdate(req.params.id, req.body, function (err, flight) {
//         if (err) {
//             res.render('flights/edit', { flight, title: 'Edit Flight', flightDeparts: flight.departs.toISOString().slice(0, 16) })
//         }
//         res.redirect(`/flights`)
//     })
// }

