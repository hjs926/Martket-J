import styled from "styled-components";
import { Product } from "../../type";

//css 겹치는 부분
const ProductItem = styled.div`
  border: 1px solid #000;
  padding: 10px;
  width: 500px;
  height: 600px;
  margin: 0 auto;
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: contain;
`;

const ProductDetail = ({
  item: { title, image, description, price },
}: {
  item: Product;
}) => (
  <ProductItem>
    <p>{title}</p>
    <Image src={image} />
    <p>{description}</p>
    <span>${price}</span>
  </ProductItem>
);
export default ProductDetail;
