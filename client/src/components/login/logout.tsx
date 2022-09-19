import styled from "styled-components";
import axios from "../../axios/axios";

const LogOutbtn = styled.button`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: 1px solid #ccd0d4;
  border-radius: 1em;
  color: white;
  background-color: #ccd0d4;
  cursor: pointer;
  &:hover {
    background-color: #666666;
  }
`;

export const LogOut = () => {
  const LOGOUT_URL = "/api/users/logout";
  const handleSubmitLogout = () => {
    axios.get(LOGOUT_URL);
    window.location.reload();
  };
  return (
    <>
      <LogOutbtn onClick={handleSubmitLogout}>로그아웃</LogOutbtn>
    </>
  );
};
