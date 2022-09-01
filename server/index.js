const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://js96:1234@market-j.iewrcuc.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB Connectd..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
