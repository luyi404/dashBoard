import express from "express";

import {getProduct} from "../controllers/client.js"

const router = express.Router();
router.get("/products", getProducts);

export default router;