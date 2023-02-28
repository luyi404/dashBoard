import express from "express";

import {getProduct, getCustomers, getTransactions} from "../controllers/client.js"

const router = express.Router();
router.get("/products", getProduct);
router.get("/customers", getCustomers);
router.get("/transactions", getTransactions);

export default router;