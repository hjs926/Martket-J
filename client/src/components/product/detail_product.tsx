import React, { useEffect } from "react";
import axios from "../../axios/axios";

function detail_product(props: any) {
  const productId = props.match.params.productID;

  useEffect(() => {
    axios
      .get(`/api/product/products_by_id?id=${productId}&type=single`)
      .then((response) => {
        if (response.data.success) {
          console.log("response.data 입니다.", response.data);
        } else {
          alert("상세 정보 가져오기를 실패했습니다");
        }
      });
  }, []);

  return (
    <div style={{ width: "100%", padding: "3rem 4rem" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>product name</h1>
      </div>
    </div>
  );
}

export default detail_product;
