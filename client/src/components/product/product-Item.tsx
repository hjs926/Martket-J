import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { addToCart } from "../../redux/cartSlice";
import { Product } from "../../type";

//
const Products = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

const Product_Image = styled.div`
  width: 380px;
  height: 380px;
  border-radius: 10px;
  margin-bottom: 16px;
`;

const Product_Image2 = styled.img`
  width: 80%;
  height: 80%;
  border-radius: 10px;
  border: 1px solid #c4c4c4;
`;

const Product_Name = styled.div`
  text-align: left;
  font-size: 18px;
  font-weight: bold;
  line-height: 0px;
  color: black;
`;

const Sub = styled.div`
  .price {
    font-size: 24px;
    font-weight: bold;
    line-height: 10px;
    color: #000000;
  }
`;
//

// ----------------------------css 시작----------------------------
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
        color: blue;
      }
    }
  }
`;
// ----------------------------css 끝----------------------------

const SERVER_URL = "http://localhost:4000/";

const ProductItem = (product: Product) => {
  const dispatch = useDispatch();
  const handlAddToCart = (product: Product) => {
    dispatch(addToCart(product));
  };

  return (
    <Item>
      <img src={`${SERVER_URL}${product.images[0]}`} />
      <div>
        <p className="red">{product.categorys}</p>
        <Link to={`/products/${product._id}`}>
          <p>{product.title}</p>
        </Link>
        <p className="red">${product.price}</p>
        {/* <button onClick={() => handlAddToCart(product)}>담기</button> */}
      </div>
    </Item>
  );
};

export default ProductItem;
