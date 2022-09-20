import React, { useState } from "react";
import axios from "axios";
import FileUpload from "./FileUpload";

const Categorys = [
  { key: 1, value: "TOP" },
  { key: 2, value: "OUTER" },
  { key: 3, value: "PANTS" },
  { key: 4, value: "DRESS" },
  { key: 5, value: "SHOES" },
  { key: 6, value: "BAG" },
  { key: 7, value: "ETC" },
];

function addForm(props: any) {
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [Price, setPrice] = useState(0);
  const [Category, setCategory] = useState(1);
  const [Images, setImages] = useState([] as any);

  const handleChangeTitle = (e: any) => {
    setTitle(e.currentTarget.value);
  };

  const handleChangeDescription = (e: any) => {
    setDescription(e.currentTarget.value);
  };

  const handleChangePrice = (e: any) => {
    setPrice(e.currentTarget.value);
  };

  const handleChangeCategory = (e: any) => {
    setCategory(e.currentTarget.vale);
  };

  const updateImages = (newImages: any) => {
    setImages(newImages);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // if (!Title || !Description || !Price || !Category || !Images) {
    //   return alert("모든 칸을 채워주세요");
    // } //유효성 체크 -> 모든 칸이 채워지도록

    //서버에 채운 값들을 req로 보낸다

    const body = {
      //로그인 된 사람의 ID
      // writer: props.user.userData_id,
      title: Title,
      description: Description,
      price: Price,
      categorys: Category,
      images: Images,
    };

    axios.post("http://localhost:4000/api/product", body).then((res) => {
      if (res.data.success) {
        console.log("res.data", res.data);
        alert("상품 업로드 성공");
        props.history.push("/");
      } else {
        alert("상품 업로드 실패");
      }
    });
  };

  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h2>상품 업로드</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <FileUpload moveFunction={updateImages} />

        <br />
        <br />
        <label>이름</label>
        <input onChange={handleChangeTitle} value={Title} />
        <br />
        <br />
        <label>설명</label>
        <textarea onChange={handleChangeDescription} value={Description} />
        <br />
        <br />
        <label>가격</label>
        <input onChange={handleChangePrice} value={Price} />
        <br />
        <br />
        <select onChange={handleChangeCategory} value={Category}>
          {Categorys.map((item) => (
            <option key={item.key} value={item.key}>
              {item.value}
            </option>
          ))}
        </select>
        <br />
        <br />
        <button onClick={handleSubmit}>확인</button>
      </form>
    </div>
  );
}

export default addForm;
