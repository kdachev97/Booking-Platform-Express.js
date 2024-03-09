const defaultTitle = require("./defaultTitle")

module.exports = () => (req, res, next) => {
  res.locals.hasUser = req.user !== undefined;
  next();
}