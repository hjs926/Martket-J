import { boardItem } from "../../type";

export const BoardDetail = (data: boardItem) => {
  console.log("Form에 들어오는 데이터", data);
  return (
    <div>
      글 Form입니다
      <div>id: {data._id}</div>
      <div>postId: {data.postId}</div>
      <div>name: {data.name}</div>
      <div>title: {data.title}</div>
      <div>content: {data.content}</div>
      <div>createdAt: {data.createdAt}</div>
      <div>updatedAt: {data.updatedAt}</div>
    </div>
  );
};

export default BoardDetail;
