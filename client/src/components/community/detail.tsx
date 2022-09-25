import styled from "styled-components";
import { boardItem } from "../../type";

const BoardDetailContainer = styled.div`
  max-width: 100%;
  min-width: 830px;
  padding-left: 20px;
  border-bottom: 1px solid #e9e9e9;
  line-height: 1.5;

  .header {
    min-width: 830px;
    max-width: 100%;
    border-bottom: 1px solid #e9e9e9;
    border-top: 1px solid #e9e9e9;
    color: #999;
    .title-area,
    .writer-area {
      display: flex;
      padding: 11px 0 10px;
      color: black;
      .title,
      .writer {
        width: 130px;
        color: #999;
      }
    }
  }
  .content {
    margin: 30px 0;
    font-size: 17px;
  }
`;

export const BoardDetail = (data: boardItem) => {
  console.log("Form에 들어오는 데이터", data);
  return (
    <BoardDetailContainer>
      <div className="header">
        <div className="title-area">
          <div className="title">제목:</div>
          <div>{data.title}</div>
        </div>
        <div className="writer-area">
          <div className="writer">작성자:</div>
          <div> {data.name}</div>
        </div>
      </div>
      <div className="content">{data.content}</div>
      <div>createdAt: {data.createdAt}</div>
      <div>updatedAt: {data.updatedAt}</div>
    </BoardDetailContainer>
  );
};

export default BoardDetail;
