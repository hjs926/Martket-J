import styled from "styled-components";

const BoradItem = styled.li`
  display: flex;
`;

export const CommunityBoradItem = () => {
  return (
    <BoradItem>
      <div> postId </div>
      <div> image </div>
      <div> 상품정보? </div>
      <div>제목</div>
      <div>작성자</div>
      <div>작성시간</div>
    </BoradItem>
  );
};

export default CommunityBoradItem;
