import styled from "styled-components";
import { boardItem } from "../../type";

const Item = styled.li`
  display: flex;
  border: 1px solid black;
  div {
    margin-left: 30px;
  }
`;

export const BoardItem = (board: boardItem) => {
  return (
    <Item>
      <div>작성자: {board.name} </div>
      <div>제목: {board.title}</div>
      <div>내용: {board.content}</div>
      <div>게시글 번호: {board.postId}</div>
      <div>작성시간: {board.createdAt}</div>
      <div>업데이트 시간: {board.updatedAt}</div>
    </Item>
  );
};

export default BoardItem;
