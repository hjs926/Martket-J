import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { QueryKeys, restFetcher } from "../../../queryClient";

const Main = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`;

const Product = styled.section`
  width: 600px;
  height: 600px;
  display: flex;
  flex-direction: column;
  margin-right: 100px;

  .Product_Title {
    font-size: 36px;
    line-height: 45px;
    color: #000000;
    margin-bottom: 20px;
  }

  .Product_Price {
    font-size: 36px;
    line-height: 45px;
    color: #000000;
    margin-bottom: 138px;
  }

  .Product_Description {
    font-size: 24px;
    line-height: 10px;
    color: #000000;
    margin-bottom: 20px;
  }
`;

const Product_Img = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

const Product_Info2 = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Delivery = styled.div`
  width: 150px;
  height: 20px;
  margin-bottom: 20px;

  .FreeD {
    font-size: 16px;
    line-height: 20px;
    color: #767676;
  }
`;

const Line = styled.div`
  width: 600px;
  height: 2px;
  background: #c4c4c4;
  margin-bottom: 30px;
`;

const Amount = styled.div`
  position: relative;
  width: 150px;
  height: 50px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  margin-bottom: 30px;

  .Minus {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 50%;
    left: 14px;
    transform: translateY(-50%);
    cursor: pointer;
  }

  .Count {
    position: absolute;
    width: 56px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #c4c4c4;
    border-top: none;
    border-bottom: none;
  }

  .Count_Span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .Plus {
    position: absolute;
    width: 20px;
    height: 40px;
    top: 50%;
    right: 14px;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;

const Sum = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  .Sum_Price {
    font-size: 18px;
    font-weight: 500;
    line-height: 23px;
    color: #000000;
  }

  .Sum_Total {
    font-size: 18px;
    line-height: 23px;
    color: #767676;
  }

  .Sum_Total_Count {
    font-size: 18px;
    line-height: 23px;
    color: #19ce60;
  }
  .Sum_Total_Count::after {
    content: "|";
    width: 5px;
    height: 23px;
    color: #c4c4c4;
    padding: 0px 11px;
  }

  .Sum_Total_Price {
    font-size: 36px;
    line-height: 45px;
    color: #19ce60;
  }

  .Sum_Total_Unit {
    font-size: 18px;
    line-height: 23px;
    color: #19ce60;
  }
`;

const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .Btn_But {
    width: 416px;
    height: 60px;
    border-radius: 5px;
    background: #19ce60;
    border: none;
    cursor: pointer;
    font-size: 18px;
    font-weight: bold;
    line-height: 22px;
    color: #ffffff;
    margin-right: 44px;
  }
  .Btn_Cart {
    width: 200px;
    height: 60px;
    border-radius: 5px;
    background: #767676;
    border: none;
    cursor: pointer;
    font-size: 18px;
    font-weight: bold;
    line-height: 22px;
    color: #ffffff;
  }
`;

const convertPrice = (price: any) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

function Product_Info() {
  const { id } = useParams();
  const { data } = useQuery([QueryKeys.PRODUCTS, id], () =>
    restFetcher({
      method: "GET",
      path: `/api/product/products_by_id`,
      params: {
        id,
      },
    })
  );
  return (
    <>
      <Main>
        <Product>
          <Product_Img>
            <img src={`http://localhost:4000/${data.product[0].images}`} />
          </Product_Img>
        </Product>
        <Product>
          <Product_Info2>
            <p className="Product_Title">{data.product[0].title}</p>
            <span className="Product_Price">
              {convertPrice(data.product[0].price)}원
            </span>
            <span className="Product_Description">
              {data.product[0].description}
            </span>
          </Product_Info2>

          <Delivery>
            <p className="FreeD">택배배송 / 무료배송</p>
          </Delivery>

          <Line></Line>

          <Amount>
            <img
              className="Minus"
              src="/images/icon-minus-line.svg"
              alt="Minus"
            />

            <div className="Count">
              <span className="Count_Span">1</span>
            </div>

            <img className="Plus" src="/images/icon-plus-line.svg" alt="Plus" />
          </Amount>

          <Line></Line>

          <Sum>
            <div>
              <span className={Sum.Sum_Price}>총 상품 금액</span>
            </div>

            <div>
              <span className={Sum.Total}>
                총 수량 <span className={Sum.Total_Count}>1개</span>
              </span>
              <span className={Sum.Total_Price}>1000원</span>
            </div>
          </Sum>

          <Btn>
            <button className="Btn_But">바로 구매</button>
            <button className="Btn_Cart">장바구니</button>
          </Btn>
        </Product>
      </Main>
    </>
  );
}

export default Product_Info;
