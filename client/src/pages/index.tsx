import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Item from "../components/slide/slideItem";
import styled from "styled-components";
import ProductList from "../components/product/products";

const MainSection2 = styled.section`
  max-width: 100%;
  padding-left: 200px;
  padding-right: 100px;
  margin-top: 80px;
  display: flex;
  flex-direction: column;

  .main-section-2tit {
  }

  .main-section-2contents {
    min-width: 1200px;
    margin-top: 50px;

    ul {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      li {
        box-sizing: border-box;
        max-width: 13%;
      }
    }
  }
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
          <h2>상품목록</h2>
        </div>
        <div className="main-section-2contents">
          <ProductList />
        </div>
      </MainSection2>
    </>
  );
};
export default MainPage;
