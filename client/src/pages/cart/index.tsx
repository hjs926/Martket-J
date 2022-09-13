import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../redux";
import { clearCart, getTotals } from "../../redux/cartSlice";
import CartItem from "../../components/cart/items";

const CartQuantity = styled.div`
  margin: 100px 0 0 250px;
`;
const CartQuantity_null = styled.div`
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: bold;
`;

const CartContainer = styled.div`
  display: flex;
  /* border: 1px solid black; */

  margin: 0 0 0 250px;
  min-height: 200px;
  .clear_cart {
    margin-top: 30px;
    width: 150px;
  }
  .cart-info {
    margin-left: 30px;
    border-radius: 1.5em;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    width: 500px;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .cart-subtotal {
      font-size: 30px;
      font-weight: bold;
      height: 150px;
    }
  }
`;

const Cart = () => {
  console.log("장바구니페이지입니다.");
  //const { cartTotalQuantity } = useSelector((state: RootState) => state.cart);
  const cartData = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals(cartData));
  }, [cartData]);

  const handleClearCart = () => {
    dispatch(clearCart(cartData));
  };

  return (
    <>
      <CartQuantity>
        장바구니 페이지입니다 <b>{cartData.cartTotalQuantity}</b>개의 상품이
        담겼습니다.
      </CartQuantity>
      {cartData.cartItems.length === 0 ? (
        <CartQuantity_null>
          <p>담긴 상품이 없습니다.</p>
        </CartQuantity_null>
      ) : (
        <CartContainer>
          <div>
            {cartData.cartItems?.map((cartItem) => (
              <CartItem {...cartItem} key={cartItem.id} />
            ))}
            <button className="clear_cart" onClick={() => handleClearCart()}>
              Clear Cart
            </button>
          </div>
          <div className="cart-info">
            <div className="cart-subtotal">
              <span>Subtotal : </span>
              <span>${cartData.cartTotalAmount.toFixed(2)}</span>
            </div>
          </div>
        </CartContainer>
      )}
    </>
  );
};
export default Cart;
