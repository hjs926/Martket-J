import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import CategoryForm from "../../components/category/category";
import { getClient, QueryKeys, restFetcher } from "../../queryClient";
import { GetProduct } from "../../type";

const ProducListController = styled.div`
  width: 75%;
  min-width: 850px;
  border-radius: 1em;
  /* box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2); */
  margin: 100px 150px 0 250px;
  ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
`;

type TypeCategory = { category: string };

const useFetcher = (category: any) => {};
// const useFetcher = (category: string) => {
//   if (category === "products") category = "category";
//   console.log("category", category);

//   return useQuery<GetProduct>([QueryKeys.PRODUCTS], () =>
//     restFetcher({
//       method: "POST",
//       path: `/api/product/${category}`,
//     })
//   );
// };

const CategoryPage = () => {
  const params = useParams<TypeCategory>();
  const [ProductItem, setProductItem] = useState<GetProduct>();
  let category = params.category;
  console.log(category);
  if (category === undefined) category = "category";
  console.log(category);
  const { mutate: GetProduct } = useMutation<GetProduct>(
    () =>
      restFetcher({
        method: "POST",
        path: `/api/product/${category}`,
      }),
    {
      onSuccess: (response) => {
        setProductItem(response);
      },
    }
  );
  useEffect(() => {
    GetProduct();
  }, []);

  console.log("data", ProductItem);
  if (!ProductItem) return null;

  return (
    <ProducListController>
      <br />
      Total : <b>{ProductItem.postSize}</b> items
      <ul>
        {ProductItem?.productInfo.map((product) => (
          <CategoryForm {...product} key={product._id} />
        ))}
      </ul>
    </ProducListController>
  );
};

export default CategoryPage;
