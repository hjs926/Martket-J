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
    li {
      .category {
        margin-left: 20px;
        color: #666666;
        font-size: 14px;
      }
    }
  }
`;

const Gnb = () => (
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
          men's clothing
        </Link>
      </li>
      <li>
        <Link to="/products" className="category">
          jewelery
        </Link>
      </li>
      <li>
        <Link to="/products" className="category">
          electronics
        </Link>
      </li>
      <li>
        <Link to="/products" className="category">
          women's clothing
        </Link>
      </li>
      <li>
        <Link to="/products" className="category">
          women's clothing
        </Link>
      </li>
      <li>
        <br />
        <Link to="/community">COMMUNITY</Link>
      </li>
    </ul>
  </SideMenuBar>
);

export default Gnb;
