import { useMutation } from "@tanstack/react-query";
import axios from "../../axios/axios";
import {
  SyntheticEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
  useContext,
} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SubmitLogin } from "../../type";

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
  .login-Checkbox_Container {
    display: flex;
    margin: 0;
    label {
      margin: 0;
      border: none;
    }
  }
`;

const LoginSignUp = styled(LoginForm)`
  margin-top: 10px;
  color: #353535;
  font-size: 15px;
`;

axios.defaults.withCredentials = true; //쿠키 가져오는 설정

const LoginPage = () => {
  console.log("로그인페이지입니다.");
  // URL 저장
  const LOGIN_URL = "/api/users/login";
  const AUTH_URL = "/api/users/auth";

  // const { setAuth } = useContext<any>(AuthContext);

  //state 초기 설정, focus를 위한 Ref 사용
  const idRef = useRef<HTMLInputElement>(null); // useRef로 DOM 직접 선택
  const passwordRef = useRef<HTMLInputElement>(null); // useRef로 DOM 직접 선택

  const { mutate: submitLogin } = useMutation(
    ({ userId, userPassword }: SubmitLogin) =>
      axios
        .post(LOGIN_URL, {
          email: userId,
          password: userPassword,
        })
        .then((response) => {
          if (response.data.userId) {
            const { accessToken } = response.data.userId;
            axios.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${accessToken}`;
          } else {
            alert("아이디 또는 패스워드를 확인해주세요!");
            passwordRef.current?.focus();
          }
        })
  );

  //페이지 이동시 아이디 input칸에 focus
  useEffect(() => {
    idRef.current?.focus();
  }, []);

  //handle 함수
  const handleSubmitLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userId = idRef.current!.value;
    const userPassword = passwordRef.current!.value;
    submitLogin({ userId, userPassword });
  };

  return (
    <LoginPageContainer>
      <LoginWrap>
        <div>회원 로그인</div>
        <LoginForm onSubmit={handleSubmitLogin}>
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
            <input type="checkbox" id="id_checkbox" />
            <label htmlFor="id_checkbox">
              <span>아이디 저장</span>
            </label>
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
