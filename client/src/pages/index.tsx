import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Item from "../components/slide/slideItem";
import styled from "styled-components";
import ProductList from "../components/product/products";
import { useEffect } from "react";
import axios from "../axios/axios";

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
  useEffect(() => {
    axios.post("/api/product/products").then((res) => {
      if (res.data.success) {
        console.log(res.data);
      } else {
        alert("상품 불러오기 실패");
      }
    });
  }, []);

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
