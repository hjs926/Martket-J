import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import ProductItem from "../../components/product/product-Item";
import { QueryKeys, restFetcher } from "../../queryClient";
import { Product } from "../../type";

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

const ProducList = () => {
  const { data, isLoading } = useQuery<Product[]>([QueryKeys.PRODUCTS], () =>
    restFetcher({
      method: "GET",
      path: "/products",
    })
  );
  if (isLoading) return <p>Loading...</p>;
  if (!data) return null;

  return (
    <ProducListController>
      <br />
      Total : <b>{data.length}</b> items
      <ul>
        {data?.map((product) => (
          <ProductItem {...product} key={product.id} />
        ))}
      </ul>
    </ProducListController>
  );
};

export default ProducList;
