const express = require('express');
// const { check } = require('express-validator');

const listingsControllers = require('../controllers/listings-controllers');

const router = express.Router();

router.get('/', listingsControllers.getListings);

router.post('/create_listing', listingsControllers.createListing);

router.get('/:lid', listingsControllers.getListingById);

router.get('/user/:uid', listingsControllers.getListingsByUserId)

router.get('/categories/:category', listingsControllers.getListingsByCategory);

router.patch('/:lid', listingsControllers.updateListing);

router.delete('/:lid', listingsControllers.deleteListing);

// router.patch(
//   '/:pid',
//   [
//     check('title')
//       .not()
//       .isEmpty(),
//     check('description').isLength({ min: 5 })
//   ],
//   placesControllers.updatePlace
// );

// router.delete('/:pid', placesControllers.deletePlace);

module.exports = router;

