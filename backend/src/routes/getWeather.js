import { Router } from "express";
import validateWeather from "../middleware/validateWeather.js";
import weatherController from "../middleware/weatherController.js";

const router = Router();
router.post('/', validateWeather, weatherController)

export default router;