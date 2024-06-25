const boom = require('@hapi/boom');

function chackApiKey(req, res, next) {
  const apikey = req.headers['api'];
  if(apikey === '123') {
    next();
  } else {
    next(boom.unauthorized());
  }
}

module.exports = { chackApiKey }
