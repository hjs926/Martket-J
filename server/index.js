const express = require("express");
const app = express();

const port = 5000;
const { User } = require("./models/User");
const bodyParser = require("body-parser");

const config = require("./config/key");

//application/x-www-form-urlencoded << 이런 데이터를 분석해서 가져올수 있게 해주는 것
app.use(bodyParser.urlencoded({ extended: true }));
//application/json 타입으로 된 것을 분석해서 가져올수 있게 해준 것
app.use(bodyParser.json());

const mongoose = require("mongoose");

mongoose
  .connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));
app.get("/", (req, res) => res.send("Hello world 안녕"));

app.post("/api/users/register", (req, res) => {
  //회원가입 할때 필요한 정보들을 클라이언트에서 가져오면
  //그것들을 데이터베이스에 넣어준다.
  const user = new User(req.body);
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

app.post("/login", (req, res) => {
  //요청된 이메일을 데이터베이스에서 있는지 찾는다.
  //만약 유저콜렉션안에 이 이메일을 가진 유저가 한명도 없다면
  //유저 인포가 없으므로 리턴을 json데이터로 전달
  User.findOne({ email: req.body.email }, (err, userInfo));
  if (!userInfo) {
    return res.json({
      loginSuccess: false,
      message: "제공된 이메일에 해당하는 유저가 없습니다.",
    });
  }

  user.comparePassword(req.body.password, (err, isMatch));
  //메일이 데이터베이스 있다면 비밀번호가 맞는 비밀번호 인지 확인.
  // 비밀번호 까지 맞다면 토큰을 생성하기.
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
