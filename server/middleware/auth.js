const { User } = require("../models/User");

let auth = (req, res, next) => {
  //인증 처리
  // 클라이언트 쿠키에서 token을 가져온다.
  let token = req.cookies.w_auth;
  // 토큰을 복호화한 후 유저를 찾는다.
  User.findByToken(token, (err, user) => {
    if (err) throw err;
    if (!user)
      return res.json({
        isAuth: false,
        error: true,
      });

    req.token = token;
    req.user = user;
    next();
    // 넥스트가 있어야 미들웨어에서 다음 콜백으로 넘어감 없으면 여기서 머문다
  });
};

module.exports = { auth }; // 다른데에서 사용 가능하게 만듬
