import express from "express";

import {
  myColor,
  myDiary,
  myDaily,
} from "../servers/controllers/myDataController";
import { snsIdCheck } from "../servers/middle/Cheak";
import {
  changeImage,
  changeNickname,
  changePassword,
} from "../servers/controllers/userModifyController";
import multer from "multer";

const register = express.Router();
const upload = multer({ dest: "uploads/" });

register.use(snsIdCheck);
// user data 추가
register.post("/addDaily", myDaily);
register.post("/addDiary", myDiary);
register.post("/addColor", myColor);

// user 회원 정보 수정
register.post("/user/modify", changeNickname);

// register.post("/user/password/modify", changePassword);

register.post("/userImg", upload.single("image"), changeImage);

module.exports = register;
