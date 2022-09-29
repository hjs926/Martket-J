import { Link } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "../../axios/axios";
import { Product } from "../../type";

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
  height: 90%;
  border-radius: 10px;
  border: 1px solid #c4c4c4;
`;

const Product_Name = styled.div`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  line-height: 0px;
  color: black;
`;

const Sub = styled.div`
  .price {
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    line-height: 10px;
    color: #000000;
  }
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

          <Product_Name>
            <p>
              {product.title} &nbsp; &nbsp; &nbsp; &nbsp;
              {product.price}원
            </p>
          </Product_Name>
          {/* <Sub>
            <p className="price">{product.price}원</p>
          </Sub> */}
        </Product_Image>
      </Products>
    );
  });

  return (
    <>
      <div>
        {renderCards}

        {postSize >= Limit && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button onClick={handleProductMore}>더보기</button>
          </div>
        )}
      </div>
    </>
  );
};
export default ProductPage;
