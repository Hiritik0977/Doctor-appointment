const config = require("../config/keys");
const jwt = require("jsonwebtoken");
const secretKey = config.jwt.secret;

const ApiError = require("../utils/ApiError");

const verifyToken = (req, res, next) => {
  let authHeader = req.headers.authorization;
  if (!authHeader) {
    throw new ApiError(403, "No token provided");
  }
  let token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    next();
  } catch (error) {
    throw new ApiError(403, "Invalid Token"); 
  }
};

module.exports = verifyToken;
