import { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RootState } from "../../redux";
import { getTotals } from "../../redux/cartSlice";
import { userInfo } from "../../type";
import Auth from "../auth/auth";
import { LogOut } from "../login/logout";

const HeaderRight = styled.nav`
  position: fixed;
  right: 90px;
  top: 42px;
  z-index: 99;
  span {
    line-height: 30px;
    margin-left: 35px;
    font-size: 14px;
    color: black;
    font-weight: 600;
  }
`;

/**
 * 헤더 오른쪽에서 로그인, 카트를 담고있습니다.
 */
const RightForm = ({ user }: any) => {
  console.log("RightForm");
  const cartData = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals(cartData));
  }, [cartData]);
  return (
    <>
      {user.isAuth ? (
        <HeaderRight>
          <div>
            <span>
              <Link to="/cart">
                CART (<b>{cartData.cartTotalQuantity}</b>)
              </Link>
            </span>
            <span>
              {user.name}님 <LogOut />
            </span>
          </div>
        </HeaderRight>
      ) : (
        <HeaderRight>
          <div>
            <Link to="/cart">
              <span>
                CART (<b>{cartData.cartTotalQuantity}</b>){" "}
              </span>
            </Link>
            <Link to="/login">
              <span>LOIN/JOIN</span>
            </Link>
          </div>
        </HeaderRight>
      )}
    </>
  );
};

export default RightForm;
