import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { addToCart } from "../../redux/cartSlice";
import { Product } from "../../type";

const DetailContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 100px 150px 0 250px;
`;

const ProductInfo = styled.div`
  border: 1px solid #000;
  margin-right: 30px;
  width: 600px;
  min-width: 450px;
  text-align: center;
  padding: 30px;

  span {
    font-size: 20px;
  }
  p {
    margin-top: 100px;
  }
  .price {
    font-size: 30px;
  }
  button {
    margin-top: 90px;
    width: 200px;
    font-size: 16px;
    width: 300px;
    height: 45px;
    background-color: black;
    color: white;
    cursor: pointer;
  }
`;

const ProductImage = styled.div`
  /* border: 1px solid #000; */
  padding: 10px;
  max-width: 600px;
  height: auto;
  img {
    max-width: 100%;
    min-width: 400px;
    height: auto;
    object-fit: contain;
  }
`;

const ProductDetail = (product: Product) => {
  console.log("product detail");
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handlAddToCart = (product: Product) => {
    dispatch(addToCart(product));
    navigate("/cart"); //클릭시 cart로 페이지 이동
  };
  return (
    <DetailContainer>
      <ProductImage>
        <img src={product.image} />
      </ProductImage>
      <ProductInfo>
        <span>
          <b>{product.title}</b>
        </span>
        <p>{product.description}</p>
        <p className="price">${product.price.toFixed(2)}</p>

        <button onClick={() => handlAddToCart(product)}>담기</button>
      </ProductInfo>
    </DetailContainer>
  );
};
export default ProductDetail;
