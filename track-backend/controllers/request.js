const Request = require("../models/request");
const Track = require("../models/track");

const createRequest = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      university,
      level,
      position,
      work,
      github,
      availability,
      reason,
      trackId,
    } = req.body;

    const track = await Track.findById(trackId);
    if (!track) {
      return res.status(404).json({ message: "Track not found" });
    }

    const newRequest = new Request({
      name,
      email,
      phone,
      university,
      level,
      position,
      work,
      github,
      availability,
      reason,
      trackId: track._id,
    });

    await newRequest.save();

    res
      .status(201)
      .json({ message: "Request created successfully", request: newRequest });
  } catch (error) {
    res.status(500).json({ message: "Error creating request", error });
  }
};

module.exports = {
  createRequest,
};
