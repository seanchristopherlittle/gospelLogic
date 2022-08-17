const CheckIn = require("../models/checkIn.model");
const jwt = require("jsonwebtoken");
const SECRET = process.env.JWT_SECRET;
const User = require("../models/user.model");

module.exports = {
  getCheckIns: (req, res) => {
    CheckIn.find({})
      .populate("createdBy", "userName email")
      .then((checkIns) => {
        res.json(checkIns);
      })
      .catch((err) => {
        console.log("ERROR IN GET ALL", err);
        res.status(400).json({
          message: "something went wrong in find all checkIns",
          error: err,
        });
      });
  },
  getCheckInsByUser: (req, res) => {
    User.findOne({ userName: req.params.userName }).then((user) => {
      CheckIn.find({ createdBy: user._id })
        .populate("createdBy", "userName email")
        .then((checkIns) => {
          res.json(checkIns);
        })
        .catch((err) => {
          console.log("ERROR IN Get all", err);
          res.status(400).json({
            message: "something went wrong in find all checkIns",
            error: err,
          });
        })
        .catch((err) => {
          console.log("ERROR IN Get all", err);
          res.status(400).json({
            message: "something went wrong in find all checkIns",
            error: err,
          });
        });
    });
  },
  getCheckInById: (req, res) => {
    CheckIn.findOne({ _id: req.params.id })
      .populate("createdBy", "userName email")
      .then((checkIn) => {
        console.log(checkIn);
        res.json(checkIn);
      })
      .catch((err) => {
        console.log("ERROR IN GET ONE", err);
        res.status(400).json({
          message: "something went wrong in findById",
          error: err,
        });
      });
  },
  createCheckIn: (req, res) => {
    const user = jwt.verify(req.cookies.userToken, SECRET);
    CheckIn.create({ ...req.body, createdBy: user._id })
      .then((newCheckIn) => {
        res.status(201).json(newCheckIn);
      })
      .catch((err) => {
        console.log("ERROR IN CREATE", err);
        res.status(400).json({
          message: "something went wrong in create",
          errors: err.errors,
        });
      });
  },
  updateCheckIn: (req, res) => {
    CheckIn.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
      .then((checkIn) => {
        res.json(checkIn);
      })
      .catch((err) => {
        console.log("ERROR IN UPDATE", err);
        res.status(400).json({
          message: "something went wrong in update",
          error: err,
        });
      });
  },
  deleteCheckIn: (req, res) => {
    CheckIn.deleteOne({ _id: req.params.id })
      .then((checkIn) => {
        res.json(checkIn);
      })
      .catch((err) => {
        console.log("ERROR IN DELETE CHECKIN", err);
        res.status(400).json({
          message: "something went wrong in delete",
          error: err,
        });
      });
  },
};
