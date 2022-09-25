import styled from "styled-components";
import CommunityBoard from "../../components/community/board";

const CommunityWrap = styled.div`
  margin: 50px 120px 0 230px;
`;

const CommunityinContainer = styled.div`
  margin-top: 50px;
  padding: 90px 0 0;
  overflow: hidden;
  vertical-align: top;
  text-align: left;
`;

const CommunityPage = () => {
  return (
    <CommunityWrap>
      <CommunityinContainer>
        <CommunityBoard />
      </CommunityinContainer>
    </CommunityWrap>
  );
};

export default CommunityPage;
