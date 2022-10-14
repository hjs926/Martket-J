import styled from "styled-components";
import Item from "../slide/slideItem";
import ProductPage from "../product/products";

const Flex_wrap = styled.div`
  max-width: 1400px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
  gap: 70px 0px;
  margin: 0 auto;
  margin-top: 35px;
`;

/**
 * 메인 페이지에서 상품을 보여주는 컴포넌트입니다.
 * */
export const Main = () => {
  return (
    <>
      <Item />
      <Flex_wrap>
        <ProductPage />
      </Flex_wrap>
    </>
  );
};
