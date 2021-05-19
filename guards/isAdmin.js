// Checks the users role. If the role is not admin, return 403 access denied
module.exports = function (req, res, next) {
  if (req.user.role != "admin")
    return res.status(403).send("Access denied, Admin only.");
  next();
};
