import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { addToCart } from "../../redux/cartSlice";
import { Product } from "../../type";

const DetailContainer = styled.div`
  display: flex;
  margin-top: 100px;
`;

const ProductInfo = styled.div`
  border: 1px solid #000;
  margin-left: 80px;
  margin-right: 30px;
  width: 600px;
  min-width: 450px;
  text-align: center;
  padding: 10px;
  span {
    font-size: 20px;
  }
  button {
    width: 200px;
    font-size: 16px;
    margin-top: 20px;
  }
`;

const ProductImage = styled.div`
  /* border: 1px solid #000; */
  padding: 10px;
  max-width: 600px;
  height: auto;
  margin: 0 0 0 250px;
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
        <span>{product.title}</span>
        <p>{product.description}</p>
        <p>{(product.price * 1380).toFixed(0)}원</p>

        <button onClick={() => handlAddToCart(product)}>담기</button>
      </ProductInfo>
    </DetailContainer>
  );
};
export default ProductDetail;
