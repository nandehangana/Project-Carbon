const express = require("express");
const cors = require("cors");
const sequelise = require("./config/db");
const apiRouter = require("./routes/api_v1");

const PORT = process.env.PORT || 3001;
const HOST = "0.0.0.0";

const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());
app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.send("Welcome the API is running");
});

sequelise
  .authenticate()
  .then(() => {
    console.log("Database connected...");
  })
  .catch((err) => {
    console.log("Error connecting to database: " + err);
  });

sequelise
  .sync()
  .then(() => {
    app.listen(PORT, HOST);
    console.log(`App running on http://${HOST}:${PORT}`);
  })
  .catch((err) => console.log("Error synching models: " + err));

module.exports = app;
