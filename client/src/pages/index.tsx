import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Item from "../components/slide/slideItem";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "../axios/axios";
import { Card, Col, Row } from "antd";
import "antd/dist/antd.css";
import { Product2 } from "../type";

const { Meta } = Card;

const PRODUCTMORE_URL = "/api/product/products";

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
  display: flex;
  flex-direction: column;
`;

const MainPage = () => {
  const [products, setProducts] = useState<Product2[]>([]);
  const [Skip, setSkip] = useState(0);
  const [Limit, setLimit] = useState(8);
  const [postSize, setPostSize] = useState(0);

  useEffect(() => {
    let body = {
      skip: Skip,
      limit: Limit,
    };
    getProducts(body);
  }, []);

  const getProducts = (body: any) => {
    axios.post(PRODUCTMORE_URL, body).then((response) => {
      if (response.data.success) {
        if (body.loadMore) {
          console.log("상품목록: ", response.data);
          setProducts([...products, ...response.data.productInfo]);
        } else {
          setProducts(response.data.productInfo);
        }
        setPostSize(response.data.postSize);
      } else {
        alert("상품 불러오기 실패");
      }
    });
  };

  const handleProductMore = () => {
    let skip = Skip + Limit;

    let body = {
      skip: skip,
      limit: Limit,
      loadMore: true,
    };
    getProducts(body);
    setSkip(skip);
  };

  const renderCards = products.map((product, index) => {
    console.log("product 정보", product);
    // console.log("product.title 정보", product.title);
    return (
      <Col lg={6} md={8} xs={24}>
        <StyledCard
          className="img-box"
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

      {postSize >= Limit && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={handleProductMore}>더보기</button>
        </div>
      )}
    </>
  );
};
export default MainPage;
