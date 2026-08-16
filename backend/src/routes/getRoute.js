import { Router } from "express";
import validateTrain from "../middleware/validateTrain.js";
import routeController from "../middleware/routeController.js";

const router = Router();

router.get('/:trainNumber', validateTrain, routeController)

export default router;