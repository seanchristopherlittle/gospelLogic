const mongoose = require("mongoose");

const CheckInSchema = mongoose.Schema(
  {
    month: {
      type: String,
      required: [true, "month is required"],
      enum: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    },
    year: {
      type: Number,
      required: [true, "year is required"],
      enum: [2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030],
    },
    faithLifeScore: {
      type: Number,
      required: [true, "an entry is required"],
      min: [0, "give yourself some credit!"],
      max: [10, "let's keep it between 1 - 10"],
    },
    faithLife: {
      type: String,
      required: [true, "an entry is required"],
      maxlength: [500, "entry length exceeds maximum"],
    },
    marriageLifeScore: {
      type: Number,
      // required:[true, "an entry is required"],
      min: [0, "give yourself some credit!"],
      max: [10, "let's keep it between 1 - 10"],
    },
    marriageLife: {
      type: String,
      // required: [true, "an entry is required"],
      maxlength: [500, "entry length exceeds maximum"],
    },
    familyLifeScore: {
      type: Number,
      required: [true, "an entry is required"],
      min: [0, "give yourself some credit!"],
      max: [10, "let's keep it between 1 - 10"],
    },
    familyLife: {
      type: String,
      required: [true, "an entry is required"],
      maxlength: [500, "entry length exceeds maximum"],
    },
    workLifeScore: {
      type: Number,
      required: [true, "an entry is required"],
      min: [0, "give yourself some credit!"],
      max: [10, "let's keep it between 1 - 10"],
    },
    workLife: {
      type: String,
      required: [true, "an entry is required"],
      maxlength: [500, "entry length exceeds maximum"],
    },
    digitalLifeScore: {
      type: Number,
      required: [true, "an entry is required"],
      min: [0, "give yourself some credit!"],
      max: [10, "let's keep it between 1 - 10"],
    },
    digitalLife: {
      type: String,
      required: [true, "an entry is required"],
      maxlength: [500, "entry length exceeds maximum"],
    },
    ministryLifeScore: {
      type: Number,
      required: [true, "an entry is required"],
      min: [0, "give yourself some credit!"],
      max: [10, "let's keep it between 1 - 10"],
    },
    ministryLife: {
      type: String,
      required: [true, "an entry is required"],
      maxlength: [500, "entry length exceeds maximum"],
    },
    financialLifeScore: {
      type: Number,
      required: [true, "an entry is required"],
      min: [0, "give yourself some credit!"],
      max: [10, "let's keep it between 1 - 10"],
    },
    financialLife: {
      type: String,
      required: [true, "an entry is required"],
      maxlength: [500, "entry length exceeds maximum"],
    },
    socialLifeScore: {
      type: Number,
      required: [true, "an entry is required"],
      min: [0, "give yourself some credit!"],
      max: [10, "let's keep it between 1 - 10"],
    },
    socialLife: {
      type: String,
      required: [true, "an entry is required"],
      required: [true, "an entry is required"],
      maxlength: [500, "entry length exceeds maximum"],
    },
    attitudinalLifeScore: {
      type: Number,
      required: [true, "an entry is required"],
      min: [0, "give yourself some credit!"],
      max: [10, "let's keep it between 1 - 10"],
    },
    attitudinalLife: {
      type: String,
      required: [true, "an entry is required"],
      maxlength: [500, "entry length exceeds maximum"],
    },
    creativeLifeScore: {
      type: Number,
      required: [true, "an entry is required"],
      min: [0, "give yourself some credit!"],
      max: [10, "let's keep it between 1 - 10"],
    },
    creativeLife: {
      type: String,
      required: [true, "an entry is required"],
      maxlength: [500, "entry length exceeds maximum"],
    },
    emotionalLifeScore: {
      type: Number,
      required: [true, "an entry is required"],
      min: [0, "give yourself some credit!"],
      max: [10, "let's keep it between 1 - 10"],
    },
    emotionalLife: {
      type: String,
      required: [true, "an entry is required"],
      maxlength: [500, "entry length exceeds maximum"],
    },
    physicalLifeScore: {
      type: Number,
      required: [true, "an entry is required"],
      min: [0, "give yourself some credit!"],
      max: [10, "let's keep it between 1 - 10"],
    },
    physicalLife: {
      type: String,
      required: [true, "an entry is required"],
      maxlength: [500, "entry length exceeds maximum"],
    },
    monthlyGoal: {
      type: String,
      required: [true, "an entry is required"],
      maxlength: [500, "entry length exceeds maximum"],
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const CheckIn = mongoose.model("checkIn", CheckInSchema);
module.exports = CheckIn;
