const jwt = require("jsonwebtoken");
require("dotenv").config();

const Authentication = async (req, res, next) => {
  const verify = req.headers.authorization;
  if (!verify) {
    return res.send({ message: "Please login again", response: false });
  }
  let token = verify.split(" ")[1];
  const SECRET_KEY = process.env.SECRET_KEY;

  await jwt.verify(token, SECRET_KEY, function (err, decoded) {
    if (err) {
      return res.send({ message: "Please login again", response: false });
    }
    req.body.email = decoded.email;
    req.body.userId = decoded.id;
    next();
  });
};

module.exports = Authentication;
