const express = require("express");
require('dotenv').config();
const bodyParser = require("body-parser");
const dbConnect = require("./db/connect");
const track_routes = require("./routes/track"); // track routes
const facilitator_routes = require("./routes/facilitator"); // faceiltator routes
const request_routes = require("./routes/request"); // request routes

//add cors
const cors = require("cors");

const app = express();
app.use(cors());

app.use(bodyParser.json());
dbConnect();
app.use("/", track_routes); // Truck-related routes
app.use("/", facilitator_routes);
app.use("/", request_routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Runing at http://localhost:${PORT} `);
});
