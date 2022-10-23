import express from "express";
import multer from "multer";
import { Product } from "../models/Product.js";
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage: storage }).single("file");

router.post("/image", (req, res) => {
  //가져온 이미지를 저장을 해주면 된다.
  upload(req, res, (err) => {
    if (err) {
      return req.json({ success: false, err });
    }
    return res.json({
      success: true,
      filePath: res.req.file.path,
      fileName: res.req.file.filename,
    });
  });
});

router.post("/products", (req, res) => {
  let skip = req.body.skip ? parseInt(req.body.skip) : 0;
  let limit = req.body.limit ? parseInt(req.body.limit) : 20;
  //req.body.limit이 있으면 지정한거로 limit하고 없다면 20(아무거나)으로 설정
  //parseInt -> string일 경우 숫자로 변경
  Product.find()
    .skip(skip)
    .limit(limit)
    .exec((err, productInfo) => {
      if (err) return res.status(400).json({ success: false, err });
      return res
        .status(200)
        .json({ success: true, productInfo, postSize: productInfo.length });
    });
});

router.post("/", (req, res) => {
  //body에서 받은 정보를 DB에 저장
  const product = new Product(req.body);
  product.save((err) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true });
  }); // 넣은 정보들이 product 안에 다 저장 됨
});

router.get("/products_by_id", (req, res) => {
  //productId를 이용해서 DB에서 productId와 같은 상품을 가져온다.
  let type = req.query.type; //get의 경우 body가 아니라 query
  let productId = req.query.id;

  Product.find({ _id: productId }).exec((err, product) => {
    if (err) return res.status(400).send(err);
    return res.status(200).send({ success: true, product });
  });
});

//----------------------------- 카테고리 페이지 ------------------------

router.post("/category", (req, res) => {
  Product.find().exec((err, productInfo) => {
    if (err) return res.status(400).json({ success: false, err });
    return res
      .status(200)
      .json({ success: true, productInfo, postSize: productInfo.length });
  });
});

router.post("/top", (req, res) => {
  Product.find({ categorys: "1" }).exec((err, productInfo) => {
    if (err) return res.status(400).json({ success: false, err });
    return res
      .status(200)
      .json({ success: true, productInfo, postSize: productInfo.length });
  });
});

router.post("/outer", (req, res) => {
  Product.find({ categorys: "2" }).exec((err, productInfo) => {
    if (err) return res.status(400).json({ success: false, err });
    return res
      .status(200)
      .json({ success: true, productInfo, postSize: productInfo.length });
  });
});

router.post("/pants", (req, res) => {
  Product.find({ categorys: "3" }).exec((err, productInfo) => {
    if (err) return res.status(400).json({ success: false, err });
    return res
      .status(200)
      .json({ success: true, productInfo, postSize: productInfo.length });
  });
});

router.post("/dress", (req, res) => {
  Product.find({ categorys: "4" }).exec((err, productInfo) => {
    if (err) return res.status(400).json({ success: false, err });
    return res
      .status(200)
      .json({ success: true, productInfo, postSize: productInfo.length });
  });
});

router.post("/shoes", (req, res) => {
  Product.find({ categorys: "5" }).exec((err, productInfo) => {
    if (err) return res.status(400).json({ success: false, err });
    return res
      .status(200)
      .json({ success: true, productInfo, postSize: productInfo.length });
  });
});

router.post("/bag", (req, res) => {
  Product.find({ categorys: "6" }).exec((err, productInfo) => {
    if (err) return res.status(400).json({ success: false, err });
    return res
      .status(200)
      .json({ success: true, productInfo, postSize: productInfo.length });
  });
});

router.post("/etc", (req, res) => {
  Product.find({ categorys: "7" }).exec((err, productInfo) => {
    if (err) return res.status(400).json({ success: false, err });
    return res
      .status(200)
      .json({ success: true, productInfo, postSize: productInfo.length });
  });
});
//----------------------------- 카테고리 페이지 ------------------------

export default router;
