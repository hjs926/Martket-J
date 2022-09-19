import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RootState } from "../../redux";
import { getTotals } from "../../redux/cartSlice";
import { userInfo } from "../../type";
import Auth from "../auth/auth";

const HeaderRight = styled.div`
  position: fixed;
  right: 90px;
  top: 42px;
  z-index: 99;
  span {
    line-height: 30px;
    margin-left: 15px;
    font-size: 14px;
    color: black;
    font-weight: 600;
  }
`;

/**
 * 헤더 오른쪽에서 로그인, 카트를 담고있습니다.
 */
const RightForm = () => {
  console.log("GnbRight");
  const cartData = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const [user, setUser] = useState<userInfo>();

  useEffect(() => {
    Auth().then((data) => setUser(data));
  }, [user?.isAuth]);

  useEffect(() => {
    dispatch(getTotals(cartData));
  }, [cartData]);
  return (
    <>
      {user?.isAuth ? (
        <HeaderRight>
          <div>
            <span>{user.name}님</span>
            <Link to="/cart">
              <span>
                CART (<b>{cartData.cartTotalQuantity}</b>){" "}
              </span>
            </Link>
          </div>
        </HeaderRight>
      ) : (
        <HeaderRight>
          <div>
            <Link to="/login">
              <span>LOIN/JOIN</span>
            </Link>
            <Link to="/cart">
              <span>
                CART (<b>{cartData.cartTotalQuantity}</b>){" "}
              </span>
            </Link>
          </div>
        </HeaderRight>
      )}
    </>
  );
};

export default RightForm;
