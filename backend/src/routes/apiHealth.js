import { Router } from "express";
import apiHealthCheck from "../controllers/apiHealthCheck.js";

const router = Router();

router.get('/', apiHealthCheck)

export default router