import { Router } from "express";
import validateTrain from "../middleware/validateTrain.js";
import geographyController from "../middleware/geographyController.js";

const router = Router();

router.get('/:trainNumber', validateTrain, geographyController);

export default router;