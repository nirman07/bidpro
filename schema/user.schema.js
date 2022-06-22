const { string } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  f_name: {
    type: String,
    require: true,
    lowercase: true,
    trim: true,
  },
  l_name: {
    type: String,
    lowercase: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    email: true,
  },

  mobile: {
    number: { type: String, trim: true, required: true },
    internationalNumber: { type: String, trim: true, required: true },
    nationalNumber: { type: String, trim: true, required: true },
    countryCode: { type: String, trim: true, required: true },
    dialCode: { type: String, trim: true, required: true },
    e164Number: { type: String, trim: true, required: true },
  },
  category_id: [
    {
      type: Schema.Types.ObjectId,
      ref: "categories",
      require: true,
    },
  ],

  roles_id: {
    type: Schema.Types.ObjectId,
    ref: "roles",
    require: true,
  },

  address: [
    {
      house_no: { type: String, require: true, lowercase: true, trim: true },
      street: { type: String, require: true, lowercase: true, trim: true },
      city: { type: String, require: true, lowercase: true, trim: true },
      pin: { type: String, require: true, trim: true },
    },
  ],
 
  is_active: {
    type: Boolean,
    default: true,
    require: true,
  },
});

let User = mongoose.model("user", userSchema);

module.exports = User;
