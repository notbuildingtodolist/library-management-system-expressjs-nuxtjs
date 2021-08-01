/**
 * Logs every path hit. 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
module.exports = (req, res, next) => { 
  console.log(`${req.method.toUpperCase()} | ${req.protocol}://${req.headers.host}${req.url}`);
  next();
};
