import styled from "styled-components";
import Item from "../slide/slideItem";
import ProductPage from "../product/products";

const Filter = styled.div`
  display: flex;
  width: 85%;
  margin: 0 auto;
  justify-content: flex-end;
`;

const Filter2 = styled.p`
  padding: 2px;
  cursor: pointer;
`;

const Flex_wrap = styled.div`
  max-width: 1400px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
  gap: 70px 0px;
  margin: 0 auto;
  margin-top: 35px;
`;

export const Main = () => {
  return (
    <>
      <Item />
      <Filter>
        <Filter2>최신순 |</Filter2>
        <Filter2>낮은 가격</Filter2>
        <Filter2>| 높은 가격</Filter2>
      </Filter>
      <Flex_wrap>
        <ProductPage />
      </Flex_wrap>
    </>
  );
};
