import styled from "styled-components";
import WriteForm from "../../components/community/writeform";

const WriteFormWrap = styled.div`
  margin: 0 200px 0 250px;
`;

export const WriteBoard = () => {
  return (
    <WriteFormWrap className="112323">
      <WriteForm />
    </WriteFormWrap>
  );
};

export default WriteBoard;
