const express = require('express')
const router = express.Router()
const Hotel = require('../models/hotel.schema.js');
const bodyParser = require('body-parser');
router.use(bodyParser.json());
const fileUpload = require('express-fileupload');
const editHotel = require('../controllers/edithotel.controller.js');

router.use(fileUpload());

router.use((req, res, next) => {
    if (req.session.user !== undefined && req.session.user.Type === 'admin') {
        next();
    }
    else {
        res.render('err', { err: 'You are not an Admin', user: (!req.session.authenticated) ? "" : req.session.user })
    }
});

router.get('/', async function (req, res) {
    var Hotels = [];
    Hotels = await Hotel.find();
    res.render("edithotels", { hotels: (Hotels === 'undefined' ? "" : Hotels) });
});

router.get('/:name', async function (req, res) {
    var Hotels = [];
    var url = req.params.name;
    Hotels = await Hotel.find({ "Name": url });
    res.render("edithotel1", { hotel: (Hotels === 'undefined' ? "" : Hotels) });
});

router.post('/updated/:name', editHotel.updateHotel);

module.exports = router;    