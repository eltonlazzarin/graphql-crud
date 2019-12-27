const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const MovieSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      required: true
    },
    producer: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

MovieSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("Movie", MovieSchema);
