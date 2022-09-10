import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { addToCart } from "../../redux/cartSlice";
import { Product } from "../../type";

const Item = styled.li`
  padding: 10px;
  width: 200px;
  img {
    width: 100%;
    height: 150px;
    object-fit: contain;
  }
  p {
    font-size: 14px;
    font-weight: bold;
    &.red {
      color: #fd3e18;
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
      <p className="red">{product.category}</p>
      <Link to={`/products/${product.id}`}>
        <p>{product.title}</p>
      </Link>
      <p className="red">{product.price * 1200} 원</p>
      <button onClick={() => handlAddToCart(product)}>담기</button>
    </Item>
  );
};

export default ProductItem;
