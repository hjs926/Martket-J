import TextArea from "antd/lib/input/TextArea";
import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "../../axios/axios";
import { userInfo } from "../../type";
import Auth from "../auth/auth";

const WriteFormWrap = styled.div`
  margin: 50px 120px 50px 200px;
  form {
    padding: 50px 0;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    max-width: 800px;

    .title {
      padding: 0;

      height: 30px;
      border: 1px solid black;
    }
    textarea {
      padding: 0;
      max-width: 798px;
      resize: none;
      margin-top: 30px;
      height: 300px;
    }

    button {
      max-width: 150px;
      margin-top: 30px;
    }
  }
`;

export const WriteBorad = () => {
  const [user, setUser] = useState<userInfo>();

  useEffect(() => {
    Auth().then((data) => setUser(data));
  }, []);

  if (!user) return null;
  if (!user?.isAuth) alert("로그인 한 사용자만 글쓰기가 가능합니다.");

  console.log(user);

  const handleWriteBorad = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <WriteFormWrap>
      <form onSubmit={handleWriteBorad}>
        <input className="title" type="text" placeholder="제목" />
        <TextArea></TextArea>
        <button>글작성</button>
      </form>
    </WriteFormWrap>
  );
};

export default WriteBorad;
