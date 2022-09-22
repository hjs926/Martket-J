import styled from "styled-components";
import CommunityBorad from "../../components/community/borad";

const CommunityWrap = styled.div`
  margin: 50px 120px 0 200px;
`;

const CommunityinContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto 50px;
  padding: 90px 0 0;
  overflow: hidden;
  vertical-align: top;
  text-align: left;
`;

const CommunityPage = () => {
  return (
    <CommunityWrap>
      <CommunityinContainer>
        커뮤니티 페이지입니다
        <CommunityBorad />
      </CommunityinContainer>
    </CommunityWrap>
  );
};

export default CommunityPage;
