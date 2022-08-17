const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET = process.env.JWT_SECRET;
// console.log("SECRET", SECRET);

const register = async (req, res) => {
  try {
    const user = new User(req.body);
    const newUser = await user.save();
    console.log("USER CREATED", newUser);
    const userToken = jwt.sign(
      { _id: newUser._id, email: newUser.email, userName: newUser.userName },
      SECRET
    );
    console.log("JWT:", userToken);
    res
      .status(201)
      .cookie("userToken", userToken, {
        httpOnly: true,
        expires: new Date(Date.now() + 900000),
      })
      .json({ successMessage: "user created", user: newUser });
  } catch (error) {
    console.log("REGISTER ERROR", error);
    res.status(400).json(error);
  }
};

const login = async (req, res) => {
  const userDocument = await User.findOne({ email: req.body.email });
  console.log("USERDOC", userDocument);
  if (!userDocument) {
    res.status(400).json({ error: "invalid email or password" });
  } else {
    try {
      const isPasswordValid = await bcrypt.compare(
        req.body.password,
        userDocument.password
      );
      if (!isPasswordValid) {
        res.status(400).json({ error: "invalid email or password" });
      } else {
        const userToken = jwt.sign(
          {
            _id: userDocument._id,
            email: userDocument.email,
            userName: userDocument.userName,
          },
          SECRET
        );
        console.log("JWT:", userToken);
        res
          .status(201)
          .cookie("userToken", userToken, {
            httpOnly: true,
            expires: new Date(Date.now() + 900000),
          })
          .json({ successMessage: "user logged in", user: userDocument });
      }
    } catch (error) {
      console.log("LOGIN ERROR", error);
      res.status(400).json({ error: "invalid email or password" });
    }
  }
};

const logout = (req, res) => {
  res.clearCookie("userToken");
  res.json({ successMessage: "User logged out" });
};

const getLoggedInUser = async (req, res) => {
  try {
    const user = jwt.verify(req.cookies.userToken, SECRET);
    const currentUser = await User.findOne({ _id: user._id });
    res.json(currentUser);
  } catch (error) {
    res.status(401).json({ error });
  }
};

module.exports = {
  register,
  login,
  logout,
  getLoggedInUser,
};
