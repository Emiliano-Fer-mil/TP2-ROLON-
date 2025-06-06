//fact.route.js

import factController from "../controller/fact.controller.js"
import express from "express"
const router = express.Router()

router.get("/facturas", factController.getFact)

router.get ("/facturas/tipo/:tipo", factController.getFactByType)

router.post ("/facturas", factController.createFact)

export default router
