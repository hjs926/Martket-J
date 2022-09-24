import { Link } from "react-router-dom";
import styled from "styled-components";
import { boardItem } from "../../type";

const Item = styled.li`
  display: flex;
  border: 1px solid black;
  height: 50px;
  align-items: center;
  div {
    text-align: left;
    padding-left: 20px;
    width: 20%;
  }
`;

export const BoardItem = (board: boardItem) => {
  return (
    <Item>
      <div>게시글 번호: {board.postId}</div>
      <div>
        <Link to={`/community/${board.postId}`}>제목: {board.title}</Link>
      </div>
      <div>작성자: {board.name} </div>
      <div>작성시간: {board.createdAt.slice(0, 16).replace("T", " ")}</div>
    </Item>
  );
};

export default BoardItem;
