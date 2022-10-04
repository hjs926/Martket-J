import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { userInfo } from "../type";
import Auth from "./auth/auth";
import LeftForm from "./gnb/leftForm";
import RightForm from "./gnb/rightForm";

const Gnb = () => {
  console.log("gnb.");
  window.scrollTo(0, 0); //스크롤 맨위로 이동
  const [user, setUser] = useState<userInfo>(); //유저의 데이터를 저장할 user 선언

  useEffect(() => {
    Auth().then((data) => setUser(data));
    console.log("Gnb 호출했습니다");
  }, []);
  if (!user) return null;
  console.log(user);

  return (
    <>
      <LeftForm />
      <RightForm user={user} />
    </>
  );
};

export default Gnb;
