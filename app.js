const express = require("express");
const stats_router = require("./routes/stats.js");
const mongo = require("./utils/db.js");
const port = 3001;
const cors = require("cors");
require("dotenv").config();

var db;
async function loadDBClient() {
  try {
    db = await mongo.connectToDB();
  } catch (err) {
    console.log(err);
    throw new Error("Could not connect to the Mongo DB");
  }
}
loadDBClient();

const app = express();

app.use((req, res, next) => {
  req.db = db;
  next();
});
app.use(express.json());
app.use(cors());

app.use("/stats", stats_router);

const server = app.listen(process.env.PORT || 3001, async () => {
  console.log("Example app listening at http://localhost:%d", port);
});

process.on("SIGINT", () => {
  console.info("SIGINT signal received.");
  console.log("Closing Mongo Client.");
  mongo.closeDBConnection();
  server.close(() => {
    console.log("Http server closed.");
  });
});