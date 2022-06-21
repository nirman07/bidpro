const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  item_name: {
    type: String,
    require: true,
    lowercase: true,
    trim: true,
  },
  item_age: {
    type: String,
    require: true,
    lowercase: true,
    trim: true,
  },
  item_descrcription: {
    type: String,
    require: true,
    lowercase: true,
    trim: true,
  },
  item_prize: {
    type: Number,
    require: true,
  },
  bid_start_time: {
    type: Date,
    required:false
  },
  users_id: {
    type: Schema.Types.ObjectId,
    ref: "users",
    require: true,
  },
  category_id:[{
    type: Schema.Types.ObjectId,
    ref: "categories",
    require: true,
  }],
  is_active: {
    type: Boolean,
    default: true,
    require: true,
  },
  item_image:
  {
    type:String,
  },

});

let items = mongoose.model("items", itemSchema);

module.exports = items;
