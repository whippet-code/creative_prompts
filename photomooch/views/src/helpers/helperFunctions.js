// jwt verify function to return user info

const jwt = require("jsonwebtoken");
const secret = "jwtPrivateKey";

// get token from local storage
const token = localStorage.getItem("token");

// verify token func
const userInfoFromJWT = () => {
  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      console.log(err);
      return;
    }
    // get user from db
    const user = { ...decoded };
    // return user info
    return user;
  });
};

// export func
module.exports = userInfoFromJWT;
