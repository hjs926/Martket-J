import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderRight = styled.div`
  position: fixed;
  right: 90px;
  top: 42px;
  z-index: 99;
`;

const HeaderRightBtn = styled.a`
  line-height: 30px;
  margin-left: 15px;
  font-size: 14px;
  color: black;
  font-weight: 600;
`;

/**
 * 헤더 오른쪽에서 로그인, 카트를 담고있습니다.
 */
const GnbRight = () => {
  return (
    <HeaderRight>
      <div>
        <Link to="/login">
          <HeaderRightBtn>LOIN/JOIN</HeaderRightBtn>
        </Link>
        <Link to="/cart">
          <HeaderRightBtn>CART () </HeaderRightBtn>
        </Link>
      </div>
    </HeaderRight>
  );
};

export default GnbRight;
