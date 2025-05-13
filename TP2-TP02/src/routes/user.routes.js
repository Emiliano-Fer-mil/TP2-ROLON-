//user.routes.js

import express from "express";
import userController from "../controllers/user.controller.js";

const router = express.Router()

router.get("/usuarios", userController.getUsers)

router.get("/usuarios/:id", userController.getUsersById)

router.post("/usuarios", userController.postUser)

router.patch("/usuarios", userController.patchUser)


export default router