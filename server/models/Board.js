import mongoose from "mongoose";
import { Counter } from "./Counter.js";

const Schema = mongoose.Schema;

/*
id(PK) : 게시글번호
writer(FK) : 작성자
title : 제목
content : 내용
createdAt : 만들어진 날
*/

const BoardSchema = mongoose.Schema(
  {
    writer: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    postId: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    imgPath: {
      type: String,
    },
    name: {
      type: String,
    },
    createdAt: {
      // 글을 생성한 날짜
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

BoardSchema.pre("save", async function (next) {
  var post = this;
  if (post.isNew) {
    var counter = await Counter.findOne({ name: "posts" }).exec();
    if (!counter) counter = await Counter.create({ name: "posts" });
    counter.count++;
    counter.save();
    post.postId = counter.count;
  }
  return next();
});

const Board = mongoose.model("Board", BoardSchema);

export { Board };
