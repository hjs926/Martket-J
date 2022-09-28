import { SyntheticEvent, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import axios from "../../axios/axios";
import { userInfo } from "../../type";
import Auth from "../auth/auth";
import { useLocation, useNavigate } from "react-router-dom";

// ----------------------------css 시작----------------------------
const Form = styled.form`
  padding: 50px 0;
  margin: 0 auto;
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  max-width: 800px;

  .title {
    padding: 0;
    height: 30px;
    border: 1px solid #d9d9d9;
    &:focus {
      border-color: #565e64;
      box-shadow: 0 0 0 2px rgba(130, 138, 145);
      border-right-width: 1px;
      outline: 0;
    }
    &:hover {
      border-color: #565e64;
      border-right-width: 1px;
    }
  }
  textarea {
    padding: 0;
    max-width: 800px;
    resize: none;
    margin-top: 30px;
    height: 300px;
    border: 1px solid #d9d9d9;

    &:focus {
      border-color: #565e64;
      box-shadow: 0 0 0 2px rgba(130, 138, 145);
      border-right-width: 1px;
      outline: 0;
    }
    &:hover {
      border-color: #565e64;
      border-right-width: 1px;
    }
  }
  .BtnArea {
    margin-top: 100px;
    display: flex;
    justify-content: end;
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
`;
// ----------------------------css 끝----------------------------

const BOARDCREATE_URL = "/api/board/create";
const BOARDUPDATE_URL = "/api/board/update";

export const WriteForm = () => {
  const [user, setUser] = useState<userInfo>();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const navigate = useNavigate();

  //useLocation 사용해 Link에서 온 데이터를 저장
  const location: any = useLocation();
  console.log("location:", location);

  useEffect(() => {
    if (!user) Auth().then((data) => setUser(data));
    console.log("렌더링이 되었습니다");

    // 수정 버튼을 눌러 데이터가 왔을 경우, updatedata에 이전 글의 데이터를 저장
    if (location.state) {
      const updatedata = location.state.data;
      console.log("updatedata:", updatedata);
      setTitle(updatedata.title);
      setContent(updatedata.content);
    }
  }, []);

  //로그인 유저가 아니면 글작성 못 하도록 페이지 이동
  if (!user) return null;
  if (!user?.isAuth) {
    alert("로그인 한 사용자만 글쓰기가 가능합니다.");
    navigate("/community");
  }

  // 핸들링 함수
  const handleChangeTitle = (e: SyntheticEvent) => {
    setTitle((e.target as HTMLInputElement).value);
  };
  const handleChangeContent = (e: SyntheticEvent) => {
    setContent((e.target as HTMLInputElement).value);
  };

  const handleWriteBoard = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title) {
      return alert("제목을 입력해주세요.");
    } else if (!content) {
      return alert("내용을 입력해주세요.");
    }
    // 수정버튼을 누른게 아니라면 글 생성
    if (!location.state) {
      axios.post(BOARDCREATE_URL, {
        title,
        content,
        name: user.name,
      });
      window.location.replace("/community");
    } // 수정버튼을 눌렀다면 글 수정
    else {
      if (location.state) {
        const updatedata = location.state.data;

        axios.post(BOARDUPDATE_URL, {
          postId: updatedata.postId,
          title,
          content,
        });
        window.location.replace(`/community/${updatedata.postId}`);
      }
    }
  };

  return (
    <Form onSubmit={handleWriteBoard}>
      <input
        className="title"
        type="text"
        placeholder="제목"
        value={title}
        onChange={handleChangeTitle}
      />
      <textarea
        placeholder="내용을 입력해주세요."
        value={content}
        onChange={handleChangeContent}
      />
      <div className="BtnArea">
        <button>글작성</button>
      </div>
    </Form>
  );
};

export default WriteForm;
