import { Link } from "react-router-dom";
import styled from "styled-components";
import LeftForm from "./gnb/leftForm";
import RightForm from "./gnb/rightForm";

const Gnb = () => {
  console.log("gnb.");
  window.scrollTo(0, 0); //스크롤 맨위로 이동

  return (
    <>
      <LeftForm />
      <RightForm />
    </>
  );
};

export default Gnb;
