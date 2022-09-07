import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import ProductItem from "../../components/product/product-Item";
import { QueryKeys, restFetcher } from "../../queryClient";
import { Product } from "../../type";

const ProducListController = styled.div`
  width: 1400px;
  min-width: 500px;
  /* border: 1px solid #666666; */
  padding: 0 0 0 70px;
  border-radius: 1em;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
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
      상품목록 페이지 입니다.
      <ul>
        {data?.map((product) => (
          <ProductItem {...product} key={product.id} />
        ))}
      </ul>
    </ProducListController>
  );
};

export default ProducList;
