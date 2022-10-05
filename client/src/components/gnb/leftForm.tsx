import { Link } from "react-router-dom";
import styled from "styled-components";
// ----------------------------css 시작----------------------------
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
    li {
      .category {
        margin-left: 20px;
        font-size: 14px;
        font-family: 500;
      }
    }
  }
`;
// ----------------------------css 끝----------------------------

const LeftForm = () => {
  console.log("LeftForm");

  return (
    <SideMenuBar className="gnb">
      <Link to="/">
        <img id="logo" src="/Market_logo.png" alt="logo" />
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Shopping</Link>
        </li>
        <li>
          <Link to="/products" className="category">
            TOP
          </Link>
        </li>
        <li>
          <Link to="/products" className="category">
            OUTER
          </Link>
        </li>
        <li>
          <Link to="/products" className="category">
            PANTS
          </Link>
        </li>
        <li>
          <Link to="/products" className="category">
            DRSSS
          </Link>
        </li>
        <li>
          <Link to="/products" className="category">
            SHOES
          </Link>
        </li>
        <li>
          <Link to="/products" className="category">
            BAG
          </Link>
        </li>
        <li>
          <Link to="/products" className="category">
            ETC
          </Link>
        </li>
        <li>
          <br />
          <Link to="/community">COMMUNITY</Link>
        </li>
        <li>
          <Link to="/admin">admin</Link>
        </li>
      </ul>
    </SideMenuBar>
  );
};

export default LeftForm;
