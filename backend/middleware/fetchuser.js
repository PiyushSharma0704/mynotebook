const jwt = require("jsonwebtoken"); //to create a secure connection b/w user and srver for authnicating user for login
const JWT_SECRET = "shhhhh";

const fetchuser = (req, res, next) => {
  //get user from jwt token and add id to req obj
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;

    next();
  } catch (error) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }
};

module.exports = fetchuser;
