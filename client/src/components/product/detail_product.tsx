import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "../../axios/axios";
import { QueryKeys, restFetcher } from "../../queryClient";
import { Product } from "../../type";

import Product_Info from "./setctions/product_Info";

function Detail_product() {
  /*
  data.data.product[0]
categorys: 1
createdAt: "2022-09-25T15:25:59.377Z"
description: "무지 기본 라운드 면 반팔 티셔츠"
images: Array(1)
0: "uploads\1664119542622_t02.PNG"
length: 1
__proto__: Array(0)
price: 8000
sold: 0
title: "베이직 라운드 반팔 티셔츠 "
updatedAt: "2022-09-25T15:25:59.377Z"
views: 0
_id: "6330730737b26e2780d46e24"
*/
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
  if (!data) return null;
  console.log("data: ", data.product[0]);
  console.log("data 타이틀입니다", data.product[0].title);
  console.log("data 타이틀입니다", data.product[0].images[0]);

  return (
    <div>
      <Product_Info />
    </div>
  );
}

export default Detail_product;
