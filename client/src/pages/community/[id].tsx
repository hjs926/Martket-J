import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "../../axios/axios";
import BoardDetail from "../../components/community/detail";
import { boardItem } from "../../type";

const GET_BOARDDETAIL = "/api/board/getBoardDetail";

// ----------------------------css 시작----------------------------
const BoardWrap = styled.div`
  margin: 50px 120px 0 200px;
`;

const BoardinContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto 50px;
  padding: 90px 0 0;
  overflow: hidden;
  vertical-align: top;
  text-align: left;
`;
// ----------------------------css 끝----------------------------

/*
content: "test"
createdAt: "2022-09-25T02:12:10.730Z"
name: "301"
postId: "19"
title: "test 12분"
updatedAt: "2022-09-24T17:12:10.717Z"
_id: "632f3a6ab459945968f55dcf"
*/

export const BoardDetailPage = () => {
  const { postId } = useParams();
  const [boardData, setBoardData] = useState<boardItem>();

  useEffect(() => {
    axios
      .post(GET_BOARDDETAIL, {
        postId,
      })
      .then((response) => setBoardData(response.data.board[0]));
  }, []);
  if (!boardData) return null;

  return (
    <BoardWrap>
      <BoardinContainer>
        <BoardDetail {...boardData} />
      </BoardinContainer>
    </BoardWrap>
  );
};

export default BoardDetailPage;
