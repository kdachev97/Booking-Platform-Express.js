const { getAll, getById } = require('../services/roomService');

const router = require('express').Router();

router.get('/', async (req, res) => {

  const user = req.user;
  console.log(user);

  const search = req.query.search || '';
  const city = req.query.city || '';
  const fromPrice = Number(req.query.fromPrice) || 1;
  const toPrice = Number(req.query.toPrice) || 1000;
  const accommodations = await getAll(search, city, fromPrice, toPrice);
  res.render('catalog', {
    title: 'All Accommodation',
    accommodations,
    search: search,
    city: city,
    fromPrice: fromPrice,
    toPrice: toPrice
  });
});

router.get('/:id', async (req, res) => {
  const accommodationId = req.params.id;
  const accommodation = await getById(accommodationId);

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