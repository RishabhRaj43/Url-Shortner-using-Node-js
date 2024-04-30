const mongooose = require("mongoose");

const urlShortnerSchema = new mongooose.Schema(
  {
    shortId: {
      type: String,
      required: true,
      unique: true,
    },
    redirectUrl: {
      type: String,
      required: true,
    },
    visited: [{ timestamps: { type: Number } }],
  },
  { timestamps: true }
);

const url = mongooose.model("url", urlShortnerSchema);

module.exports = url;
