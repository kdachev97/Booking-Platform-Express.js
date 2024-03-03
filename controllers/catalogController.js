const { getAll, getById } = require('../services/accommodationService');

const router = require('express').Router();

router.get('/', (req, res) => {
  const accommodations = getAll();
  res.render('catalog', {
    title: 'All Accommodation',
    accommodations
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