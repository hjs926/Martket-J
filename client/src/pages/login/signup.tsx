import styled from "styled-components";
import axios from "axios";
import { useRef } from "react";

const SignUpContainer = styled.div`
  margin: 50px 120px 0 100px;
`;
const SignUpWrap = styled.div`
  max-width: 800px;
  margin: 0 auto 50px;
  padding: 90px 0 0;
  overflow: hidden;
  vertical-align: top;
  text-align: left;
`;
const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 450px;
  margin: 0px auto;
  label {
    overflow: hidden;
    display: block;
    margin-bottom: 12px;
    border-bottom: 1px solid #bfbfbf;
    border-radius: 0;
    color: #555;
    input {
      width: 100%;
      height: 53px;
      padding: 0 0 0 3px;
      border: 0 none;
      color: #353535;
      font-size: 17px;
      font-weight: bold;
      &:focus {
        outline: none;
      }
    }
  }

  span {
    display: inline-block;
    font-size: 23px;
    font-weight: bold;
    margin-bottom: 40px;
  }
`;

const SignUpBtnContainer = styled.div`
  display: flex;
  margin: 35px auto 20px;
  padding: 0 20px;
  width: 400px;
  height: 45px;
  line-height: 38px;
  justify-content: center;
  button {
    width: 100%;
    font-size: 15px;
    background-color: #1f1f1f;
    color: #fff;
    cursor: pointer;
  }
`;

const SignUpPage = () => {
  console.log("회원가입페이지입니다.");

  const SIGNUP_URL = "회원가입 api호출 주소 넣어야함";
  axios.defaults.withCredentials = true; //쿠키 가져오는 설정

  const idRef = useRef<HTMLInputElement>(null); // 제너릭으로 antd의 Input 컴포넌트를 넣음
  const passwordRef = useRef<HTMLInputElement>(null); // useRef로 DOM 직접 선택
  const retrypasswordRef = useRef<HTMLInputElement>(null); // useRef로 DOM 직접 선택
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user_id = idRef.current!.value; // idRef.current 까지 하면 null 혹은 Input이 나옴 Non-null assertion을 사용해서 null일 가능성을 없애줌. 타입이 Input으로 고정됨
    const user_password = passwordRef.current!.value;
    const user_Retrypassword = retrypasswordRef.current!.value;
    const user_name = nameRef.current!.value;
    const email = emailRef.current!.value;

    await axios.post(SIGNUP_URL, {
      id: user_id,
      password: user_password,
      retrypassword: user_Retrypassword,
      name: user_name,
      email,
    });
  };

  return (
    <SignUpContainer>
      <SignUpWrap>
        <SignUpForm onSubmit={onSubmitHandler}>
          <span>회원계정 만들기</span>
          <label>
            <input type="text" placeholder="아이디" ref={idRef} />
          </label>
          <label>
            <input type="password" placeholder="비밀번호" ref={passwordRef} />
          </label>
          <label>
            <input
              type="password"
              placeholder="비밀번호 확인"
              ref={retrypasswordRef}
            />
          </label>
          <label>
            <input type="text" placeholder="닉네임" ref={nameRef} />
          </label>
          <label>
            <input type="email" placeholder="이메일" ref={emailRef} />
          </label>
        </SignUpForm>
        <SignUpBtnContainer>
          <button>회원 가입</button>
        </SignUpBtnContainer>
      </SignUpWrap>
    </SignUpContainer>
  );
};

export default SignUpPage;
