const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    university: { type: String, required: true },
    level: { type: String, default: "Beginner" },
    position: { type: String, required: true },
    trackId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Track",
      required: true,
    },
    work: { type: String, required: true },
    github: { type: String, default: "" },
    availability: { type: Boolean, default: false },
    reason: { type: String, required: true },
    status: { type: String, default: "Pending" },
  },
  { timestamps: true }
);

const Request = mongoose.model("Request", requestSchema);

module.exports = Request;
