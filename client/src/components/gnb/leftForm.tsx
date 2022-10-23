import { Link, Route, Routes } from "react-router-dom";
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
    <div>
      <SideMenuBar className="gnb">
        <Link to="/">
          <img id="logo" src="/Market_logo.png" alt="logo" />
        </Link>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <a
            onClick={() => {
              window.location.href = "/category";
            }}
            className="category"
            style={{ cursor: "pointer" }}
          >
            Shopping
          </a>
          <li>
            <a
              onClick={() => {
                window.location.href = "/top";
              }}
              className="category"
              style={{ cursor: "pointer" }}
            >
              TOP
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                window.location.href = "/outer";
              }}
              className="category"
              style={{ cursor: "pointer" }}
            >
              OUTER
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                window.location.href = "/pants";
              }}
              className="category"
              style={{ cursor: "pointer" }}
            >
              PANTS
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                window.location.href = "/dress";
              }}
              className="category"
              style={{ cursor: "pointer" }}
            >
              DRESS
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                window.location.href = "/shoes";
              }}
              className="category"
              style={{ cursor: "pointer" }}
            >
              SHOES
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                window.location.href = "/bag";
              }}
              className="category"
              style={{ cursor: "pointer" }}
            >
              BAG
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                window.location.href = "/etc";
              }}
              className="category"
              style={{ cursor: "pointer" }}
            >
              ETC
            </a>
          </li>
          <li>
            <br />
            <Link to="/community">COMMUNITY</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        </ul>
      </SideMenuBar>
      <Routes>
        <Route path="/category" element={<CategoryPage />}></Route>
        <Route path="/top" element={<TopPage />}></Route>
        <Route path="/outer" element={<OuterPage />}></Route>
        <Route path="/pants" element={<PantsPage />}></Route>
        <Route path="/dress" element={<DressPage />}></Route>
        <Route path="/shoes" element={<ShoesPage />}></Route>
        <Route path="/bag" element={<BagPage />}></Route>
        <Route path="/etc" element={<EtcPage />}></Route>
      </Routes>
    </div>
  );
};

export default LeftForm;
