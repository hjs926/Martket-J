import axios from "axios";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LoginPageContainer = styled.div`
  margin: 50px 120px 0 100px;
`;
const LoginWrap = styled.div`
  max-width: 800px;
  margin: 0 auto 50px;
  padding: 90px 0 0;
  overflow: hidden;
  vertical-align: top;
  text-align: left;
  div {
    display: flex;
    margin: 0 auto 20px;
    padding: 0 20px;
    width: 100px;
    height: 38px;
    line-height: 38px;
    background: #1f1f1f;
    color: #fff;
    font-size: 14px;
    justify-content: center;
  }
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
  label {
    overflow: hidden;
    display: block;
    margin-bottom: 12px;
    /* border: 1px solid #bfbfbf; */
    border-bottom: 1px solid #bfbfbf;
    border-radius: 0;
    color: #555;
    input {
      width: 100%;
      height: 48px;
      line-height: 48px;
      padding: 0 0 0 3px;
      border: 0 none;
      color: #353535;
      font-size: 12px;
      &:focus {
        outline: none;
      }
    }
  }
  p {
    font-size: 11px;
    margin: 0 0 0 -4px;
    color: #353535;
  }
  button {
    margin-top: 10px;
    width: 100%;
    text-align: center;
    color: #fff;
    height: 48px;
    background-color: #1f1f1f;
    cursor: pointer;
  }
`;

const LoginSignUp = styled(LoginForm)`
  margin-top: 10px;
  color: #353535;
  font-size: 15px;
`;

const LoginPage = () => {
  console.log("로그인페이지입니다.");
  const LOGIN_URL = "/login";
  const AUTH_URL = "/auth";

  const idRef = useRef<HTMLInputElement>(null); // 제너릭으로 Input 컴포넌트를 넣음
  const passwordRef = useRef<HTMLInputElement>(null); // useRef로 DOM 직접 선택

  useEffect(() => {
    idRef.current?.focus();
  }, []);

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user_id = idRef.current!.value; // idRef.current 까지 하면 null 혹은 Input이 나옴 Non-null assertion을 사용해서 null일 가능성을 없애줌. 타입이 Input으로 고정됨
    const user_password = passwordRef.current!.value;

    await axios
      .post(LOGIN_URL, {
        email: user_id,
        password: user_password,
      })
      .then((response) => console.log(response));
    const data = await axios.get(AUTH_URL);
    console.log(data);
  };

  return (
    <LoginPageContainer>
      <LoginWrap>
        <div>회원 로그인</div>
        <LoginForm onSubmit={onSubmitHandler}>
          <label>
            <input id="login" type="text" placeholder="아이디" ref={idRef} />
          </label>
          <label>
            <input
              id="password"
              type="password"
              placeholder="비밀번호"
              ref={passwordRef}
            />
          </label>
          <p className="login-Checkbox_Container">
            <input type="checkbox" />
            <span>아이디 저장</span>
          </p>
          <button>로그인</button>
        </LoginForm>
        <LoginSignUp>
          <Link to="/signup">회원가입</Link>
        </LoginSignUp>
      </LoginWrap>
    </LoginPageContainer>
  );
};

export default LoginPage;
