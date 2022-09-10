import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import ProductDetail from "../../components/product/detail";
import { QueryKeys, restFetcher } from "../../queryClient";
import { Product } from "../../type";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { data } = useQuery<Product>([QueryKeys.PRODUCTS, id], () =>
    restFetcher({
      method: "GET",
      path: `/products/${id}`,
    })
  );
  if (!data) return null;
  console.log("상세목록페이지입니다.");
  console.log("key", [QueryKeys.PRODUCTS, id]);
  console.log("data", data);

  return (
    <div>
      <br />
      <ProductDetail {...data} />
    </div>
  );
};

export default ProductDetailPage;
