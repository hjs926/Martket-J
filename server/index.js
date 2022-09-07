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

<<<<<<< HEAD
=======
app.use(
  cors({
    origin: true, // '*' 안됨 -> 정확한 주소 또는 origin: true로 해도 됨
    credentials: true,
  })
);
// cors: 브라우저에서 포트 다르면 통신 막음
app.use(bodyParser.urlencoded({ extended: true }));
// application/x-www-form-urlencoded
>>>>>>> da8e64e4297ae654f5162dcb23c5446257d9467b
app.use(bodyParser.json());
// application/json - json 타입 분석
// bodyParser가 client로부터 오는 정보를 서버에서 분서갷서 가져올 수 있게 해준다.
app.get("/database", (req, res) => {
  res.json(database);
});

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
