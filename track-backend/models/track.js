const mongoose = require('mongoose')

const track_schema = mongoose.Schema({
  title: { type: String, default: "", require: true },
  description: { type: String, default: "", },
  start_date: { type: Date, default: null },
  end_date: { type: Date, default: null },
  close_date: { type: Date, default: null },
  requirements: [],
  // facilitators:[]
  facilitators: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "facilitator",
    },
  ],
})

module.exports = mongoose.model('track', track_schema)