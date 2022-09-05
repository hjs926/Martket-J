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
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
`;

const LoginInputLabel = styled.label`
  overflow: hidden;
  display: block;
  margin-bottom: 12px;
  border: 1px solid #bfbfbf;
  border-radius: 0;
  color: #555;
`;

const LoginInput = styled.input`
  width: 100%;
  height: 48px;
  line-height: 48px;
  padding: 0 0 0 3px;
  border: 0 none;
  color: #353535;
  font-size: 12px;
`;

const LoginIdSaveCheckBox = styled.p`
  font-size: 11px;
  margin: 0 0 0 -4px;
  color: #353535;
`;

const LoginButton = styled.button`
  margin-top: 10px;
  width: 100%;
  text-align: center;
  color: #fff;
  height: 48px;
  background-color: #1f1f1f;
  cursor: pointer;
`;

const LoginSignUp = styled.p`
  color: #353535;
  font-size: 15px;
`;

const LoginDiv = styled.div`
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
`;

const LoginPage = () => {
  return (
    <LoginPageContainer>
      <LoginWrap>
        <LoginDiv>회원 로그인</LoginDiv>
        <LoginForm>
          <LoginInputLabel>
            <LoginInput id="login" type="text" placeholder="아이디" />
          </LoginInputLabel>
          <LoginInputLabel>
            <LoginInput id="password" type="password" placeholder="비밀번호" />
          </LoginInputLabel>
          <LoginIdSaveCheckBox>
            <input type="checkbox" />
            <span>아이디 저장</span>
          </LoginIdSaveCheckBox>
          <LoginButton>로그인</LoginButton>
          <LoginSignUp>
            <a href="#">회원가입</a>
          </LoginSignUp>
        </LoginForm>
      </LoginWrap>
    </LoginPageContainer>
  );
};

export default LoginPage;
