import express from 'express';
import {
    getAccount, 
    getAccountById,
    saveAccount,
    getAccountbyCredentials
 } from "../controller/AccountController.js";
const router = express.Router();

router.get("/accounts", getAccount)
router.get("/getAccountById/:id", getAccountById)
router.post("/saveAccount", saveAccount);
router.post("/getAccountbyCredentials", getAccountbyCredentials);

export default router;