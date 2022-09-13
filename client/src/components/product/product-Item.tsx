import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { addToCart } from "../../redux/cartSlice";
import { Product } from "../../type";

const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  width: 25%;
  margin: 0 0 2.5%;
  padding: 0 0.75%;
  box-sizing: border-box;

  img {
    max-width: 100%;
    height: 100%;
  }
  div {
    p {
      overflow: hidden; // 을 사용해 영역을 감출 것
      text-overflow: ellipsis; // 로 ... 을 만들기
      white-space: nowrap; // 아래줄로 내려가는 것을 막기위해
      font-size: 14px;
      font-weight: bold;
      &.red {
        color: #fd3e18;
      }
    }
  }
`;

const ProductItem = (product: Product) => {
  const dispatch = useDispatch();
  const handlAddToCart = (product: Product) => {
    dispatch(addToCart(product));
  };

  return (
    <Item>
      <img src={product.image} />
      <div>
        <p className="red">{product.category}</p>
        <Link to={`/products/${product.id}`}>
          <p>{product.title}</p>
        </Link>
        <p className="red">${product.price}</p>
        <button onClick={() => handlAddToCart(product)}>담기</button>
      </div>
    </Item>
  );
};

export default ProductItem;
