import React, { useState } from "react";
import Dropzone from "react-dropzone";
import axios, { AxiosResponse } from "axios";

function FileUpload(props) {
  const [Images, setImages] = useState([] as any);

  const handleDropImage = (files: any) => {
    let formData = new FormData();

    const config: any = {
      header: { "content-type": "multipart/form-data" },
    };
    formData.append("file", files[0]);
    axios
      .post("http://localhost:4000/api/product/image", formData, config)
      .then((response: AxiosResponse<any, any>) => {
        if (response.data.success) {
          setImages([...Images, response.data.filePath]);
          props.movefunction([...Images, response.data.filePath]);
        } else {
          alert("파일 저장 실패.");
        }
      });
  };
  //서버로 데이터를 보낼 때는 header를 따로 설정을 해줘야한다.
  //사진을 FormData에 담기 위해서는 formData의 append를 사용해서
  //'file'이라는 key와 사진정보가 value로 담겨지는 것이다.

  const handleDeleteImage = (image: any) => {
    const currentIndex = Images.indexOf(image);
    let newImages = [...Images];
    newImages.splice(currentIndex, 1);
    setImages(newImages);
    props.movefunction(newImages);
    // 내가 클릭한 이미지의 index 번호~1까지 지워주겠다는 의미
    // ex) index 번호 0을 클릭했다면 0부터1까지 지우는거나 하나만 지움
    // ex) index 번호 2를 클릭했다면 2부터3까지 지우는거나 하나만 지움
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Dropzone onDrop={handleDropImage}>
        {({ getRootProps, getInputProps }) => (
          <div
            style={{
              width: 300,
              height: 240,
              border: "1px solid lightgray",
              display: "flex",
              alignSelf: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
            {...getRootProps()}
          >
            <input {...getInputProps()} />
          </div>
        )}
      </Dropzone>

      <div
        style={{
          display: "flex",
          width: "350px",
          height: "240px",
          overflowX: "scroll",
        }}
      >
        {Images.map((image: any, index: any) => (
          <div onClick={() => handleDeleteImage(image)} key={index}>
            <img
              style={{ minWidth: "300px", width: "300px", height: "240px" }}
              src={`http://localhost:4000/${image}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FileUpload;
