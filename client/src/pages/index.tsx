import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Item from "../components/slide/slideItem";
import styled from "styled-components";
import ProductList from "../components/product/products";

const MainSection2 = styled.section`
  width: 1440px;
  margin-left: 200px;
  margin-right: 100px;
  margin-top: 80px;
`;

const MainPage = () => {
  console.log("메인페이지");
  return (
    <>
      <section className="main-section-1">
        <Item />
      </section>
      <MainSection2 className="main-section-2">
        <div className="main-section-2tit">
          <h2>상품 리스트</h2>
          <ProductList />
        </div>
      </MainSection2>
    </>
  );
};
export default MainPage;
