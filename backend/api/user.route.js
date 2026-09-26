import express from "express";

import UserController from "./user.controller.js";

const router = express.Router();

router.route("/").post(UserController.apiPostNewUser);

export default router;
