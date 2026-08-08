import { Router } from "express";
import validateTrain from "../middleware/validateTrain.js";
import trainController from "../middleware/trainController.js";

const router = Router();

router.get('/:trainNumber', validateTrain, trainController);

export default router;