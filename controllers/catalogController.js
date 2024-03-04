const { getAll, getById } = require('../services/accommodationService');

const router = require('express').Router();

router.get('/', (req, res) => {
  const search = req.query.search || '';
  const city = req.query.city || '';
  const fromPrice = Number(req.query.fromPrice) || 1;
  const toPrice = Number(req.query.toPrice) || 1000;
  const accommodations = getAll(search, city, fromPrice, toPrice);
  res.render('catalog', {
    title: 'All Accommodation',
    accommodations,
    search: search,
    city: city,
    fromPrice: fromPrice,
    toPrice: toPrice
  });
});

router.get('/:id', (req, res) => {
  const accommodationId = req.params.id;
  const accommodation = getById(accommodationId);

  if (accommodation) {
    res.render('details', {
      title: 'Accomodation Details',
      accommodation
    });
  } else {
    res.render('accommodationNotFound', {
      title: 'Accomodation Details',
      accommodationId
    });
  }
});

module.exports = router;