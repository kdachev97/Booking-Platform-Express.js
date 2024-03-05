const mongoose = require('mongoose');

const connString = process.env.DATABASE_CONNECTION_STRING || 'mongodb://localhost:27017/booking';

module.exports = async (app) => {
  try {
    await mongoose.connect(connString);
    console.log('Database connected');
  } catch (err) {
    console.log('Error initializing database');
    console.error(err.message);
    process.exit(1);
  }
};