import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import axios from "../../axios/axios";
import { userInfo } from "../../type";
import Auth from "../auth/auth";

const Form = styled.form`
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
`;
const BOARDCREATE_URL = "/api/board/create";

export const WriteForm = () => {
  const [user, setUser] = useState<userInfo>();
  const titleRef = useRef<HTMLInputElement>(null);
  const contentsRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    Auth().then((data) => setUser(data));
  }, []);

  if (!user) return null;
  if (!user?.isAuth) alert("로그인 한 사용자만 글쓰기가 가능합니다.");

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
      <button>글작성</button>
    </Form>
  );
};

export default WriteForm;
