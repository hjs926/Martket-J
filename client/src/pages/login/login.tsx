import styled from "styled-components";
import LoginForm from "../../components/login/login";

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

const LoginPage = () => {
  console.log("로그인페이지입니다.");

  return (
    <LoginPageContainer>
      <LoginWrap>
        <LoginForm />
      </LoginWrap>
    </LoginPageContainer>
  );
};

export default LoginPage;
