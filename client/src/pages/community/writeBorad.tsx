import styled from "styled-components";
import WriteForm from "../../components/community/writeform";

const WriteFormWrap = styled.div`
  margin: 50px 120px 50px 200px;
`;

export const WriteBoard = () => {
  return (
    <WriteFormWrap>
      <WriteForm />
    </WriteFormWrap>
  );
};

export default WriteBoard;
