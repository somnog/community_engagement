const express = require("express");
const { createRequest } = require("../controllers/request");
const router = express.Router();

router.post("/create_request", createRequest);

module.exports = router;
