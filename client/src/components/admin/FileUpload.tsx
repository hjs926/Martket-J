import React, { useState } from "react";
import Dropzone from "react-dropzone";
import axios, { AxiosResponse } from "axios";

function FileUpload() {
  const [Images, setImages] = useState([] as any);

  const dropHanlder = (files: any) => {
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
        } else {
          alert("파일 저장 실패.");
        }
      });
  };
  //서버로 데이터를 보낼 때는 header를 따로 설정을 해줘야한다.
  //사진을 FormData에 담기 위해서는 formData의 append를 사용해서
  //'file'이라는 key와 사진정보가 value로 담겨지는 것이다.

  const deleteHandler = (image: any) => {
    const currentIndex = Images.indexOf(image);
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Dropzone onDrop={dropHanlder}>
        {({ getRootProps, getInputProps }) => (
          <div
            style={{
              width: 300,
              height: 240,
              border: "1px solid lightgray",
              display: "flex",
              alignSelf: "center",
              justifyContent: "center",
            }}
            {...getRootProps()}
          >
            <input {...getInputProps()} />
          </div>
        )}
      </Dropzone>
    </div>
  );
}

export default FileUpload;
