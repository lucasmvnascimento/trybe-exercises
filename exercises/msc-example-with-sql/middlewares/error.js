const error = (err, req, res, _next) => {

  if (err.isJoi) {
    return res.status(400)
      .json({ error: { message: err.details[0].message } });
  }

  res.status(400).json(err.error);
};

module.exports = error;