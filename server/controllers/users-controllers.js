const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');

const User = require('../models/user');

const getUserById = async (req, res, next) => {
  const userId = req.params.id;
  console.log(userId)
  let user;
  try {
    user = await User.findById(userId, '-password');
  } catch (err) {
    const error = new HttpError(
      'Fetching user failed, please try again later.',
      500
    );
    return next(error);
  }
res.json({user: user.toObject({getters: true})})
};


const signup = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid inputs passed, please check your data.', 422)
    );
  }
  const { username, email, password } = req.body;

  let existingUser
  try {
    existingUser = await User.findOne({ email: email })
  } catch (err) {
    const error = new HttpError(
      'Signing up failed, please try again later.',
      500
    );
    return next(error);
  }
  
  if (existingUser) {
    const error = new HttpError(
      'User already exists.',
      422
    );
    return next(error);
  }
  
  const createUser = new User({
    username,
    email,
    password,
    listings: []
  });

  try {
    await createUser.save();
  } catch (err) {
    const error = new HttpError(
      'Signing up failed, please try again.',
      500
    );
    return next(error);
  }

  res.status(201).json({user: createUser.toObject({ getters: true })});
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;

  try {
    existingUser = await User.findOne({ email: email })
  } catch (err) {
    const error = new HttpError(
      'Logging in failed, please try again later.',
      500
    );
    return next(error);
  }

  if (!existingUser || existingUser.password !== password) {
    const error = new HttpError(
      'Invalid credentials.',
      401
    );
    return next(error);
  }
  ;

  res.json(existingUser);
};


// exports.createUser = createUser;
exports.getUserById = getUserById;
exports.signup = signup;
exports.login = login;