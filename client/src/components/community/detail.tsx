import { SyntheticEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "../../axios/axios";
import { boardItem, userInfo } from "../../type";
import Auth from "../auth/auth";

// ----------------------------css 시작----------------------------
const BoardDetailContainer = styled.div`
  max-width: 100%;
  min-width: 830px;
  padding-left: 20px;
  border-bottom: 1px solid #e9e9e9;
  line-height: 1.5;

  .header {
    min-width: 830px;
    max-width: 100%;
    border-bottom: 1px solid #e9e9e9;
    border-top: 1px solid #e9e9e9;
    color: #999;
    .title-area,
    .writer-area {
      display: flex;
      padding: 11px 0 10px;
      color: black;
      .title,
      .writer {
        width: 130px;
        color: #999;
      }
    }
  }
  .content {
    margin: 30px 0;
    font-size: 17px;
    min-height: 100px;
    margin-bottom: 60px;
  }
`;

const BtnArea = styled.div`
  display: flex;
  justify-content: end;
  max-width: 1000px;
  min-width: 830px;

  button {
    width: 80px;
    margin-right: 0px;
    margin-left: 10px;
    margin-top: 30px;
  }
`;
// ----------------------------css 끝----------------------------

const DELETE_URL = "/api/board/remove";

export const BoardDetail = (data: boardItem) => {
  const [user, setUser] = useState<userInfo>();
  const navigate = useNavigate();

  useEffect(() => {
    Auth().then((data) => setUser(data));
  }, []);
  if (!user) return null;
  console.log("user", user);
  console.log("Form에 들어오는 데이터", data);

  //핸들링 함수
  const handleDeleteBoard = (e: SyntheticEvent) => {
    e.preventDefault();
    axios
      .post(DELETE_URL, {
        postId: data.postId,
        _id: data._id,
      })
      .then(() => navigate("/community"));
  };

  return (
    <>
      {user?.name === data.name ? (
        <>
          <BoardDetailContainer>
            <div className="header">
              <div className="title-area">
                <div className="title">제목:</div>
                <div>{data.title}</div>
              </div>
              <div className="writer-area">
                <div className="writer">작성자:</div>
                <div> {data.name}</div>
              </div>
            </div>
            <div className="content">{data.content}</div>
          </BoardDetailContainer>
          <BtnArea className="Btn-area">
            <button onClick={handleDeleteBoard}>삭제</button>
            <Link to="/community/write" state={{ data: data }}>
              <button>수정</button>
            </Link>
            <Link to="/community">
              <button>목록</button>
            </Link>
          </BtnArea>
        </>
      ) : (
        <>
          <BoardDetailContainer>
            <div className="header">
              <div className="title-area">
                <div className="title">제목:</div>
                <div>{data.title}</div>
              </div>
              <div className="writer-area">
                <div className="writer">작성자:</div>
                <div> {data.name}</div>
              </div>
            </div>
            <div className="content">{data.content}</div>
          </BoardDetailContainer>
          <BtnArea className="Btn-area">
            <Link to="/community">
              <button>목록</button>
            </Link>
          </BtnArea>
        </>
      )}
    </>
  );
};

export default BoardDetail;
