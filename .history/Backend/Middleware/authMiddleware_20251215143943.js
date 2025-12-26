const jwt = require("jsonwebtoken");

module.exports = (role) => (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.sendStatus(403);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err || user.role !== role) return res.sendStatus(403);
    req.user = user;
    next();
  });
};