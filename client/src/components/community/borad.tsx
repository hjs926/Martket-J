import { Link } from "react-router-dom";
import styled from "styled-components";

const BoradContainer = styled.div`
  max-width: 1000px;
  width: auto;
  height: auto;
`;

const CommunityBorad_List = styled.ul`
  display: flex;
  margin-top: 20px;
  flex-wrap: wrap;
  width: 100%;
  max-width: 100%;
`;

export const CommunityBorad = () => {
  return (
    <BoradContainer>
      게시글 리스트입니다
      <CommunityBorad_List></CommunityBorad_List>
      <Link to="/community/write">
        <button>글작성</button>
      </Link>
    </BoradContainer>
  );
};

export default CommunityBorad;
