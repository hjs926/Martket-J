import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Item from "../components/slide/slideItem";
import styled from "styled-components";
import ProductList from "../components/product/products";
import { useEffect, useState } from "react";
import axios from "../axios/axios";
import { Card, Col, Row } from "antd";
import "antd/dist/antd.css";

const { Meta } = Card;

const MainSection2 = styled.section`
  max-width: 100%;
  padding-left: 200px;
  padding-right: 100px;
  margin-top: 80px;
  display: flex;
  flex-direction: column;

  .main-section-2tit {
    text-align: center;
  }

  .main-section-2contents {
    min-width: 1000px;
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

const StyledCard = styled(Card)`
  box-sizing: border-box;
  img {
    max-width: 100%;
    height: 100%;
  }
`;

// const CardContainer = styled.div`
//   width: 20vw;
//   height: 30vh;
//   float: left;
//   margin: 3px;
//   background: #0000;
//   overflow: hidden;
//   border: 0.5px solid grey;
// `;

const StyledButton = styled.button`
  display: flex;
  justifycontent: center;
  color: red;
  background-color: #0000;
  border: 0.5px solid grey;
  margin-left: 500px;
  margin-top: 100px;
`;

// const Meta = styled.div`
//   background: white;
//   overflow: hidden;
//   border: 1px solid red;
// `;

/*
categorys: 1
createdAt: "2022-09-20T16:29:16.251Z"
description: "123"
images: Array(1){
  0: "uploads\\1663691352513_2021_07_ver1_1.png"
  length: 1
}
price: 333
sold: 0
title: "123"
updatedAt: "2022-09-20T16:29:16.251Z"
views: 0
__v: 0
_id: {
  categorys: 1
  createdAt: "2022-09-20T16:29:16.251Z"
  description: "123"
  images: ['uploads\\1663691352513_2021_07_ver1_1.png']
  price: 333
  sold: 0
  title: "123"
  updatedAt: "2022-09-20T16:29:16.251Z"
  views: 0
  __v: 0
  _id: "6329ea5cded32e2ff8b739f1"}
  
*/

const MainPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/api/product/products").then((response) => {
      if (response.data.success) {
        console.log("상품목록: ", response.data);
        setProducts(response.data.productInfo);
      } else {
        alert("상품 불러오기 실패");
      }
    });
  }, []);

  const renderCards = products.map((product, index) => {
    console.log("product 정보", product);
    // console.log("product.title 정보", product.title);
    return (
      <Col lg={6} md={8} xs={24}>
        <StyledCard
          key={index}
          cover={<img src={`http://localhost:4000/${product.images[0]}`} />}
        >
          <Meta title={product.title} description={`${product.price}`} />
        </StyledCard>
      </Col>
    );
  });

  return (
    <>
      <section className="main-section-1">
        <Item />
      </section>
      <MainSection2 className="main-section-2">
        <div className="main-section-2tit">
          <h2>상품목록</h2>
        </div>
        <Row gutter={[16, 16]}>{renderCards}</Row>
      </MainSection2>

      <StyledButton>더보기</StyledButton>
    </>
  );
};
export default MainPage;
