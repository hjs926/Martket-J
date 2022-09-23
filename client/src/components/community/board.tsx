import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "../../axios/axios";
import { boardItem } from "../../type";
import BoardItem from "./boarditem";

const BoardContainer = styled.div`
  max-width: 1000px;
  width: auto;
  height: auto;
`;

const CommunityBoard_List = styled.ul`
  display: flex;
  margin-top: 20px;
  flex-wrap: wrap;
  width: 100%;
  max-width: 100%;
  flex-direction: column;
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
      게시글 리스트입니다
      <CommunityBoard_List>
        {boardList?.map((board) => (
          <BoardItem {...board} key={board._id} />
        ))}
      </CommunityBoard_List>
      <Link to="/community/write">
        <button>글작성</button>
      </Link>
    </BoardContainer>
  );
};

export default CommunityBoard;
