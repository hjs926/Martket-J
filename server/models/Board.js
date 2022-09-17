import mongoose from "mongoose";
const Schema = mongoose.Schema;

const BoardSchema = mongoose.Schema(
  {
    wrieter: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    createdAt: {
      // 글을 생성한 날짜
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Board = mongoose.model("Board", BoardSchema);

export { Board };
