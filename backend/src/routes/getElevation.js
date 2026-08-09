import { Router } from "express";
import validateElevation from "../middleware/validateElevation.js";
import elevationController from "../middleware/elevationController.js";

const router = Router();
router.post('/', validateElevation, elevationController)

export default router