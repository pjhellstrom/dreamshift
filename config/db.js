module.exports = {
  db:
    process.env.MONGODB_URI ||
    "mongodb://dreamshiftmaster:password123@ds127968.mlab.com:27968/heroku_d9qr140d"
};
