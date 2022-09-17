import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { SyntheticEvent } from "react";
import { getClient, QueryKeys } from "../../queryClient";
import { Product } from "../../type";

const AddForm = () => {
  const PRODUCT_UPROAD_URL = "http://localhost:4000/api/product";

  const queryClient = getClient();
  const { mutate: addProduct } = useMutation(
    ({ title, image, price, description }: Product) =>
      axios.post(PRODUCT_UPROAD_URL, {
        title,
        image,
        price,
        description,
      }),
    {
      onSuccess: ({ addProduct }: any) => {
        queryClient.invalidateQueries([QueryKeys.PRODUCTS], {
          exact: false,
        });
      },
    }
  );

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const formData = [...new FormData(e.target as HTMLFormElement)].reduce<{
      [key: string]: any;
    }>((res, [key, val]) => {
      res[key] = val;
      return res;
    }, {});
    console.log(formData);
    formData.price = Number(formData.price);
    addProduct(formData as Product);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        상품명: <input name="title" type="text" required />
      </label>
      <label>
        이미지URL: <input name="image" type="text" required />
      </label>
      <label>
        상품가격: <input name="price" type="number" required min="1000" />
      </label>
      <label>
        상세: <textarea name="description" />
      </label>
      <button type="submit">등록</button>
    </form>
  );
};
export default AddForm;
