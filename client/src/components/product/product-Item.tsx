import { Link } from "react-router-dom";
import styled from "styled-components";
import { Product } from "../../type";

const Item = styled.li`
  padding: 10px;
  width: 25%;
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: contain;
  border: 1px solid #000; // TODO 테스트용 지워야함
`;

const FontRed = styled.p`
  font-size: 14px;
  color: #fd3e18;
  font-weight: bold;
`;

const ProductItem = (product: Product) => {
  return (
    <Item>
      <Image src={product.image} />
      <FontRed>{product.category}</FontRed>
      <Link to={`/products/${product.id}`}>
        <p>{product.title}</p>
      </Link>
      <FontRed>{product.price * 1200} 원</FontRed>
    </Item>
  );
};

export default ProductItem;
