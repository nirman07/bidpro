require("dotenv").config();
const { decode } = require("jsonwebtoken");
const jwt = require("jsonwebtoken");

generateAccesstoken = async (user) => {
  console.log(user);
  let token = jwt.sign(user, process.env.JWTKEY, { expiresIn: "1d" });
  return Promise.resolve(token);
};

verifyUser = (req, res, next) => {
  try {
    let token = req.headers.authorization;
    if (!token) {
      res.status(404);
      res.json({ error: "Access denied." });
    } else {
      token = token.split(" ");
      token= token[1]
      console.log(token);
      const decoded = jwt.verify(token, process.env.JWTKEY);
      if (decoded) {
        req.body.users_id = decoded._id;
        req.body.role_id = decode.role_id;
      }
      next();
    }
  } catch (er) {
    res.status(404);
    res.json({ error: er });
  }
};
module.exports = {
  generateAccesstoken,
  verifyUser,
};
