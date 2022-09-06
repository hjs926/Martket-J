import { Link } from "react-router-dom";
import styled from "styled-components";

const SideMenuBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 90;
  img {
    width: 200px;
  }
  ul {
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-left: 30px;
    font-weight: bold;
    font-size: 17px;
  }
`;

const Gnb = () => (
  <SideMenuBar className="gnb">
    <Link to="/">
      <img id="logo" src="/Market_logo.png" alt="logo" />
    </Link>
    <ul>
      <li>
        <Link to="/">홈</Link>
      </li>
      <li>
        <Link to="/products">상품목록</Link>
      </li>
      <li>
        <Link to="/cart">장바구니</Link>
      </li>
      <li>
        <Link to="/login">로그인</Link>
      </li>
      <li>
        <br />
        <Link to="/community">COMMUNITY</Link>
      </li>
    </ul>
  </SideMenuBar>
);

export default Gnb;
