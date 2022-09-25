import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "../../axios/axios";
import { boardItem } from "../../type";
import BoardItem from "./boarditem";

const BoardContainer = styled.div`
  width: auto;
  height: auto;
  min-width: 830px;
  .writeBtnContainer {
    display: flex;
    justify-content: end;
    margin-top: 40px;

    button {
      width: 150px;
      color: #fff;
      background: #6c757d;
      border-color: #6c757d;
      cursor: pointer;
      &:hover {
        color: #fff;
        background: #5c636a;
        border-color: #565e64;
      }
      &:focus {
        box-shadow: 0 0 0 2px rgba(130, 138, 145);
      }
      &:active {
        color: #fff;
        background-color: #565e64;
        border-color: #51585e;
        box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
      }
    }
  }
  .board-header {
    width: 100%;
    display: flex;
    .title {
      width: 60%;
    }

    div {
      padding: 14px 0 13px;
      border-bottom: 1px solid #e9e9e9;
      color: #999;
      vertical-align: middle;
      font-weight: normal;
      background: #fff;
      padding-left: 20px;

      width: 20%;
    }
  }
`;

const CommunityBoard_List = styled.ul`
  flex-wrap: wrap;
  width: 100%;
  max-width: 100%;
`;

const GETBOARDLIST = "/api/board/getBoardList";

/*
content: "내용입니다."
createdAt: "2022-09-23T10:54:29.397Z"
id: "0cbdcbe-fa7b-83d7-8cde-764168fd3f26"
title: "제목입니다."
updatedAt: "2022-09-23T10:54:29.397Z"
__v: 0
_id: "632d90658ddd2d67dcac7957"
*/

export const CommunityBoard = () => {
  const [boardList, setBoardList] = useState<boardItem[]>();

  useEffect(() => {
    axios
      .get(GETBOARDLIST)
      .then((response) => setBoardList(response.data.boards));
  }, []);
  if (!boardList) return null;
  console.log(boardList);

  return (
    <BoardContainer>
      <div className="board-header">
        <div>번호</div>
        <div className="title">제목</div>
        <div>작성자</div>
        <div>작성일</div>
      </div>
      <CommunityBoard_List>
        {boardList?.map((board) => (
          <BoardItem {...board} key={board._id} />
        ))}
      </CommunityBoard_List>
      <Link to="/community/write">
        <div className="writeBtnContainer ">
          <button>글작성</button>
        </div>
      </Link>
    </BoardContainer>
  );
};

export default CommunityBoard;
