import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import axios from "../../axios/axios";
import { userInfo } from "../../type";
import Auth from "../auth/auth";
import { useNavigate } from "react-router-dom";

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
const BOARDCREATE_URL = "/api/board/create";

export const WriteForm = () => {
  const [user, setUser] = useState<userInfo>();
  const titleRef = useRef<HTMLInputElement>(null);
  const contentsRef = useRef<HTMLTextAreaElement>(null);

  const navigate = useNavigate();

  useEffect(() => {
    Auth().then((data) => setUser(data));
  }, []);

  if (!user) return null;
  if (!user?.isAuth) {
    alert("로그인 한 사용자만 글쓰기가 가능합니다.");
    navigate("/community");
  }

  console.log(user);

  const handleWriteBoard = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const title = titleRef.current!.value;
    const content = contentsRef.current!.value;
    console.log("tiele", title, "content", content);
    if (!title) {
      return alert("제목을 입력해주세요.");
    } else if (!content) {
      return alert("내용을 입력해주세요.");
    }
    axios.post(BOARDCREATE_URL, {
      title,
      content,
      name: user.name,
    });
    window.location.replace("/community");
  };
  return (
    <Form onSubmit={handleWriteBoard}>
      <input className="title" type="text" placeholder="제목" ref={titleRef} />
      <textarea placeholder="내용을 입력해주세요." ref={contentsRef} />
      <div className="BtnArea">
        <button>글작성</button>
      </div>
    </Form>
  );
};

export default WriteForm;
