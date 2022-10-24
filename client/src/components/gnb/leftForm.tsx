import { Link, Route, Routes, useNavigate } from "react-router-dom";
import styled from "styled-components";
import BagPage from "../../pages/category/bag";
import DressPage from "../../pages/category/dress";
import EtcPage from "../../pages/category/etc";
import OuterPage from "../../pages/category/outer";
import PantsPage from "../../pages/category/pants";
import ShoesPage from "../../pages/category/shoes";
import TopPage from "../../pages/category/top";
import CategoryPage from "../../pages/category/index";
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
    text-transform: uppercase;
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
  const category = ["top", "outer", "pants", "dress", "shoes", "bag", "etc"];

  return (
    <div>
      <SideMenuBar className="gnb">
        <Link to="/">
          <img id="logo" src="/Market_logo.png" alt="logo" />
        </Link>
        <ul>
          <li>
            <a href="/products">Shopping</a>
          </li>
          {category.map((category) => (
            <li>
              <a href={`/${category}`}>{category}</a>
            </li>
          ))}
          <li>
            <br />
            <Link to="/community">COMMUNITY</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        </ul>
      </SideMenuBar>
    </div>
  );
};

export default LeftForm;
