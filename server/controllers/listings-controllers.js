// const uuid = require('uuid/v4');
const { validationResult } = require('express-validator');

const mongoose = require('mongoose');

const HttpError = require('../models/http-error');
// const getCoordsForAddress = require('../util/location');
const Listing = require('../models/listing');
const User = require('../models/user');



const getListings = async (req, res, next) => {
  let listings;
  try {
    listings = await Listing.find({});
  } catch (err) {
    const error = new HttpError(
      'Fetching users failed, please try again later.',
      500
    );
    return next(error);
  }
  res.json({listings: listings.map(listing => listing.toObject({ getters: true }))});
};


const getListingById = async (req, res, next) => {
  const listingId = req.params.lid;

  let listing;
  try {
    listing = await Listing.findById(listingId);
  } catch (err) {
    const error = new HttpError(
      'Could not find an item.',
      500
    );
    return next(error);
  };

  if (!listing) {
    const error = new HttpError(
      'Could not find an item for the provided id.',
      404
    );
    return next(error);
  }

  res.json({ listing: listing.toObject({ getters: true })});
};

const getListingsByCategory = async (req, res, next) => {
  const listingCategory = req.params.category;
  let itemCategory;
  try {
    itemCategory = await Listing.find({ category: listingCategory });
  } catch (err) {
    const error = new HttpError(
      'Could not find an item.',
      500
    );
  return next(error);
  }

  if (!itemCategory) {
    const error = new HttpError(
      'Could not find an item for the provided category.',
      404
    );
    return next(error);
  }
  console.log("itemCategory:", itemCategory)
  res.json({ listings: itemCategory.map(listing => listing.toObject({ getters: true }))});
};

const getListingsByUserId = async (req, res, next) => {
  const creatorId = req.params.uid;

  let userListings;
  try {
    userListings = await User.findById(creatorId).populate('listings');
  } catch (err) {
    const error = new HttpError(
      'Fetching items failed, please try again later',
      500
    );
    return next(error);
  }
  
  if (!userListings || userListings.listings.length === 0) {
    return next(
      new HttpError('Could not find items for the provided user id.', 404)
    );
  }

  res.json({
    listings: userListings.listings.map(listing =>
      listing.toObject({ getters: true })
    )
  });
};

const createListing = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid inputs passed, please check your data.', 422)
    );
  }

  const { category, title, description, quantity, location, userId } = req.body;

//   let coordinates;
//   try {
//     coordinates = await getCoordsForAddress(address);
//   } catch (error) {
//     return next(error);
//   }

  let newListing;
  try {
    newListing = await Listing.create({
      category,
      title,
      description,
      //image, 
      quantity,
      location,
      userId
    });
  } catch (err) {
      console.log(err)
      const error = new HttpError('Creating item1 failed, please try again', 500);
      return next(error);
  };

  let user;
  try {
    user = await User.findById(userId);
  } catch (err) {
    const error = new HttpError('Creating item2 failed, please try again', 500);
    return next(error);
  }

  if (!user) {
    const error = new HttpError('Could not find user for provided id', 404);
    return next(error);
  }

  console.log(user);

  try{
    console.log(newListing._id);
    user.listings.push(newListing._id);
    await user.save(); 
    } catch (err) {
    const error = new HttpError(
      'Creating item3 failed, please try again.',
      500
    );
    return next(error);
  }

  res.status(201).json({ listing: newListing });
};


const updateListing = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid inputs passed, please check your data.', 422)
    );
  }

  const { category, title, description, quantity, location } = req.body;
  const listingId = req.params.lid;

  let listing;
  try {
    listing = await Listing.findById(listingId);
  } catch (err) {
    const error = new HttpError(
      'Could not update item.',
      500
    );
    return next(error);
  }

  listing.category = category;
  listing.title = title;
  listing.description = description;
  listing.quantity = quantity;
  listing.location = location;

  try {
    await listing.save();
  } catch (err) {
    const error = new HttpError(
      'Could not update item.',
      500
    );
    return next(error);
  }

  res.status(200).json({ listing: listing.toObject({ getters: true }) });
};


const deleteListing = async (req, res, next) => {
  const listingId = req.params.lid;
  
  let listing;
  try {
    listing = await Listing.findById(listingId).populate('userID');
  } catch (err) {
    const error = new HttpError(
      'Could not delete item.',
      500
    );
    return next(error);
  }

  if (!listing) {
    const error = new HttpError('Could not find place for this id.', 404);
    return next(error);
  }

  try {
    await Listing.findByIdAndDelete(req.params.id);
  } catch (err) {
    const error = new HttpError(
      'Could not delete item.',
      500
    );
    return next(error);
  };

  res.status(200).json({ message: 'Deleted item.' });
};


exports.getListings = getListings;
exports.getListingById = getListingById;
exports.getListingsByCategory = getListingsByCategory;
exports.getListingsByUserId = getListingsByUserId;
exports.createListing = createListing;
exports.updateListing = updateListing;
exports.deleteListing = deleteListing;