import { Link } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "../../axios/axios";
import { Product } from "../../type";

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

const Products = styled.div`
  display: flex;
  flex-direction: column;
`;

const Product_Image = styled.div`
  width: 380px;
  height: 380px;
  border-radius: 10px;
  margin-bottom: 16px;
`;

const Product_Image2 = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border: 1px solid #c4c4c4;
`;

const Store = styled.div`
  margin-bottom: 10px;
`;

const Store2 = styled.span`
  font-size: 16px;
  line-height: 22px;
  color: #767676;
`;

const Product_Name = styled.div`
  margin-bottom: 10px;
`;

const Product_Name2 = styled.div`
  font-size: 18px;
  line-height: 22px;
  color: #000000;
`;

const Product_Price = styled.div``;

const Price = styled.span`
  font-size: 24px;
  font-weight: bold;
  line-height: 30px;
  color: #000000;
`;

const Unit = styled.span`
  font-size: 16px;
  line-height: 20px;
  color: #000000;
`;

const PRODUCTMORE_URL = "/api/product/products";

const ProductPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
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

  const renderCards = products.map((product: any, index) => {
    console.log("product 정보", product);
    return (
      <Products>
        <Product_Image>
          <Product_Image2
            key={index}
            src={`http://localhost:4000/${product.images[0]}`}
          />
        </Product_Image>
        <Product_Name>
          <p>{product.description}</p>
        </Product_Name>
        <Product_Price>
          <p>{product.price}원</p>
        </Product_Price>
      </Products>
    );
  });

  return (
    <>
      <div>{renderCards}</div>

      {postSize >= Limit && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={handleProductMore}>더보기</button>
        </div>
      )}
    </>
  );
};
export default ProductPage;
