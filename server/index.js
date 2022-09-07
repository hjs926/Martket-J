const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const config = require("./config/key");
const cors = require("cors");
app.use(
  cors({
    origin: true, // '*' 안됨 -> 정확한 주소 또는 origin: true로 해도 됨
    credentials: true,
  })
);

const home = require("../server/routes/users");

app.use(bodyParser.urlencoded({ extended: true }));

const connect = mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.use(bodyParser.json());
app.use(cookieParser());

app.use("/api/users", require("./routes/users"));
app.use("/api/product", require("./routes/product"));

app.use("/uploads", express.static("uploads"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}

const port = 4000;

app.listen(port, () => {
  console.log(`Server Listening on ${port}`);
});

app.use("/", home); // use -> 미들 웨어를 등록해주는 메서드

module.exports = app;
