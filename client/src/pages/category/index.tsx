import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import CategoryForm from "../../components/category/category";
import { QueryKeys, restFetcher } from "../../queryClient";
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

const CategoryPage = () => {
  const { data, isLoading } = useQuery<GetProduct>([QueryKeys.PRODUCTS], () =>
    restFetcher({
      method: "POST",
      path: "/api/product/category",
    })
  );
  if (isLoading) return <p>Loading...</p>;
  if (!data) return null;

  return (
    <ProducListController>
      <br />
      Total : <b>{data.postSize}</b> items
      <ul>
        {data?.productInfo.map((product) => (
          <CategoryForm {...product} key={product._id} />
        ))}
      </ul>
    </ProducListController>
  );
};

export default CategoryPage;
