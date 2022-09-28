import { Link } from "react-router-dom";
import styled from "styled-components";
import { boardItem } from "../../type";

// ----------------------------css 시작----------------------------
const Item = styled.li`
  display: flex;
  height: 80px;
  align-items: center;

  padding: 14px 0 13px;
  border-bottom: 1px solid #e9e9e9;
  color: #999;
  vertical-align: middle;
  font-weight: normal;
  background: #fff;
  .title {
    width: 60%;
  }

  div {
    text-align: left;
    padding-left: 20px;
    width: 20%;
  }
`;
// ----------------------------css 끝----------------------------

export const BoardItem = (board: boardItem) => {
  return (
    <Item>
      <div>{board.postId}</div>
      <div className="title">
        <Link to={`/community/${board.postId}`}>{board.title}</Link>
      </div>
      <div>{board.name} </div>
      <div>{board.createdAt.slice(0, 16).replace("T", " ")}</div>
    </Item>
  );
};

export default BoardItem;
