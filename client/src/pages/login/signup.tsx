import styled from "styled-components";

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
`;

const SignUpInputLabel = styled.label`
  overflow: hidden;
  display: block;
  margin-bottom: 12px;
  /* border: 1px solid #bfbfbf; */
  border-bottom: 1px solid #bfbfbf;
  border-radius: 0;
  color: #555;
`;
const SignUpInput = styled.input`
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
`;

const SignUpBtnContainer = styled.div`
  display: flex;
  margin: 35px auto 20px;
  padding: 0 20px;
  width: 400px;
  height: 45px;
  line-height: 38px;
  justify-content: center;
`;
const SignUpBtn = styled.button`
  width: 100%;
  font-size: 15px;

  background-color: #1f1f1f;
  color: #fff;
  cursor: pointer;
`;
const SignUpSpan = styled.span`
  display: inline-block;
  font-size: 23px;
  font-weight: bold;
  margin-bottom: 40px;
`;

const SignUpPage = () => {
  return (
    <SignUpContainer>
      <SignUpWrap>
        <SignUpForm>
          <SignUpSpan>회원계정 만들기</SignUpSpan>
          <SignUpInputLabel>
            <SignUpInput type="text" placeholder="아이디" />
          </SignUpInputLabel>
          <SignUpInputLabel>
            <SignUpInput type="password" placeholder="비밀번호" />
          </SignUpInputLabel>
          <SignUpInputLabel>
            <SignUpInput type="password" placeholder="비밀번호 확인" />
          </SignUpInputLabel>
          <SignUpInputLabel>
            <SignUpInput type="text" placeholder="닉네임" />
          </SignUpInputLabel>
          <SignUpInputLabel>
            <SignUpInput type="email" placeholder="이메일" />
          </SignUpInputLabel>
        </SignUpForm>
        <SignUpBtnContainer>
          <SignUpBtn>회원 가입</SignUpBtn>
        </SignUpBtnContainer>
      </SignUpWrap>
    </SignUpContainer>
  );
};

export default SignUpPage;
